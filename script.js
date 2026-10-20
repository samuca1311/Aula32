// Seleciona os elementos da página.
const caixa = document.getElementById("caixa");
const entrada = document.getElementById("entrada");
const tecla = document.getElementById("tecla");
const envios = document.getElementById("envios");
const contador = document.getElementById("contador");
const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");

let corAlterada = false;
let numero = 0;

// Alterna a cor da caixa a cada clique.
caixa.addEventListener("click", function () {
    if (corAlterada === false) {
        caixa.style.backgroundColor = "lightgreen";
        corAlterada = true;
    } else {
        caixa.style.backgroundColor = "lightblue";
        corAlterada = false;
    }
});

caixa.addEventListener("mouseenter", function () {
    caixa.textContent = "Mouse está aqui!";
});

caixa.addEventListener("mouseleave", function () {
    caixa.textContent = "Clique aqui!";
});

// Mostra a tecla pressionada e adiciona o texto à lista com Enter.
entrada.addEventListener("keydown", function (evento) {
    tecla.textContent = "Você pressionou: " + evento.key;

    if (evento.key === "Enter") {
        const item = document.createElement("li");
        item.textContent = "Texto enviado: " + entrada.value;
        envios.appendChild(item);
        entrada.value = "";
    }
});

// As funções são usadas pelos botões e pelos atalhos.
function aumentar() {
    numero = numero + 1;
    contador.textContent = numero;
}

function diminuir() {
    numero = numero - 1;
    contador.textContent = numero;
}

incrementar.addEventListener("click", aumentar);
decrementar.addEventListener("click", diminuir);

document.addEventListener("keydown", function (evento) {
    if (evento.key === "ArrowUp") {
        evento.preventDefault(); // Evita rolar a página com a seta.
        aumentar();
    } else if (evento.key === "ArrowDown") {
        evento.preventDefault();
        diminuir();
    }
});
