/* CHAPTER & CO. V6.5 — decorative ambient system; no dependencies or audio changes. */
(()=>{'use strict';
const canvas=document.getElementById('romanceAtmosphere');if(!canvas)return;
const ctx=canvas.getContext('2d',{alpha:true});if(!ctx)return;
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
let w=0,h=0,dpr=1,particles=[],raf=0,last=0,visible=!document.hidden;
const rand=(a,b)=>a+Math.random()*(b-a);
const colors=['#fbe8c3','#f5caa4','#e7a9a6','#fff6df','#bc6a82'];
function particle(kind,randomY=true){return {kind,x:rand(0,w),y:randomY?rand(0,h):rand(-80,-8),size:kind==='petal'?rand(6,13):kind==='orb'?rand(8,25):rand(1.1,3.3),vx:rand(-.19,.19),vy:kind==='petal'?rand(.27,.65):kind==='orb'?rand(-.1,.1):rand(-.13,.1),phase:rand(0,6.28),spin:rand(-.008,.008),angle:rand(0,6.28),alpha:kind==='petal'?rand(.5,.82):kind==='orb'?rand(.08,.22):rand(.55,.98),color:colors[Math.floor(rand(0,colors.length))]};}
function resize(){const rect=canvas.getBoundingClientRect();w=Math.max(1,rect.width);h=Math.max(1,rect.height);dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);const mobile=w<650;const count=reduced.matches?(mobile?17:30):(mobile?46:94);particles=Array.from({length:count},(_,i)=>particle(i%7===0?'petal':i%11===0?'orb':'spark'));draw(0,true);}
function petal(p){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.angle);ctx.scale(.75+Math.sin(p.phase)*.22,1);ctx.beginPath();ctx.moveTo(0,-p.size);ctx.bezierCurveTo(p.size*.95,-p.size*.4,p.size*.7,p.size*.65,0,p.size);ctx.bezierCurveTo(-p.size*.85,p.size*.35,-p.size*.9,-p.size*.4,0,-p.size);ctx.fillStyle=p.color;ctx.globalAlpha=p.alpha;ctx.shadowBlur=9;ctx.shadowColor='#f8d0bd';ctx.fill();ctx.restore();}
function spark(p){const r=p.size,twinkle=.5+.5*Math.sin(p.phase);ctx.save();ctx.translate(p.x,p.y);ctx.globalAlpha=p.alpha*(.5+.5*twinkle);ctx.strokeStyle=p.color;ctx.lineWidth=.75;ctx.shadowBlur=10;ctx.shadowColor=p.color;ctx.beginPath();ctx.moveTo(-r*2.8,0);ctx.lineTo(r*2.8,0);ctx.moveTo(0,-r*2.8);ctx.lineTo(0,r*2.8);ctx.stroke();ctx.beginPath();ctx.arc(0,0,r*.52,0,Math.PI*2);ctx.fillStyle='#fff5db';ctx.fill();ctx.restore();}
function orb(p){ctx.save();ctx.globalAlpha=p.alpha;const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size*2.7);g.addColorStop(0,'#fff6db');g.addColorStop(.2,p.color);g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,p.size*2.7,0,Math.PI*2);ctx.fill();ctx.restore();}
function draw(t,staticOnly=false){ctx.clearRect(0,0,w,h);const dt=staticOnly?0:Math.min((t-last||16)/16.67,2);last=t;for(const p of particles){if(!staticOnly){p.phase+=.018*dt;p.angle+=p.spin*dt;p.x+=(p.vx+Math.sin(p.phase)*.19)*dt;p.y+=p.vy*dt;if(p.y>h+35||p.x>w+35||p.x< -35||p.y< -60){Object.assign(p,particle(p.kind,false));p.x=rand(0,w);p.y=p.kind==='petal'?-20:rand(0,h);}}if(p.kind==='petal')petal(p);else if(p.kind==='orb')orb(p);else spark(p);}}
function frame(t){raf=0;if(!visible||reduced.matches)return;draw(t);raf=requestAnimationFrame(frame);}
function update(){cancelAnimationFrame(raf);raf=0;visible=!document.hidden;if(visible){last=0;draw(0,true);if(!reduced.matches)raf=requestAnimationFrame(frame);}}
const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(canvas);reduced.addEventListener?.('change',()=>{resize();update();});document.addEventListener('visibilitychange',update);
const intro=document.getElementById('experience');if(intro&&'MutationObserver'in window){const observer=new MutationObserver(()=>canvas.classList.toggle('soft',intro.classList.contains('complete')));observer.observe(intro,{attributes:true,attributeFilter:['class']});}
resize();update();
})();
