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

"O fim do Fim": `Deu na TV: cientistas descobrem cura para morte
Não acreditei. Ri. 
O tempo passou e a notícia não morreu
Em todo canto se espalhava a notícia
Era uma vacina que inibia a morte das células do corpo
Em todo canto do mundo havia festa
Não mais morreríamos
Nunca mais haveria caixões nem os tristes velórios
Houve algumas classes que se revoltaram. Os donos de funerária. Os fabricantes de caixão. E muitos coveiros. As seguradoras de vida. 
Ah também toda a indústria alimentícia 
foi bastante afetada. Ate porque comida começou a ser apenas para fins recreativos  
Então a vida era so vida 
E assim rapidamente o mundo passou de bilhões para trilhões e não parava de vir gente 
O mundo lotou tanto que não havia mais espaço para todos
O caos se instalou e tantos problemas surgiram com a explosão da densidade demográfica que todos clamavam por uma solução aos governos.
Alguns grupos mais radicais exibiam cartazes que diziam: fim da vacina. 
Outros: queremos a morte
Assim a humanidade entrou em uma grande guerra mundial. Nações ativistas das vacinas contra nações ativistas do curso natural (morte).
O problema era conseguir matar alguém nessa guerra. Pois, todos eram vacinados ate entao
Não havia como ter guerra sem a morte
Entao aos poucos a humanidade se viu em desespero e a necessidade do que passou a ser conhecido como o rodizio de vida. 
Nao era possível que todos vivessem para sempre nesse planeta. 
Entao uma parcela dos mais ricos conseguiam pagar suas cotas de tempo e se mantiam vivos por tempo indeterminado. Enquanto os pobres tinham que ainda lidarem com o fim
E a vacina ficou restrista apenas para quem pudesse pagar caro por ela
O mundo voltou a ser como era.
A morte voltou a ser adotada como medida emergencial e a desigualdade só aumentava 
E os ricos viveram felizes para sempre `,

"Confissão de um letrado": `Como o Doutor se tornou professor universitário?

-Roubando.

-Desculpe, o que o senhor disse?

-Eu era ladrão. Um dia roubei uma sacola de um cara que aguardava no semáforo. Tomei-a e saí correndo. Normalmente, conseguia coisas como roupa, tênis, maquiagem, produtos de cabelo, enfim. Dando sorte, podia ser um relógio caro ou brinco de ouro. Mas, naquele dia, fiquei frustrado ao ver que havia apenas uma cocada, um par de chinelos e um livro.

-E o que o senhor fez com essas coisas?

-Comi a cocada, calcei o chinelo e o livro... bem, não tinha muito o que fazer com ele. As opções eram vender, dar ou jogar fora. A opção de o ler sequer passou pela minha cabeça. Obviamente, primeiro tentei vendê-lo, mas só perdi tempo e esforço, pois não achei ninguém que se interessasse. Pensei em dar, mas não sabia para quem. Não havia, em meu ambiente, quem gostasse de ler. Jogá-lo fora foi a solução mais rápida para me desfazer dele. Mas, quando eu estava prestes a fazé-lo , senti uma espécie de compulsão curiosa sobre o seu conteúdo. Havia em sua capa uma frase provocadora e uma imagem muito atrativa. Senti que eu precisava dar ao menos uma folheada. Uma lidinha aqui, uma lidinha ali, e pronto, descobri-me leitor. Foi assim que acabei tomando gosto pela leitura. E saí lendo tudo que via pela frente. O que me levou a adquirir uma vasta gama de conhecimento em diversas áreas, como direito, filosofia, psicologia, economia e sociologia. É como dizem, né? Uma coisa leva a outra. E, nessa, acabei entrando numa faculdade, formando-me e virando professor universitário.

-Que história incrível. O poder da leitura na transformação social de um indivíduo: ela transformou um ladrão sem rumo na vida em um renomado acadêmico.

-Um minuto, mas devo confessar-lhe uma coisa.

-Claro, Doutor, à vontade.

-Se eu vejo alguém dando sopa com um livrinho bonito, igual a este seu aí...

-Ahm?

E, num relance, abruptamente, o professor arrancou o livro das mãos do entrevistador e, como um raio, correu pela rua afora, sumindo ao dobrar a esquina.`,
"Crianças coloridas": `Eu devia ter aprendido... que guarda-chuvas não foram feitos para mim.

Bobagem levar guarda-chuva hoje, disse meu vizinho ao me ver saindo, carregando aquele troço estrategicamente vermelho, mas desnecessariamente bem maior do que eu. Fingindo não ter ouvido o conselho, segui em frente.

No meio do caminho, enquanto dirigia, liguei o som do rádio e tocava uma canção sobre sol e calor. Porém, lá fora, a coisa combinava mais com Dancing in the Rain. Então mudei de estação.

Parei no vermelho, e olhei para o lado: na calçada, um menino brincava numa poça d'água da chuva. E na sua boca havia um negócio... como se chama mesmo aquilo? 
Ah, sim: era um sorriso.

Fiquei muito intrigado — como ele poderia demonstrar qualquer tipo de felicidade, estando naquela situação? Resolvi então fazer-lhe uma caridade. Baixei o vidro e o chamei. Ele se aproximou, com os olhos desconfiados, e perguntou se eu iria lhe dar algo. Uma moeda passou pela minha cabeça, mas... eu não uso mais moedas.

A boa ação era oferecer ao menino o meu guarda-chuva. Acredite se quiser, mas foi exatamente o que eu fiz. Na verdade, eu estava tão certo de que ele aceitaria de pronto que apenas disse: "Toma, pega pra você."

Mas, por um tempo, o menino pareceu não entender nada. Depois que insisti para que ele pegasse o guarda-chuva, ele o segurou, procurando uma forma de abrir.

Quando conseguiu, ficou ali, protegido da chuva... e já não se via mais nenhuma expressão nele.

O sinal abriu, segui para o meu trabalho e senti um certo arrependimento por tê-lo doado. Afinal, eu iria tomar um banho de chuva até a porta do escritório.

Enfim, cheguei ao trabalho, tão enxuto quanto um gelo. E mal sabia eu que o pior ainda estava por vir.

Ao entrar na sala, todos olharam para mim — aquele olhar de julgamento. Eu praticamente conseguia ouvir seus pensamentos me criticando: por ter chegado tarde à reunião e por não ter sido sábio o suficiente para me resguardar da chuva.

No caminho de volta, vi novamente o menino — agora brincando com o guarda-chuva que lhe dei, aberto, revirado, boiando numa poça de lama, como se fosse um barquinho.

Desde aquele dia, não consigo mais ver utilidade alguma nesse objeto. Se for pra me molhar, eu me molho — sem medo algum de parecer feliz, como o Gene Kelly.`
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