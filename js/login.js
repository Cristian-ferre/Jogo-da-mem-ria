"use strict"
//Abilitar Botão para jogar quando tiver mais que 5 caracteres
//direcionar a outra página 
//local storage

const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button")
const form = document.querySelector(".login_form")

const validationInput = ({ target }) => {
    if (target.value.length > 4) {
        button.removeAttribute("disabled")
        return;
    }

    button.setAttribute('disabled', '');
}

const goToGame = (Event) => {
    Event.preventDefault();

    localStorage.setItem('jogador', input.value)
    window.location = '../pages/game.html';
}

input.addEventListener('input', validationInput)
form.addEventListener('submit', goToGame)

