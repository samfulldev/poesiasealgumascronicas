// ===============================
// DADOS DA OBRA (3 PARTES)
// ===============================

const obras = {
  "a-bordo": [
    "Tormento sob o luar.txt",
    "Diamante sujo.txt",
    "Penumbras.txt",
    "Alinhados.txt",
    "Encasulado.txt",
    "O oco e o verso.txt",
    "Há aroma no espinho.txt",
    "Poesia não tem pátria.txt",
    "Antes algumas coisas.txt",
    "Brisa de palavras.txt",
    "Imperatriz da cor.txt",
    "A meu ver.txt",
    "Quarto Fantasma.txt",
    "Chave da porta.txt",
  ],
  "a-deriva": [
    "Casal de um.txt",
    "Super-homens.txt",
    "Porta almas.txt",
    "Pensar ou sentir.txt",
    "Sertralina.txt",
    "Poema Atômico.txt",
    "Doce para dormir.txt",
    "Peso bobo.txt",
    "Financiada até a morte.txt",
    "Viúva de porcelana.txt",
    "107.txt",
    "Figuras da vida real.txt",
    "A Evolução da Espécie.txt",
    "Autorresposta.txt",
    "Compro, logo vivo.txt",
    "Eternos até o fim.txt",
    "Fake life.txt",
    "Vitamina R.txt",
    "Pó eras tu.txt",
    "Sensatez canina.txt",
    "Nua e crua.txt",

  ],
  "horizonte": [
    "1939.txt",
    "Saia devagar.txt",
    "Para sempre novidades.txt",
    "Por essa via.txt",
    "Novos Mares.txt",
    "Todo verde.txt",
    "Um dia.txt",
    "Poema cor de luz.txt",
    "Breve vive uma poesia.txt",
    "Orvalho.txt",
    "O mundo não chama pelo nome.txt",
    "Se fores.txt",
    "Registro vitalício.txt",
    "A Evolução da Espécie.txt",
    "Disfarçado de brincar.txt",
    "Domingo.txt",
    
  ]
};

// ===============================
// FILTRO PRINCIPAL
// ===============================

function filtrarConteudo() {
  const parteSelecionada = document.getElementById("parte").value;

  // esconde todos os containers
  document.querySelectorAll(".links-container").forEach(c => {
    c.style.display = "none";
    c.innerHTML = "";
  });

  // mostra apenas a parte escolhida
  const container = document.getElementById(`links-${parteSelecionada}`);
  gerarCards(parteSelecionada, container);
  container.style.display = "flex";
}

// ===============================
// GERAR CARDS NUMERADOS
// ===============================

function gerarCards(parte, container) {
  const lista = obras[parte];

  lista.forEach((arquivo, index) => {
    const card = document.createElement("button");
    card.classList.add("card-texto", `parte-${parte}`);
    const titulo = arquivo
    .replace(".txt", "")
    .replace(/-/g, " ");

    card.textContent = titulo;


    card.onclick = () => carregarTexto(parte, arquivo);

    container.appendChild(card);
  });
}

// ===============================
// CARREGAR TEXTO
// ===============================

function carregarTexto(parte, arquivo) {
  const caminho = `./textos/${parte}/${arquivo}`;

  fetch(caminho)
    .then(response => {
      if (!response.ok) {
        throw new Error("Arquivo não encontrado");
      }
      return response.text();
    })
    .then(texto => {
      const container = document.getElementById("poesia-container");
      container.style.display = "block";
      container.innerHTML = `<pre>${texto}</pre>`;
      window.scrollTo({ top: container.offsetTop - 60, behavior: "smooth" });
    })
    .catch(() => {
      alert("Erro ao carregar o texto.");
    });
}
document.addEventListener("DOMContentLoaded", () => {
  filtrarConteudo();
});
