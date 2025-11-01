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
Volta a reluzir`,
"Penumbras":``,
"Meus Versos":``,
"Alinhados":``,
"O Oco e o Verso":``,
"Cebola":``,
"Versos no Silêncio":``,
"Há Aroma no Espinho":``,
"Poesia não tem Pátria":``,
"Antes Algumas Coisas":``,
"Semente":``,
"Brisa de Palavras":``,
"Imperatriz da Cor":``,
"Condenado Eu":``,
"Por essa via":``,
"Casal de um":``,
"Super-homens":``,
"Porta Almas":``,
"Pensar ou sentir":``,
"Sertralina":``,
"Will":``,
"Poema Atômico":``,
"Doce para Dormir":``,
"Peso Bobo":``,
"Financiada até a Morte":``,
"Viúva de Porcelana":``,
"107":``,
"Figuras da Vida Real":``,
"Sensatez Canina":``,
"Vitamina R":``,
"Versos no silêncio":``,
"Eternos até o fim":``,
"Breve vive uma poesia":``,
"Nua e Crua":``,
"O fim do Fim":``,
"Chave da Porta":``,
"Se fores…":``,
"O mundo não chama pelo nome":``,
"Quarto Fantasma":``,
"1939":``,
"Brisa de palavras":``,
"Saia devagar":``,
"Pra sempre novidades":``,
"Imperatriz da cor":``,
"Condenado eu":``,
"Por essa via":``,
"Novos mares":``,
"Todo verde":``,
"Lembrei":``,
"Seu Domingo":``,
"Um dia":``,
"Poema cor de luz":``,
"Convivo":``,
"Pó eras tu":``,
"Orvalho":``,
"A meu ver":``,
"Má temática":``,
"O fim da humanidade":``,
"Flores do Alvorecer":``,
"Solitude":``,
"Insônia":``,
"Registro vitalício":``,
"Fake Life":``,
"Desconfio":``,
"Nostalgia":``,
"Auto resposta":``,
"A evolução da espécie":``,
"Neblina":``,
"Para as mulheres":``,
"Meu divã":``,
"Pernas que falam":``,
"Doce engano":``,
"Ao Poeta":``,
};

const fontes = ["Arial", "Verdana", "Georgia", "Courier New", "Comic Sans MS", "Trebuchet MS", "Impact"];
const cores = ["#e63946", "#457b9d", "#2a9d8f", "#f4a261", "#a8dadc", "#ffb703", "#6a4c93", "#ff006e", "#3a0ca3"];

const container = document.getElementById("links-container");
const poesiaContainer = document.getElementById("poesia-container");

Object.keys(poesias).forEach(titulo => {
  const link = document.createElement("a");
  link.className = "link-item";

  const h2 = document.createElement("h2");
  h2.textContent = titulo;

  // Estilos aleatórios
  h2.style.fontSize = `${Math.floor(Math.random() * 10 + 16)}px`;
  h2.style.color = cores[Math.floor(Math.random() * cores.length)];
  h2.style.fontFamily = fontes[Math.floor(Math.random() * fontes.length)];
  h2.style.fontWeight = Math.random() > 0.5 ? "bold" : "normal";

  // Evento de clique
  link.onclick = () => {
    poesiaContainer.innerHTML = `<h3>${titulo}</h3><p>${poesias[titulo]}</p>`;
    poesiaContainer.style.display = "block";
    window.scrollTo({ top: poesiaContainer.offsetTop, behavior: 'smooth' });
  };

  link.appendChild(h2);
  container.appendChild(link);
});

window.onload = function () {
  alert("Olà! Seja bem-vindo(a) ao Poexímia");
}