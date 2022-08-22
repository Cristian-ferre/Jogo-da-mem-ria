"use strict"

/*
1 - Criar as cartas utilizando JS
2 - inserindo as img dinamicamente
3 - imgs duplicadas(array duplicados)
4 - mudar a posição varias vezes da imagem
5 - fazendo o usuario virar apenas duas cartas
6 - vendo c elas são iguais utilizanbdo data
*/

const personagens = [
    'Perry',
    'LazyTown',
    'backkyardigans',
    'meninas-poderosas',
    'carverna-mago',
    'tom-Jerry',
    'pou',
    'doug',
    'tres-espias-demais',
    'super-onze',
];
const audio = new Audio('../Super Mario - Som Clássico da moeda.mp3');

const grid = document.querySelector(".grid");
const spanJogador = document.querySelector(".jogador");
const timer = document.querySelector(".timer")

const criandoElemento = (tag, className) => {
    const elemento = document.createElement(tag);
    elemento.className = className;
    return elemento;
}

let primeiraCarta = "";
let segundaCarta = "";

const checarFinalGame = () => {
    const cartasdisabilitada = document.querySelectorAll(".disabilitar_carta")


    if (cartasdisabilitada.length == 20) {
        clearInterval(this.loop)//stop em um loop
        alert(`parabéns, ${spanJogador.innerHTML}! seu tempo foi: ${timer.innerHTML} segundos.`)
        document.location.reload(true);
    }

}


const checarCartas = () => {
    const primeiroPersonagem = primeiraCarta.getAttribute("data-personagem")
    const segundoPersonagem = segundaCarta.getAttribute("data-personagem")



    if (primeiroPersonagem === segundoPersonagem) {
        audio.play();
        primeiraCarta.firstChild.classList.add("disabilitar_carta")
        segundaCarta.firstChild.classList.add("disabilitar_carta")

        primeiraCarta = "";
        segundaCarta = "";

        checarFinalGame();

    } else {
        setTimeout(() => {
            primeiraCarta.classList.remove('revelar_carta')
            segundaCarta.classList.remove("revelar_carta")

            primeiraCarta = "";
            segundaCarta = "";
        }, 500)
    }
}

const revelarCarta = ({ target }) => {

    if (target.parentNode.className.includes("revelar_carta")) {
        return
    }

    if (primeiraCarta === "") {
        target.parentNode.classList.add("revelar_carta")
        primeiraCarta = target.parentNode
    } else if (segundaCarta === "") {
        target.parentNode.classList.add("revelar_carta")
        segundaCarta = target.parentNode

        checarCartas();
    }

}

const criandoCartas = (personagem) => {
    const carta = criandoElemento("section", "carta");
    const cartaFront = criandoElemento("div", "cartaFront face");
    const cartaBack = criandoElemento("div", "cartaBack face");

    cartaFront.style.backgroundImage = `url("../assets/imgs/${personagem}.png")`;

    carta.appendChild(cartaFront);
    carta.appendChild(cartaBack);


    carta.addEventListener("click", revelarCarta)

    carta.setAttribute("data-personagem", personagem)

    return carta;

}

const carregarGame = () => {
    const duplicandoPensonagens = [...personagens, ...personagens];//array duplicado duas vezes
    //espalhando duas vezes

    const cartasAleatorias = duplicandoPensonagens.sort(() => Math.random() - 0.5);
    //metodo sort ordena os elementos em ordem alfabetica, só que com uma função consigo determinar com a ordenação deve ser feita

    cartasAleatorias.forEach((personagem) => {
        const carta = criandoCartas(personagem);
        grid.appendChild(carta)
    });

}

const start = () => {
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;//macete para coverte string em numero
        timer.innerHTML = currentTime + 1;
    }, 1000);
}

window.onload = () => {//executa algo quando a janela for carregada
    const jogadorNome = localStorage.getItem("jogador");
    spanJogador.innerHTML = jogadorNome
    start();
    carregarGame();

}