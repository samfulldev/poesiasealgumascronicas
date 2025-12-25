// Gera uma cor aleatória em hexadecimal
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Fontes permitidas
const fontes = [
    "Arial", "Georgia", "Verdana", "Courier New",
    "Trebuchet MS", "Times New Roman", "Garamond"
];

// Tamanhos permitidos (em px)
const tamanhos = [16, 18, 20, 22, 24];

// Pega uma fonte randômica
function randomFont() {
    return fontes[Math.floor(Math.random() * fontes.length)];
}

// Pega um tamanho randômico
function randomSize() {
    return tamanhos[Math.floor(Math.random() * tamanhos.length)];
}



// ===============================
// ARQUIVOS DISPONÍVEIS
// ===============================

// Liste aqui os nomes dos arquivos TXT que você tem na pasta /textos/poesias/
// O texto exibido no botão será gerado automaticamente pelo nome do arquivo
const poesias = [
    "Tormento sob o luar.txt",
    "Penumbras.txt",
    "Diamante sujo.txt",
    "Alinhados.txt",
    "O oco e o verso.txt",
    "Há aroma no espinho.txt",
    "Poesia não tem pátria.txt",
    "Antes algumas coisas.txt",
    "Brisa de palavras.txt",
    "Imperatriz da cor.txt",
    "Por essa via.txt",
    "Casal de um.txt",
    "Super-homens.txt",
    "Porta almas.txt",
    "Se fores.txt",
    "Pensar ou sentir.txt",
    "Sertralina.txt",
    "Poema Atômico.txt",
    "Doce para dormir.txt",
    "Peso bobo.txt",
    "Financiada ate a morte.txt",
    "Viuva de porcelana.txt",
    "107.txt",
    "Figuras da vida real.txt",
    "Sensatez canina.txt",
    "Vitamina R.txt",
    "Eternos ate o fim.txt",
    "Breve vive uma poesia.txt",
    "Nua e crua.txt",
    "Pó eras tu.txt",
    "Todo verde.txt",
    "Novos Mares.txt",
    "Encasulado.txt",
    "Para sempre novidades.txt",
    "1939.txt",
    "O mundo não chama pelo nome.txt",
    "Chave da porta.txt",
];

// Mesma coisa para crônicas:
const cronicas = [
    "Confissão de um letrado.txt",
    "O fim do Fim.txt",
    "Falta humanidade.txt"
];


// ===============================
// FUNÇÃO PRINCIPAL: FILTRAR O TIPO
// ===============================
function filtrarConteudo() {
    const tipo = document.getElementById("tipo").value;

    document.getElementById("links-poesias").style.display = "none";
    document.getElementById("links-cronicas").style.display = "none";
    document.getElementById("poesia-container").style.display = "none";

    if (tipo === "poesias") {
        gerarLinks("poesias");
        document.getElementById("links-poesias").style.display = "block";
    } else if (tipo === "cronicas") {
        gerarLinks("cronicas");
        document.getElementById("links-cronicas").style.display = "block";
    }
}


// ===============================
// GERAR LISTA DE LINKS
// ===============================
function gerarLinks(tipo) {
    const container = document.getElementById(
        tipo === "poesias" ? "links-poesias" : "links-cronicas"
    );

    container.innerHTML = ""; // limpa lista atual

    const lista = tipo === "poesias" ? poesias : cronicas;

  lista.forEach(arquivo => {
    const botao = document.createElement("button");
    botao.classList.add("item-botao");

    // título gerado automaticamente (remove .txt e substitui "-" por espaço)
    const titulo = arquivo.replace(".txt", "").replace(/-/g, " ");
    botao.textContent = titulo;

    // ---- ESTILO ALEATÓRIO ----
   // ---- ESTILO ALEATÓRIO (modificado) ----
botao.style.backgroundColor = "#ffffff"; // fundo sempre branco
botao.style.color = randomColor();       // cor do texto aleatória
botao.style.fontFamily = randomFont();   // fonte aleatória
botao.style.fontSize = "18px";           // tamanho fixo da fonte
botao.style.padding = "10px 18px";       // tamanho fixo do botão
botao.style.border = "2px solid #000";   // opcional: borda padrão
botao.style.margin = "5px";
botao.style.borderRadius = "5px";
// ----------------------------------------

    // ---------------------------

    botao.onclick = () => carregarTexto(tipo, arquivo);

    container.appendChild(botao);
});



// ===============================
// CARREGAR O TXT E EXIBIR NA PÁGINA
// ===============================
function carregarTexto(tipo, arquivo) {
    const caminho = `./textos/${tipo}/${arquivo}`;

    fetch(caminho)
        .then(response => {
            if (!response.ok) {
                throw new Error("Arquivo não encontrado: " + caminho);
            }
            return response.text();
        })
        .then(texto => {
            const container = document.getElementById("poesia-container");
            container.style.display = "block";

            // Formatação básica preservando quebras de linha
            container.innerHTML = `
                <div class="texto-exibido">
                    <pre>${texto}</pre>
                </div>
            `;
            window.scrollTo({ top: container.offsetTop - 50, behavior: "smooth" });
        })
        .catch(error => {
            alert("Erro ao carregar o arquivo.");
            console.error(error);
        });
}
}

