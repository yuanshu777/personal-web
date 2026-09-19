import {acts,ui} from './philosophy-content.js';
let language='en';try{if(localStorage.getItem('personal-site-language')==='zh')language='zh';}catch{}
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let readingMode=false;try{readingMode=localStorage.getItem('philosophy-reading-mode')==='true';}catch{}
const t=value=>value[language];
const chapters=document.querySelector('#chapters'),dialog=document.querySelector('#contents-dialog');
const stage=document.querySelector('.visual-stage'),canvas=document.querySelector('#world-canvas');
const road=document.querySelector('.stage-road'),room=document.querySelector('.stage-room');
const sceneCaptions=[null,
  {en:'The forest continues beyond the glass. A visible possibility is not always an accessible one.',zh:'玻璃之外，森林仍在延伸。看得见的可能，不一定能够抵达。'},
  {en:'A world within a room. The insect’s horizon is not the edge of everything.',zh:'房间之内，另有一个世界。虫子的视野边界，不等于一切的边界。'},
  {en:'Imagine complete roads through a landscape, rather than a world redrawn at every instant.',zh:'想象穿过风景的完整道路，而非每一瞬间重新绘制的世界。'},
  {en:'The whirlpool has a shape of its own. None of its water is separate from the river.',zh:'漩涡有自己的形状，却没有一滴水独立于河流。'},
  {en:'Several routes are visible. Seeing a route, reaching it, and choosing it are different questions.',zh:'眼前有几条路。看见、能够抵达与做出选择，是不同的问题。'},
  {en:'A view from somewhere. Describing the window does not yet explain what it is like to look through it.',zh:'总有一个“从这里看出去”的位置。描述窗户，仍不等于解释观看的感受。'},
  {en:'A room contains a model of itself. The model belongs to the world it tries to describe.',zh:'房间容纳着自身的模型。模型也属于它试图描述的世界。'},
  {en:'An unfinished opening. The framework remains open to what has not yet been understood.',zh:'尚未闭合的开口。框架仍向那些尚未理解的东西敞开。'}
];
const scenePictures=acts.map((act,i)=>{if(!i)return null;const picture=document.createElement('div');picture.className='stage-picture stage-chapter';picture.setAttribute('aria-hidden','true');picture.dataset.scene=act.id;stage.prepend(picture);return picture;});
function prepareScene(index){const picture=scenePictures[index];if(picture&&!picture.style.backgroundImage)picture.style.backgroundImage=`url('/assets/philosophy-${acts[index].id}.webp')`;}
let currentAct=0,sceneWorld=null,frame=0,actElements=[];
let currentProgress=0,showingModel=false;

