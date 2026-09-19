import * as THREE from './vendor/three.module.min.js';

// Abstract diagrams in real 3D: bounded states, nested rule levels,
// complete histories, local observers, separate dimensions of agency.
export function createWorld(canvas,onFailure){
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7));
  renderer.setClearColor(0x0a100d,0);
  const scene=new THREE.Scene();
  scene.fog=new THREE.FogExp2(0x0a100d,.008);
  const camera=new THREE.PerspectiveCamera(42,1,.1,100);
  const root=new THREE.Group();scene.add(root);
  scene.add(new THREE.AmbientLight(0xbfdca9,1.8));
  const lamp=new THREE.DirectionalLight(0xe3facb,3);lamp.position.set(2,5,6);scene.add(lamp);
  const accent=0xc6f38a,muted=0x82a276,warm=0xe5c7a4;
  const groups=Array.from({length:9},()=>new THREE.Group());groups.forEach(g=>{root.add(g);g.visible=false;});
  const lineMaterial=(color=accent,opacity=.6)=>new THREE.LineBasicMaterial({color,transparent:true,opacity});
  function box(size,color=accent,opacity=.6){return new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(size,size,size)),lineMaterial(color,opacity));}
  function dot(size=.09,color=accent){return new THREE.Mesh(new THREE.SphereGeometry(size,16,12),new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:.35,roughness:.3,metalness:.2}));}
  function line(points,color=accent,opacity=.65){return new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),lineMaterial(color,opacity));}
  function circle(radius,color=accent,opacity=.55){const pts=Array.from({length:129},(_,i)=>{const t=i/128*Math.PI*2;return new THREE.Vector3(Math.cos(t)*radius,Math.sin(t)*radius,0);});return line(pts,color,opacity);}
  // A state space enclosed by rule boundaries.
  const cage=groups[1];cage.add(box(4.4),box(4.46,muted,.2));
  for(let k=0;k<7;k++){const f=box(4.4,muted,.2);f.scale.z=.002;f.position.z=-2.2+k*4.4/6;cage.add(f);}
  const statePoints=[];for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++){const d=dot(.05,(x===0&&y===0)?accent:muted);d.position.set(x*1.5,y*1.5,z*1.5);cage.add(d);statePoints.push(d);}
  // Different levels of access: an outer frame does not obey the inner scale.
  groups[2].add(dot(.15,warm));for(let k=0;k<5;k++){const b=box(1.2+k*1.18,k===4?warm:accent,.8-k*.1);b.rotation.set(k*.16,k*.21,k*.08);groups[2].add(b);}
  // Coexisting histories share their prefix. They are NOT a probability tree.
  function makeHistories(){const g=new THREE.Group();for(let j=0;j<7;j++){const pts=[];for(let k=0;k<=100;k++){const x=-4.5+k*.09,u=Math.max(0,x+.9)/5.4;const y=(j-3)*.65*u*u;const z=(j-3)*.4*u+Math.sin(u*3)*.16;pts.push(new THREE.Vector3(x,y,z));}g.add(line(pts,j===3?accent:muted,j===3?1:.7));}return g;}
  groups[3].add(makeHistories());const historyPoint=dot(.15,warm);groups[3].add(historyPoint);
  const pastFrame=box(2,muted,.3);pastFrame.scale.set(.01,2,2);pastFrame.position.x=-.9;groups[3].add(pastFrame);
  groups[4].add(makeHistories());const observer=new THREE.Group();observer.position.x=.6;groups[4].add(observer);observer.add(dot(.19,warm));
  for(let k=0;k<3;k++){const ring=circle(.58+k*.2,accent,.6);ring.rotation.set(k*.8,k*.6,0);observer.add(ring);}
  // Capacity, choice and awareness are separate conceptual axes.
  const axes=groups[5];const freedomMarkers=[];
  for(let j=0;j<3;j++){const center=(j-1)*3.05;const disk=new THREE.Group();disk.position.x=center;for(let k=0;k<3;k++){const c=circle(.45+k*.36,j===1?warm:accent,.3+k*.17);c.rotation.x=j===2?.8:0;c.rotation.y=j===0?.45:0;disk.add(c);}const d=dot(.12,j===1?warm:accent);disk.add(d);freedomMarkers.push(d);axes.add(disk);}
  axes.add(line([new THREE.Vector3(-4.4,-1.8,0),new THREE.Vector3(4.4,-1.8,0)],muted,.4));
  // First-person center within a distributed structure.
  const cloudPoints=[];const cloudEdges=[];
  for(let i=0;i<220;i++){const y=1-2*(i+.5)/220,r=Math.sqrt(1-y*y),a=i*2.399963229728653;const p=new THREE.Vector3(Math.cos(a)*r*3,y*3,Math.sin(a)*r*3);cloudPoints.push(p);if(i%5===0)cloudEdges.push(new THREE.Vector3(0,0,0),p);}
  groups[6].add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(cloudPoints),new THREE.PointsMaterial({color:accent,size:.055,transparent:true,opacity:.75})));
  groups[6].add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(cloudEdges),lineMaterial(muted,.28)));groups[6].add(dot(.24,warm));groups[6].add(circle(1.1,accent,.6));
  // The self's model remains part of the modeled world.
  for(let k=0;k<5;k++){const b=box(5.5*Math.pow(.56,k),k%2?warm:accent,.8);b.rotation.set(k*.23,k*.3,k*.12);groups[7].add(b);}const loop=circle(3.3,muted,.5);loop.rotation.x=.8;groups[7].add(loop);const modelPoint=dot(.12,warm);groups[7].add(modelPoint);
  const openPoints=[];for(let i=0;i<=200;i++){const t=-.7+i/200*5.0;openPoints.push(new THREE.Vector3(2.6*Math.cos(t),2.6*Math.sin(t),Math.sin(t*2)*.65));}groups[8].add(line(openPoints,accent,.8));groups[8].add(box(2.5,muted,.5));groups[8].add(dot(.16,warm));
  let failed=false,lastWidth=0,lastHeight=0;
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();failed=true;onFailure();});
  function update(index,progress,still=false){
    if(failed)return;
    const width=canvas.clientWidth,height=canvas.clientHeight;if(!width||!height)return;
    if(width!==lastWidth||height!==lastHeight){renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();lastWidth=width;lastHeight=height;}
    groups.forEach((g,i)=>g.visible=i===index);const p=still ? 0.42 : progress;
    root.rotation.set(-.15+p*.19,.15+(p-.5)*.48,.025);
    const wide=index===3||index===4||index===5;
    camera.position.set(0,.25,Math.max(wide?12.5:10.5,(wide?13.4:8.5)/camera.aspect));camera.lookAt(0,.1,0);
    if(index===1){cage.rotation.y=p*.4;cage.scale.setScalar(1.12-p*.2);}
    if(index===2){groups[2].rotation.y=p*.55;groups[2].scale.setScalar(.76+p*.12);}
    if(index===3){historyPoint.position.set(-4.3+p*8.6,0,0);root.rotation.y=.25+p*.25;}
    if(index===4){observer.rotation.y=p*Math.PI;observer.rotation.x=p*.65;}
    if(index===5){root.rotation.y=.02;freedomMarkers.forEach((d,i)=>d.position.set(Math.cos(p*4+i)*(.35+i*.2),Math.sin(p*4+i)*(.35+i*.2),.1));}
    if(index===6){groups[6].rotation.y=p*.6;camera.position.z=Math.max(10-p*1.7,8.3/camera.aspect);}
    if(index===7){groups[7].rotation.y=p*.9;modelPoint.position.set(Math.cos(p*Math.PI*2)*3.3,Math.sin(p*Math.PI*2)*2.3,Math.sin(p*Math.PI*2)*2.3);}
    if(index===8)groups[8].rotation.y=p*.7;
    renderer.render(scene,camera);
  }
  return {update,dispose(){renderer.dispose();scene.traverse(o=>{o.geometry?.dispose();if(o.material){(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());}});}};
}
