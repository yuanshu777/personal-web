const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const context=vm.createContext({});vm.runInContext(fs.readFileSync(path.join(__dirname,'../dist/market-engine.js'),'utf8'),context);
const engine=vm.runInContext('AgentMarket',context);
function play(seed,scenario,eta){const s=engine.create(seed,scenario);s.eta=eta;for(let i=0;i<s.max;i++)engine.step(s);return s;}
for(const scenario of ['switching','trend','revert'])for(let seed=1;seed<=30;seed++)for(const eta of [8,24,60]){
  const s=engine.create(seed,scenario);s.eta=eta;
  for(let i=0;i<60;i++){
    const beforeWeights=s.weights.slice(),signals=engine.signals(s),expected=signals.exposures.reduce((sum,x,j)=>sum+x*beforeWeights[j],0);
    engine.step(s);
    assert.equal(s.last.allocation,expected,'Order uses pre-observation information');assert.deepEqual(s.last.weights,beforeWeights,'Recorded weights precede the reward');
    assert(Math.abs(s.weights.reduce((a,b)=>a+b)-1)<1e-12);assert(s.weights.every(w=>w>=.05/3&&w<1));
    for(const a of [...s.experts,s.learner,s.fixed,s.hold]){
      assert(a.cash>=-1e-8&&a.shares>=0&&a.equity>0,'No borrowing, shorting, or insolvency');
      assert(Math.abs(a.cash+a.shares*s.price-a.equity)<1e-8,'Portfolio values reconcile');assert(a.fees>=0&&a.drawdown>=0&&a.drawdown<1);
      assert.equal(a.path.length,s.turn+1);
    }
    assert.equal(s.experts[2].equity,1000,'Cash expert remains an honest zero-return comparator');
  }
  const snapshot=JSON.stringify(s);engine.step(s);assert.equal(JSON.stringify(s),snapshot,'Completion stops all state changes');
  assert(s.history.length===60&&s.weightHistory.length===61);
}
const slow=play(74129,'switching',8),fast=play(74129,'switching',60);
assert.deepEqual(slow.prices,fast.prices,'Learning speed must not alter the comparison market');
assert.notDeepEqual(slow.weightHistory,fast.weightHistory,'Learning speed materially changes adaptation');
assert.deepEqual(slow.fixed.path,fast.fixed.path,'Fixed strategy remains identical across replays');
assert.deepEqual(slow.prices,play(74129,'switching',8).prices,'Same seed replays exactly');
const a=engine.create(123),b=engine.create(456);engine.step(a);engine.step(b);assert.equal(a.last.allocation,b.last.allocation,'Unseen random news cannot affect the first decision');
assert.equal(slow.history[19].mode,'trend');assert.equal(slow.history[20].mode,'revert');assert.equal(slow.history[40].mode,'trend');
console.log('PASS: 270 market runs; causal decisions, portfolio accounting, fees, weights, replay fairness and regime changes.');
