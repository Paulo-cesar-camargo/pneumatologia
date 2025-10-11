const TOTAL = 28;
const select = document.getElementById('chapterSelect');
const title = document.getElementById('title');

// === Criar dropdown de capítulos ===
for(let i=1;i<=TOTAL;i++){
  let o = document.createElement('option');
  o.value = i;
  o.textContent = `Capítulo ${i}`;
  select.appendChild(o);
}
select.value = 1;

// === Respostas fixas (preencher manualmente depois) ===
const respostasFixas = {
  1: {a1:"Neste momento o espirito santo ainda não havia sido derramado totalmente isso aconteceu em Atos 2 no dia de pentecoste mais já estava em ação preparando os corações e os dicípulos para o dia de pentecoste ",
      a2:"Buscar com fé e ouvir atentamente a palavra de Deus para que possa  dar lugar para que o espirito santo de Deus possa trabalhar em minha vida  ",
      a3:"Separando um tempo diário com Deus , Obedecendo fielmente a Deus , Mantendo uma plena comunhão com Deus , Se santificando  e se arrependendo com sinceridade e pedir a companhia diária do espirito sento e sua vida "},
  2: {a1:"Naque dia de do grande pentecoste o espírito santo veio sobre todos as pessoas de várias línguas e nações diferentes fazendo com que cada um por meio do espírito santo de Deus pudesse entender um ao outro podendo assim ouvir a maravilhosa palavra de Deus ali ministrada pelos apóstolos e sentir o o alívio e refrigério em suas vidas ", a2:"> 📖 “Enchei-vos do Espírito” (Efésios 5:18)
💡 Como aplicar em minha vida nos dias de hoje orar diariamente pedindo que o Espírito dirija minhas palavras, decisões e atitudes. Lendo a Bíblia com o coração aberto para ouvira voz do espírito santo de Deus.", a3:"Acredito que boa parte dos 28 capítulos terão está mesma resposta pois não outra maneira de se aproximar mais do espírito santa se não for por meio de estar sempre separando um tempo diário com Deus , Obedecendo fielmente a Deus , Mantendo uma plena comunhão com Deus , Se santificando  e se arrependendo com sinceridade e pedir a companhia diária do espirito sento e sua vida  "},
  3: {a1:"", a2:"", a3:""},
  4: {a1:"", a2:"", a3:""},
  5: {a1:"", a2:"", a3:""},
  6: {a1:"", a2:"", a3:""},
  7: {a1:"", a2:"", a3:""},
  8: {a1:"", a2:"", a3:""},
  9: {a1:"", a2:"", a3:""},
  10:{a1:"", a2:"", a3:""},
  11:{a1:"", a2:"", a3:""},
  12:{a1:"", a2:"", a3:""},
  13:{a1:"", a2:"", a3:""},
  14:{a1:"", a2:"", a3:""},
  15:{a1:"", a2:"", a3:""},
  16:{a1:"", a2:"", a3:""},
  17:{a1:"", a2:"", a3:""},
  18:{a1:"", a2:"", a3:""},
  19:{a1:"", a2:"", a3:""},
  20:{a1:"", a2:"", a3:""},
  21:{a1:"", a2:"", a3:""},
  22:{a1:"", a2:"", a3:""},
  23:{a1:"", a2:"", a3:""},
  24:{a1:"", a2:"", a3:""},
  25:{a1:"", a2:"", a3:""},
  26:{a1:"", a2:"", a3:""},
  27:{a1:"", a2:"", a3:""},
  28:{a1:"", a2:"", a3:""}
};

// === Funções para carregar respostas ===
function carregarRespostas(cap){
  document.getElementById('a1').value = respostasFixas[cap].a1;
  document.getElementById('a2').value = respostasFixas[cap].a2;
  document.getElementById('a3').value = respostasFixas[cap].a3;
}

// === Atualiza fundo do capítulo ===
function atualizarFundo(cap){
  document.body.className = `cap${cap}`;
}

// === Canvas de partículas/linhas ===
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let w,h;
function resizeCanvas(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; }
window.addEventListener('resize',resizeCanvas);
resizeCanvas();

let particles = [];
function gerarParticulas(cap){
  particles=[];
  for(let i=0;i<120;i++){
    particles.push({
      x: Math.random()*w,
      y: Math.random()*h,
      vx: Math.random()*2-1,
      vy: Math.random()*2-1,
      size: Math.random()*2+1,
      color:`hsl(${cap*12},80%,60%)`
    });
  }
}

function animate(){
  ctx.clearRect(0,0,w,h);
  // Desenhar partículas
  for(let i=0;i<particles.length;i++){
    let p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if(p.x<0 || p.x>w) p.vx*=-1;
    if(p.y<0 || p.y>h) p.vy*=-1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle = p.color;
    ctx.fill();

    // Linhas entre partículas próximas
    for(let j=i+1;j<particles.length;j++){
      let p2 = particles[j];
      let dx = p.x - p2.x;
      let dy = p.y - p2.y;
      let dist = Math.sqrt(dx*dx + dy*dy);
      if(dist<100){
        ctx.strokeStyle = `rgba(255,255,255,${1-dist/100})`;
        ctx.lineWidth=0.5;
        ctx.beginPath();
        ctx.moveTo(p.x,p.y);
        ctx.lineTo(p2.x,p2.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}

// === Mudar capítulo via select ===
select.onchange = ()=>{
  let cap = parseInt(select.value);
  title.textContent = `Livro de Atos — Capítulo ${cap}`;
  carregarRespostas(cap);
  gerarParticulas(cap);
  atualizarFundo(cap);
};

// === Inicializa página ===
carregarRespostas(1);
gerarParticulas(1);
atualizarFundo(1);
animate();


