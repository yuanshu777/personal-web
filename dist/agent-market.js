// A deliberately small, synthetic market. All agents follow explicit rules.
const AgentMarket=(()=>{
  const clamp=(x,min,max)=>Math.max(min,Math.min(max,x));
  function create(seed){return {seed:(seed>>>0)||1,turn:0,price:100,lastPrice:98,fair:102,cash:1000,shares:0,equity:1000,mix:50,policy:'balanced',market:[100],team:[100],news:'ready',allocation:0,demands:[0,0,0],feePaid:0};}
  function random(s){s.seed=(Math.imul(1664525,s.seed)+1013904223)>>>0;return s.seed/4294967296;}
  function weights(s){const value=clamp(.5+(s.fair/s.price-1)*12,0,1),trend=clamp(.5+(s.price/s.lastPrice-1)*14,0,1);return {value,trend,balanced:(value+trend)/2};}
  function step(s){
    if(s.turn>=8)return s;
    const old=s.price,equity=s.cash+s.shares*old;
    // Choose exposure using only information visible before this round's news.
    s.allocation=weights(s)[s.policy];
    const target=equity*s.allocation/(old*1.001),trade=target-s.shares,fee=Math.abs(trade)*old*.001;
    s.cash-=trade*old+fee;s.shares=target;s.feePaid+=fee;
    const value=clamp((s.fair-old)/5,-1,1),trend=clamp((old-s.lastPrice)/3,-1,1),noise=random(s)*2-1;
    const events=[{id:'optimism',shock:2.8},{id:'doubt',shock:-2.8},{id:'quiet',shock:0},{id:'buying',shock:1.6},{id:'selling',shock:-1.6}];
    const event=events[Math.floor(random(s)*events.length)],drift=(random(s)-.5)*1.2;
    const trendShare=.8*s.mix/100,valueShare=.8-trendShare;
    s.demands=[value*valueShare,trend*trendShare,noise*.2];
    const pressure=s.demands.reduce((a,b)=>a+b,0);
    s.fair=clamp(s.fair+event.shock*.55+drift,30,220);
    s.lastPrice=old;s.price=clamp(old+3.4*pressure+event.shock,20,250);
    s.equity=s.cash+s.shares*s.price;s.turn++;s.news=event.id;
    s.market.push(s.price);s.team.push(s.equity/10);
    return s;
  }
  function result(s){const team=(s.equity/1000-1)*100,market=s.price-100;return {team,market,edge:team-market};}
  return {create,step,result,weights};
})();
let marketState=AgentMarket.create(Date.now());
function marketMarkup(){return `<div class="card-heading"><span class="eyebrow">AGENT MARKET</span><span class="game-round">${say('第','ROUND')} ${marketState.turn} / 8</span></div><h2>${say('你的 Agent，<br>能跑赢这群人吗？','Can your agents<br>beat the crowd?')}</h2><p class="game-intro">${say('选一支队伍，推进 8 回合，争取跑赢一直持有。','Pick a team. Play 8 rounds. Try to beat buy-and-hold.')}</p><div id="market-display"></div><fieldset class="team-picker"><legend>${say('01 / 你的 Agent 队伍','01 / YOUR AGENT TEAM')}</legend><div>${['value','trend','balanced'].map((id,i)=>`<label><input type="radio" name="agent-team" value="${id}" ${marketState.policy===id?'checked':''}><span>${[say('价值派','Value'),say('趋势派','Trend'),say('混合队','Blend')][i]}</span></label>`).join('')}</div><p id="team-description"></p></fieldset><div class="crowd-control"><label for="crowd-mix">${say('02 / 市场里，多少人在追涨？','02 / HOW MUCH OF THE CROWD CHASES TRENDS?')}</label><div class="crowd-range"><span>${say('少','Less')}</span><input id="crowd-mix" type="range" min="0" max="100" step="10" value="${marketState.mix}" aria-label="${say('趋势派在理性交易者中的比例','Trend share among rule-based traders')}"><span>${say('多','More')}</span><output for="crowd-mix" id="crowd-value"></output></div></div><div class="game-actions"><button type="button" id="market-step">${say('开始第 1 回合','Play round 1')} →</button><button type="button" id="market-reset">${say('新开一局','New game')}</button></div><details class="game-rules"><summary>${say('怎么玩 · 模型规则','How it works · model rules')}</summary><p>${say('每回合前可更换队伍和市场配比。价值派看价格与参考价值的偏离；趋势派看上一回合的涨跌；混合队取两者平均仓位。买卖后，其他 Agent 的订单与随机消息共同推动下一次价格。','Change your team and crowd mix before each round. Value agents use the gap from reference value; trend agents use the last price move; Blend averages their exposures. After your trade, crowd orders and random news move the price.')}</p><p>${say('初始资金 1,000，只做多、可持现金，每次换仓收取 0.1% 成本。市场基准为从开局持有一单位资产，不计基准成本。滑块分配价值派与趋势派的 80% 市场份额，其余 20% 固定为噪声交易者。','Start with 1,000; long-only, with cash allowed and a 0.1% fee on traded value. The benchmark holds one unit from the start, without fees. The slider splits 80% of the crowd between value and trend agents; the remaining 20% are noise traders.')}</p></details><p class="game-disclaimer">${say('规则驱动的 Agent · 虚构市场 · 非真实 AI 预测','Rule-based agents · Synthetic market · No live AI predictions')}</p>`;}
function drawMarket(){
  const s=marketState,r=AgentMarket.result(s),signed=n=>(n>=0?'+':'')+n.toFixed(1)+'%';
  const lo=Math.min(96,...s.market,...s.team)-1,hi=Math.max(104,...s.market,...s.team)+1;
  const y=v=>148-(v-lo)/(hi-lo)*122,x=i=>12+i*44;
  const path=values=>values.map((v,i)=>(i?'L':'M')+x(i).toFixed(1)+' '+y(v).toFixed(1)).join(' ');
  const events={ready:say('市场开盘。先选队伍，再让 Agent 行动。','The market is open. Pick a team, then let your agents act.'),optimism:say('新消息带来乐观情绪。','Fresh news brought optimism.'),doubt:say('市场开始质疑前景。','News raised doubts about the outlook.'),quiet:say('没有新消息，交易行为推动了价格。','A quiet news round. Agent behavior moved the price.'),buying:say('外部买盘进入市场。','Outside buying entered the market.'),selling:say('外部卖盘进入市场。','Outside selling entered the market.')};
  const finished=s.turn===8;
  document.querySelector('#market-display').innerHTML=`<div class="market-score"><div><span>${say('你的队伍','YOUR TEAM')}</span><strong>${signed(r.team)}</strong></div><div><span>${say('一直持有','BUY & HOLD')}</span><strong>${signed(r.market)}</strong></div><div><span>${say('领先幅度','EDGE')}</span><strong>${(r.edge>=0?'+':'')+r.edge.toFixed(1)}<small> pp</small></strong></div></div><svg class="market-chart" viewBox="0 0 380 175" role="img" aria-label="${say('队伍与市场的累计表现，开局均归一为 100','Cumulative team and market performance, both starting at 100')}"><path d="M12 ${y(100).toFixed(1)}H364" stroke="#5c6f60" stroke-dasharray="3 6"/><text x="12" y="12">${say('开局 = 100','START = 100')}</text><path d="${path(s.market)}" stroke="#d5c8a1" stroke-width="2" stroke-dasharray="5 4" fill="none"/><path d="${path(s.team)}" stroke="#c6f38a" stroke-width="3" fill="none"/><circle cx="${x(s.turn)}" cy="${y(s.equity/10)}" r="4" fill="#c6f38a"/><text x="12" y="171">0</text><text x="352" y="171">8</text></svg><div class="market-legend"><span>${say('你的队伍','Your team')}</span><span>${say('市场','Market')}</span><span>${say('价格','Price')} ${s.price.toFixed(2)} · ${say('参考值','Ref.')} ${s.fair.toFixed(2)}</span></div><p class="market-story" role="status">${finished?(r.edge>.05?say('你的队伍赢了。','Your team won.'):r.edge<-.05?say('市场赢了这一局。','The market won this round.'):say('几乎打平。','Almost a draw.'))+' '+say('换个配比，看看结果如何改变。','Try a different crowd and see what changes.'):events[s.news]} ${s.turn&&!finished?say('上回合仓位','Last exposure')+' '+Math.round(s.allocation*100)+'%':''}</p>`;
  document.querySelector('.game-round').textContent=say('第','ROUND')+' '+s.turn+' / 8';
  document.querySelector('#market-step').textContent=finished?say('本局结束','Game complete'):say('推进第 ','Play round ')+(s.turn+1)+(language==='zh'?' 回合':'')+' →';
  document.querySelector('#market-step').disabled=finished;
  document.querySelectorAll('[name="agent-team"],#crowd-mix').forEach(el=>el.disabled=finished);
  updateTeamCopy();
}
function updateTeamCopy(){const descriptions={value:say('低于参考价值时多买，高于它时减少仓位。','Buy more below reference value; reduce exposure above it.'),trend:say('跟随最近的涨跌，顺势增加或减少仓位。','Increase exposure after rises; reduce it after falls.'),balanced:say('平均分配价值派与趋势派给出的仓位。','Average the exposures suggested by value and trend agents.')};document.querySelector('#team-description').textContent=descriptions[marketState.policy];document.querySelector('#crowd-value').textContent=Math.round(marketState.mix*.8)+'%';document.querySelector('#crowd-mix').setAttribute('aria-valuetext',Math.round(marketState.mix*.8)+'% '+say('趋势派','trend agents')); }
function mountMarket(){
  if(!document.querySelector('#market-display'))return;
  document.querySelectorAll('[name="agent-team"]').forEach(el=>el.addEventListener('change',()=>{marketState.policy=el.value;updateTeamCopy();}));
  document.querySelector('#crowd-mix').addEventListener('input',event=>{marketState.mix=Number(event.target.value);updateTeamCopy();});
  document.querySelector('#market-step').addEventListener('click',()=>{AgentMarket.step(marketState);drawMarket();});
  document.querySelector('#market-reset').addEventListener('click',()=>{marketState=AgentMarket.create(Date.now());document.querySelector('#agent-market').innerHTML=marketMarkup();mountMarket();document.querySelector('#market-step').focus();});
  drawMarket();
}
