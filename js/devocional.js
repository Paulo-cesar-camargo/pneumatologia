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
  2: {a1:"Naque dia de do grande pentecoste o espírito santo veio sobre todos as pessoas de várias línguas e nações diferentes fazendo com que cada um por meio do espírito santo de Deus pudesse entender um ao outro podendo assim ouvir a maravilhosa palavra de Deus ali ministrada pelos apóstolos e sentir o o alívio e refrigério em suas vidas ",
      a2:"> Enchei-vos do Espírito (Efésios 5:18) Como aplicar em minha vida nos dias de hoje orar diariamente pedindo que o Espírito dirija minhas palavras, decisões e atitudes. Lendo a Bíblia com o coração aberto para ouvira voz do espírito santo de Deus.",
      a3:"Acredito que boa parte dos 28 capítulos terão está mesma resposta pois não encontro outra maneira de se aproximar mais do espírito santo se não for por meio de estar sempre separando um tempo diário com Deus , Obedecendo fielmente a Deus , Mantendo uma plena comunhão com Deus , Se santificando  e se arrependendo com sinceridade e pedir a companhia diária do espirito sento e sua vida  "},
  3: {a1:"Espírito Santo está capacitando os discípulos Pedro e João a realizar milagres e pregar a mensagem de Jesus com ousadia. E guiando-os para agir no momento certo, transformando a fé em poder e em nome de Jesus curar o homem aleijado",
      a2:"Acredito que nada é impossível para aquele que crê da mesma forma que Pedro e João curou o aleijado através da fé em nome de Jesus podemos também fazer os mesmos feitos pedindo para a cada dia a nossa fé seja acrescentada mais e mais de forma que possamos ser mais guiados pelo Espirito Santo ",
      a3:"Oração constante, pedindo direção e sabedoria. Estudo da Bíblia, conhecendo a vontade de Deus. Obediência, mesmo quando não entendemos tudo. Sensibilidade, percebendo oportunidades de ajudar ou compartilhar fé"},
  4: {a1:"O espirito santo esta enchendo os crentes em resposta à perseguição e oração, concedendo-lhes ousadia  para proclamar a Palavra de Deus.", 
      a2:"Reabastecer a coragem e continuar a fazer a vontade de Deus em tempo e fora de tempo.", 
      a3:"Orando pedindo ousadia em meio a perseguição, e a dificuldade buscando ser cheio do Espírito Santo de Deus"},
  5: {a1:"Esta mostrando que a igreja tem que ser pura e seria em seus propositos punindo a Ananias e Safira oela sua mentira e acresentando os milagres atraves dos dicipulos por meio do espirito santo", 
      a2:"Aprendo que o espirito santo estando presente em nos todos os dia devemos ter prudencia em nossas feitas falas e açoes pois ele esta sempre a nos observar", 
      a3:"Evitando as mentiras hipocresia e tudo aquilo que não agrada a Deus obedecendo a deus acima de tudo "},
  6: {a1:"Estava enchendo Estêvão com sabedoria, fé e poder, resultando em milagres e numa pregação abençoada pelo espirito e capacitando os novos diaconos .", 
      a2:"O serviço a Deus deve ser feito por pessoas cheias do Espírito e de sabedoria, mantendo o foco na Palavra e na oração.", 
      a3:"dedicando tempo à oração para que o Espírito me capacite em minhas tarefas."},
  7: {a1:"Estevão esta confrontando os lideres de israel confrontando a dureze de seus coraçoes mostrando a gloria de jesus em sua morte ao fim Estevão é apedrejado e ve os ceus aberto ", 
      a2:"Ter a certeza que a coragem que esta em nos é fruto do espirito santo em nossas vidas sabendo que minha recompensa vem de Deus.", 
      a3:"Mantendo meu foco em cristo que é meu alvo mesmo em meio a dor e dificuldade que venha em cristo sou mais que vencedor "},
  8: {a1:"Em meio a tantos milagres deste cap 8 eles estão espandindo o evangelio atraves de felipe para samaria e para o eunuco etíope levando a palavra para outras regioes", 
      a2:"Esta nos encinando que devemos levar a palavra para qualquer pessoa independente da sua crença ou tipo de pensamento ", 
      a3:"Estando pronto para explicar as Escrituras para quem busca a verdade em qualquer lugar onde o espirito santo mandar ."},
  9: {a1:"Neste momento o espirito santo esta agindo na conversão de Saulo de Tarso o perseguidor e confirmando essa mudança a Ananias com uma visão.", 
      a2:"Aprender a aceitar que qualquer pessoa pode ser transformada pelo espirito santo independente do pecado que tenha cometido ", 
      a3:"Sendo obediente e confiante nas direções do Espírito, mesmo que me peçam para interagir com alguém que eu considerava um pecador ou inimigo."},
  10:{a1:"O espirito santo esta provando que a salvação é para todos por meio da fé atraves do derramamento do espirito santo a casa de cornelio atraves de uma visão dada a Pedro ", 
      a2:"Aprender que o espírito santo destrói barreiras culturais e preconceitos na proclamação do Evangelho", 
      a3:"Deixando de me manter em uma zona de conforto religiosa e seguindo a liderança do Espírito santo para alcançar a todos que estão necessitados."},
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
// === Faz a textarea crescer automaticamente ===
function autoGrow(textarea){
    textarea.style.height = "auto"; // reseta a altura
    textarea.style.height = textarea.scrollHeight + "px"; // ajusta à altura do conteúdo
}

// Aplica a todas as textareas de respostas ao digitar
document.querySelectorAll('.resposta').forEach(t => {
    t.addEventListener('input', ()=>autoGrow(t));
});

// === Função para carregar respostas ===
function carregarRespostas(cap){
    const resp = respostasFixas[cap] || {a1:"", a2:"", a3:""};
    document.getElementById('a1').value = resp.a1;
    document.getElementById('a2').value = resp.a2;
    document.getElementById('a3').value = resp.a3;

    // Ajusta a altura das textareas após preencher o conteúdo
    document.querySelectorAll('.resposta').forEach(t => autoGrow(t));
}

// === Inicializa página ===
carregarRespostas(1);
gerarParticulas(1);
atualizarFundo(1);
animate();









