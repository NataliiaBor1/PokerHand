console.log('Hello');

const cardIdInput = document.querySelector('#cardId');
const cardColorInput = document.querySelector('#cardColor');

concole.log(cardIdInput);
console.log(cardColorInput); 

function setCard() {
    const card = document.querySelector(`#${cardIdInput.value}`);
    console.log(card);
}

const editCardButton = document.querySelector('#editCardButton');

editCardButton.addEventListener('click', setCard);