function render(){
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  document.title=language==='zh'?'身在世界，追问世界 — Yuanshu Wang':'Within the World — Yuanshu Wang';
  document.querySelector('meta[name="description"]').content=language==='zh'?'Yuanshu Wang 关于规则、可能世界、主体性、自由意志与第一人称体验的二十节哲学记录。':'Yuanshu Wang’s twenty-part inquiry into rules, possible worlds, selfhood, freedom, and first-person experience.';
  document.querySelectorAll('[data-ui]').forEach(el=>{const key=el.dataset.ui;if(key==='readMode')return;const value=t(ui[key]);if(['heroTitle','endingTitle'].includes(key))el.innerHTML=value;else el.textContent=value;});
  document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===language)));
  document.querySelector('.story-skip').textContent=t(ui.skip);
  stage.setAttribute('aria-label',t(ui.sceneLabel));chapters.setAttribute('aria-label',t(ui.essayLabel));document.querySelector('#contents-links').setAttribute('aria-label',t(ui.chaptersLabel));document.querySelector('.story-language').setAttribute('aria-label',t(ui.languageLabel));
  document.querySelector('.dialog-header button').setAttribute('aria-label',t(ui.close));
  document.querySelector('#scene-fallback').textContent=t(ui.fallback);
  chapters.innerHTML=acts.map((act,i)=>`<section class="act" id="${act.id}" data-act="${i}" aria-labelledby="title-${act.id}"><header class="act-header"><span class="act-number">${language==='zh'?'第':'ACT '}${String(i+1).padStart(2,'0')}${language==='zh'?' 幕':''} / 09</span><h2 id="title-${act.id}">${t(act.title)}</h2><p class="act-deck">${t(act.deck)}</p></header>${act.notes.map(note=>`<section class="note" id="note-${note.n}" aria-labelledby="note-title-${note.n}"><div class="note-label"><span>${language==='zh'?'节点':'NOTE'} ${String(note.n).padStart(2,'0')}</span><span class="epistemic">${t(note.type)}</span></div><h3 id="note-title-${note.n}">${t(note.title)}</h3>${note.p.map(p=>`<p>${t(p)}</p>`).join('')}${note.pull?`<blockquote class="thought-pull">${t(note.pull)}</blockquote>`:''}${note.formula?`<div class="distinction">${t(note.formula)}</div>`:''}</section>`).join('')}<div class="act-end">${String(i+1).padStart(2,'0')} / 09 — ${language==='zh'?'思考继续':'THE INQUIRY CONTINUES'}</div></section>`).join('');
  document.querySelector('#contents-links').innerHTML=acts.map((act,i)=>`<a href="#${act.id}"><span>${String(i+1).padStart(2,'0')}</span><span>${t(act.title).replace('<br>',' ')}</span></a>`).join('');
  actElements=[...document.querySelectorAll('.act')];
  applyMode();updateSceneLabels();requestUpdate();
}
function applyMode(){document.body.classList.toggle('reading-mode',readingMode);const button=document.querySelector('#mode-toggle');button.setAttribute('aria-pressed',String(readingMode));button.textContent=t(readingMode?ui.immersive:ui.readMode);}
function updateSceneLabels(){const act=acts[currentAct],caption=showingModel||!currentAct?act.caption:sceneCaptions[currentAct];stage.dataset.act=act.id;stage.dataset.view=showingModel?'model':'scene';document.querySelector('#scene-counter').textContent=String(currentAct+1).padStart(2,'0')+' / 09';document.querySelector('#scene-kind').textContent=t(act.kind);document.querySelector('#scene-symbol').textContent=language==='zh'?['世界 → 身体 → 体验','可能 / 不可能','世界 ⊂ ？','W₁(t) · W₂(t) · W₃(t)','世界 → 局部过程 → 我','能力 / 选择 / 认识','信息 → 体验？','W → I → model(W) ⊂ W','经验 / 推论 / 假设'][currentAct]:act.symbol;document.querySelector('#scene-caption').textContent=t(caption);document.querySelector('#scene-accessibility').textContent=t(caption);}
const clamp=n=>Math.max(0,Math.min(1,n));
function update(){
  frame=0;
  const headerHeight=document.querySelector('.story-header').offsetHeight;
  document.querySelector('.reading-progress').style.top=headerHeight+'px';
  stage.style.top=headerHeight+'px';
  const mobile=innerWidth<=900;
  const target=readingMode?headerHeight+60:mobile?headerHeight+stage.offsetHeight+70:innerHeight*.42;
  let index=0;for(let i=0;i<actElements.length;i++){if(actElements[i].getBoundingClientRect().top<=target)index=i;}
  if(index!==currentAct){currentAct=index;updateSceneLabels();}
  const bounds=actElements[currentAct].getBoundingClientRect();currentProgress=clamp((target-bounds.top)/Math.max(bounds.height,1));
  const amount=clamp(scrollY/(document.documentElement.scrollHeight-innerHeight));document.querySelector('#reading-progress-fill').style.width=(amount*100).toFixed(2)+'%';
  if(!readingMode){
    const photo=currentAct===0;const roomMix=photo?clamp((currentProgress-.29)*4):0;
    const modelMix=!photo&&sceneWorld&&!canvas.hidden?clamp((currentProgress-.57)/.25):0;
    if(showingModel!==(modelMix>.5)){showingModel=modelMix>.5;updateSceneLabels();}
    prepareScene(currentAct);prepareScene(currentAct+1);
    scenePictures.forEach((picture,i)=>{if(!picture)return;picture.style.opacity=i===currentAct?String(1-modelMix*.94):'0';if(i===currentAct)picture.style.transform=reduced.matches?'none':`scale(${1.03+currentProgress*.12}) translateY(${-currentProgress*1.5}%)`;});
    road.style.opacity=photo?String(1-roomMix):'0';room.style.opacity=String(roomMix);
    canvas.style.opacity=String(modelMix);
    if(!reduced.matches){road.style.transform=`scale(${1.04+currentProgress*.17}) translateY(${-currentProgress*2}%)`;room.style.transform=`scale(${1.12-currentProgress*.06})`;document.querySelector('.hero-landscape').style.transform=`scale(${1.04+Math.min(scrollY/innerHeight,1)*.08}) translateY(${Math.min(scrollY*.15,150)}px)`;}
    else{road.style.transform='none';room.style.transform='none';}
    sceneWorld?.update(currentAct,currentProgress,reduced.matches);
  }
}
function requestUpdate(){if(!frame)frame=requestAnimationFrame(update);}
// Retain the current note and its position when changing language or layout.
function preserveReading(change){
  const target=innerHeight*.55;
  const notes=[...document.querySelectorAll('.note')];
  const anchor=notes.reduce((best,n)=>n.getBoundingClientRect().top<=target?n:best,null);
  const id=anchor?.id,offset=anchor?.getBoundingClientRect().top;
  const oldY=scrollY;change();
  requestAnimationFrame(()=>{const next=id?document.getElementById(id):null;window.scrollTo({top:next?scrollY+next.getBoundingClientRect().top-offset:oldY,behavior:'instant'});requestUpdate();});
}
document.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>{if(el.dataset.lang===language)return;preserveReading(()=>{language=el.dataset.lang;try{localStorage.setItem('personal-site-language',language);}catch{}render();});}));
document.querySelector('#mode-toggle').addEventListener('click',()=>preserveReading(()=>{readingMode=!readingMode;try{localStorage.setItem('philosophy-reading-mode',String(readingMode));}catch{}applyMode();requestUpdate();}));
document.querySelector('#contents-open').addEventListener('click',()=>dialog.showModal());
document.querySelector('#contents-links').addEventListener('click',e=>{const link=e.target.closest('a');if(!link)return;dialog.close();});
window.addEventListener('scroll',requestUpdate,{passive:true});window.addEventListener('resize',requestUpdate);reduced.addEventListener('change',requestUpdate);
render();
function sceneFailure(){canvas.hidden=true;document.querySelector('#scene-fallback').hidden=false;requestUpdate();}
import('./philosophy-world.js').then(({createWorld})=>{try{sceneWorld=createWorld(canvas,sceneFailure);requestUpdate();}catch{sceneFailure();}}).catch(sceneFailure);
// The chapter elements are inserted dynamically; restore direct chapter links.
if(location.hash){const target=document.getElementById(location.hash.slice(1));if(target)requestAnimationFrame(()=>target.scrollIntoView({behavior:'instant'}));}
window.addEventListener('pagehide',()=>sceneWorld?.dispose());
window.addEventListener('pageshow',event=>{if(event.persisted){sceneWorld=null;import('./philosophy-world.js').then(({createWorld})=>{try{sceneWorld=createWorld(canvas,sceneFailure);requestUpdate();}catch{sceneFailure();}});}});
