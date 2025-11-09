const poesias = {
  "Tormento sob o luar": `Quando a noite esfria<br>
Na escuridão pálida da lua<br>
Minha alma se ilumina<br>
Pela lembrança da tua<br>
E ao gemido do vento<br>
Sinto um doce alento<br>
A me atormentar em ternuras<br>
Sei que tu vales o sacrifício<br>
E que não sou merecido<br>
Do tamanho e nobre castigo<br>
De viver a sonhar contigo<br>
Sem consolo sem esperança<br>
A te buscar sem cessar<br>
Dentro de minhas lembranças<br>
Penso que não mais sinto<br>
Sinto que não mais vivo<br>
Apenas, amo-te mais que tudo<br>
Forte desejar de ficar junto<br>
Ao teu estranho mundo<br>
Cego<br>
Surdo<br>
Mudo`,
"Diamante Sujo": `Quando eu te vejo<br>
Sinto um peso no meu peito<br>
Enceno um sorriso falso<br>
A disfarçar meu desejo<br>
Quando eu te vejo<br>
Assim de qualquer jeito<br>
Quase me engasgo<br>
Na ingestão do teu brilho<br>
Quando eu te vejo<br>
Sempre morro de amor<br>
E mil vezes ressuscito<br>
Pelos sonhos devolvidos<br>
Quando te vejo<br>
O céu me some<br>
O chão não existe<br>
O mar é um lago calmo<br>
Sempre calmo<br>
Quando te vejo<br>
Sinto falta do teu beijo<br>
De estar bem no alto<br>
E ter medo de cair<br>
Porque eu te quero assim<br>
Teatro Sem máscaras<br>
Roupa Sem enfeites<br>
Poesia Sem rimas<br>
Apenas como és<br>
Um diamante sujo<br>
Que após a chuva<br>
Volta a reluzir`
};

const fontes = ["Arial", "Verdana", "Georgia", "Courier New", "Comic Sans MS", "Trebuchet MS", "Impact"];
const cores = ["#e63946", "#457b9d", "#2a9d8f", "#f4a261", "#a8dadc", "#ffb703", "#6a4c93", "#ff006e", "#3a0ca3"];


const poesiaContainer = document.getElementById("poesia-container");

