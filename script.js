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
  "O Café da Tarde": `Era uma tarde comum, mas o cheiro do café fresco parecia anunciar algo extraordinário...`,
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