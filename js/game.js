"use strict"

/*Criar as carta utilizando JS
inserindo as img dinamicamente
imgs duplicadas(array duplicados)
mudar a posição varias vezes da imagem
*/

const personagens = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

const grid = document.querySelector(".grid");

const criandoElemento = (tag, className) => {
    const elemento = document.createElement(tag);
    elemento.className = className;
    return elemento;

}

const revelarCarta = ({ target }) => {
    target.parentNode.classList.add("revelar_carta")
}

const criandoCartas = (personagen) => {
    const carta = criandoElemento("section", "carta");
    const cartaFront = criandoElemento("div", "cartaFront face");
    const cartaBack = criandoElemento("div", "cartaBack face");

    cartaFront.style.backgroundImage = `url("../images/${personagen}.png")`;

    carta.appendChild(cartaFront);
    carta.appendChild(cartaBack);

    carta.addEventListener("click", revelarCarta)

    return carta;
}

const carregarGame = () => {
    const duplicandoPensonagens = [...personagens, ...personagens];//array duplicado duas vezes
    //espalhando duas vezes

    const cartasAleatorias = duplicandoPensonagens.sort(() => Math.random() - 0.5);
    //metodo sort ordena os elementos em ordem alfabetica, só que com uma função consigo determinar com a ordenação deve ser feita
    
    cartasAleatorias.forEach((personagen) => {
        const carta = criandoCartas(personagen);
        grid.appendChild(carta)
    });
}

carregarGame();