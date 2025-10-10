const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let w,h;
function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; }
window.addEventListener('resize',resize);
resize();

let particles=[];
for(let i=0;i<150;i++){
  particles.push({
    x: Math.random()*w,
    y: Math.random()*h,
    vx: Math.random()*2-1,
    vy: Math.random()*2-1,
    size: Math.random()*3+1,
    color:`hsl(${Math.random()*360},80%,60%)`
  });
}

function animate(){
  ctx.clearRect(0,0,w,h);
  particles.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>w) p.vx*=-1;
    if(p.y<0||p.y>h) p.vy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle=p.color;
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

// botão leva para página dos capítulos
document.getElementById('entrar').onclick = ()=>{
  window.location.href = "capitulos.html";
};
