// Causal online expert aggregation. No future prices enter the policy.
const AgentMarket=(()=>{
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const fee=.001,initial=1000,max=60;
  function random(s){s.seed=(Math.imul(1664525,s.seed)+1013904223)>>>0;return (s.seed+.5)/4294967296;}
  function normal(s){return Math.sqrt(-2*Math.log(random(s)))*Math.cos(2*Math.PI*random(s));}
  function account(){return {cash:initial,shares:0,equity:initial,peak:initial,drawdown:0,fees:0,path:[100]};}
  function create(seed,scenario='switching'){return {seed:(seed>>>0)||1,initialSeed:(seed>>>0)||1,scenario,turn:0,max,price:100,prices:[100],returns:[],anchor:100,mode:'trend',phase:-1,direction:1,eta:24,risk:.85,scores:[0,0,0],weights:[1/3,1/3,1/3],experts:[account(),account(),account()],learner:account(),fixed:account(),hold:account(),last:null,history:[],weightHistory:[[1/3,1/3,1/3]]};}
  function signals(s){
    const recent=s.returns.slice(-5),momentum=recent.reduce((a,b)=>a+b,0)/Math.max(1,recent.length);
    let mean=s.prices[0];for(const p of s.prices.slice(1))mean=.12*p+.88*mean;
    const vol=Math.sqrt(s.returns.slice(-12).reduce((a,b)=>a+b*b,0)/Math.max(1,Math.min(12,s.returns.length)));
    const scale=Math.max(.004,vol),trend=clamp(.5+momentum/(2*scale),0,1),revert=clamp(.5+(mean/s.price-1)/(4*scale),0,1);
    return {exposures:[trend*s.risk,revert*s.risk,0],momentum,gap:mean/s.price-1,vol,mean};
  }
  function rebalance(a,exposure,price){
    const capital=a.cash+a.shares*price,target=capital*clamp(exposure,0,1)/(price*(1+fee));
    const trade=target-a.shares,cost=Math.abs(trade)*price*fee;
    a.cash-=trade*price+cost;a.shares=target;a.fees+=cost;
  }
  function mark(a,price){a.equity=a.cash+a.shares*price;a.peak=Math.max(a.peak,a.equity);a.drawdown=Math.max(a.drawdown,1-a.equity/a.peak);a.path.push(a.equity/10);}
  function step(s){
    if(s.turn>=max)return s;
    const observation=signals(s),weights=s.weights.slice(),allocation=observation.exposures.reduce((a,b,i)=>a+b*weights[i],0),before=s.experts.map(a=>a.equity);
    s.experts.forEach((a,i)=>rebalance(a,observation.exposures[i],s.price));rebalance(s.learner,allocation,s.price);rebalance(s.fixed,observation.exposures.reduce((a,b)=>a+b,0)/3,s.price);if(!s.turn)rebalance(s.hold,1,s.price);
    // Next price is generated only after all allocations. Every comparator shares it.
    const phase=Math.floor(s.turn/20),changed=phase!==s.phase;
    if(changed){s.phase=phase;s.mode=s.scenario==='switching'?(phase===1?'revert':'trend'):s.scenario;s.anchor=s.price;s.direction=random(s)>.5?1:-1;}
    const noise=normal(s)*.008,previous=s.returns.at(-1)||0;
    const drift=s.mode==='trend'?.0025*s.direction+.24*previous:-.14*Math.log(s.price/s.anchor);
    const move=clamp(drift+noise,-.06,.06);s.price*=Math.exp(move);const ret=Math.exp(move)-1;
    s.prices.push(s.price);s.returns.push(ret);[...s.experts,s.learner,s.fixed,s.hold].forEach(a=>mark(a,s.price));
    const rewards=s.experts.map((a,i)=>Math.log(a.equity/before[i]));s.scores=s.scores.map((score,i)=>.97*score+s.eta*rewards[i]);
    const highest=Math.max(...s.scores),raw=s.scores.map(v=>Math.exp(v-highest)),total=raw.reduce((a,b)=>a+b,0);s.weights=raw.map(v=>.95*v/total+.05/3);s.turn++;
    s.last={turn:s.turn,weights,allocation,exposures:observation.exposures,rewards,ret,mode:s.mode,changed:changed&&s.turn>1,momentum:observation.momentum,gap:observation.gap,vol:observation.vol};s.history.push(s.last);s.weightHistory.push(s.weights.slice());return s;
  }
  function result(s){return {team:(s.learner.equity/initial-1)*100,fixed:(s.fixed.equity/initial-1)*100,market:(s.hold.equity/initial-1)*100,edge:(s.learner.equity-s.fixed.equity)/initial*100};}
  return {create,step,result,signals,fee};
})();