const cronicas = {
  "Partida da felicidade": `Hoje, acordei resignado. Olhei pela janela e vi um menino jogando bola. Fazia um calor da peste e aquele menino lá todo alegre. Alias, alegre era apelido, aquilo era felicidade pura, completa ausência de dor, era um verdadeiro estado de nirvana. Logo, minha resignação mais me pareceu ser outra coisa, algo entre tristeza e raiva. Não tem nome pra isso. Sentimento esse desconfortável, foi difícil até de continuar vendo aquilo. Tristeza de não poder experimentar aquela alegria. E raiva por eu me sentir incompetente. Então comecei a me questionar do motivo de uma criança conseguir e eu não. Claro, que eu também já fui criança um dia, mas, não me lembro de ter experimentado algo sequer próximo daquela euforia e contentamento de que eu presenciava, que mais parecia transbordar do rosto daquele garoto, como uma espécie de raio de sol da aurora. 
Pelo que me lembro, o dia que me senti mais feliz na minha vida foi quando consegui encobrir uma nota baixa do meu pai, sem que ele nunca soubesse. Uma sensação de injustiça as avessas, aquele sentimento inominado, quando é você que recebe o beneficio da injustiça e não aquele que sofre de seus efeitos. Senti como se eu estivesse ganho de meu pai num jogo, por ter conseguindo ser mais esperto que ele. E a punição que eu merecia, o castigo por não ter estudado, eu não tive, e esse gosto de o ter passado para trás é uma delicia de sensação. Nesse dia, eu senti algo mais próximo talvez do que chamam de alegria plena. Era um sorrisinho na minha cara que eu não conseguia disfarçar. Estava estampado no meu semblante. Meus pais logo notaram, e perguntaram o que eu tinha, e eu apenas dizia : Nada não, hoje o dia ta tao bonito né. E eles olharam um pro outro como quem diz: Esse menino não ta batendo bem do juízo. 
Então, agora já com meus quarenta anos, me pego numa janela vendo um menino rindo, feliz, com tanta empolgação e entusiasmo pela vida, que ele acha que tem pela frente, se é que realmente terá. E ele tem 99,9% de chance de estar mais certo do que errado. E que maravilha que ele pensa assim, pois, se ele visse com meus olhos a vida como a vejo, aquele moleque iria imediatamente parar de jogar bola, e sairia andando direto pra casa e ficaria trancado no seu quarto o resto do dia. Os amiguinhos iriam achar estranho, e se perguntariam: Ué, o que aconteceu com o zezinho? E ninguém iria conseguir entender aquele moleque triste. É meu menino, aproveita e goza desta tua alegria, esta que te cabe nesse latifúndio, ou melhor, neste gramado verde. Como está escrito, "antes que venham os maus dias", aqueles dias secos, os dias suados, os dias que não mudam mais, que se repetem eternamente, cheios de anseios que ficam mais improváveis a cada dia. E aquela ideia de felicidade se tornará cada vez mais, uma vaga lembrança de um jogo de futebol. 
Não pense que sou pessimista da vida, acho isso tudo uma bobagem. Eu particularmente prefiro chopp em happy hour, a qualquer Schopenhauer, ou aquilo de primeiro verme das frias carnes, para mim, ao ponto pra bem passada. Na verdade, sou apenas desiludido com ela, amigo. Acho que a vida tem muita coisa boa, como assistir a um filme comendo batata frita. Mas, sei e tenho consciência plena que ali é apenas um domingo, e que amanha tem uma pesada segunda-feira, que terei que trocar garrafas por engarrafamentos. Troca bem injusta, claro. Que ao receber um e-mail de promoção num dia, no outro poderá ser uma nota de pesar de um amigo. ou que... Nossa! Acabaram de marcar um gol. E que golaço, por sinal! Só que o Zé tava de goleiro, e levou um frango daqueles.`,
  "A Janela da Rua 7": `Toda manhã, ela observava o mundo pela janela. Até que um dia, o mundo resolveu observá-la de volta...`
};

const containerPoesias = document.getElementById("links-poesias");
const containerCronicas = document.getElementById("links-cronicas");

function criarLinks(objeto, container) {
  Object.keys(objeto).forEach(titulo => {
    const link = document.createElement("a");
    link.className = "link-item";

    const h2 = document.createElement("h2");
    h2.textContent = titulo;
    h2.style.fontSize = `${Math.floor(Math.random() * 10 + 16)}px`;
    h2.style.color = cores[Math.floor(Math.random() * cores.length)];
    h2.style.fontFamily = fontes[Math.floor(Math.random() * fontes.length)];
    h2.style.fontWeight = Math.random() > 0.5 ? "bold" : "normal";

    link.onclick = () => {
      poesiaContainer.innerHTML = `<h3>${titulo}</h3><p>${objeto[titulo]}</p>`;
      poesiaContainer.style.display = "block";
      window.scrollTo({ top: poesiaContainer.offsetTop, behavior: 'smooth' });
    };

    link.appendChild(h2);
    container.appendChild(link);
  });
}

function filtrarConteudo() {
  const tipo = document.getElementById("tipo").value;
  containerPoesias.style.display = "none";
  containerCronicas.style.display = "none";
  poesiaContainer.style.display = "none";

  if (tipo === "poesias") {
    containerPoesias.style.display = "flex";
  } else if (tipo === "cronicas") {
    containerCronicas.style.display = "flex";
  }
}

window.onload = function () {
  criarLinks(poesias, containerPoesias);
  criarLinks(cronicas, containerCronicas);
  alert("Olà! Seja bem-vindo(a) ao Poexímia");
}