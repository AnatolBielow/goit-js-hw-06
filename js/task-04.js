


const btnPlus = document.querySelector('[data-action="increment"]');
const btnMinus = document.querySelector('[data-action="decrement"]');
const valueEl = document.getElementById('value');

let counterValue = 0;

btnPlus.addEventListener('click', increaseValue);
btnMinus.addEventListener('click', decreaseValue);

function increaseValue() {
    counterValue++;
    valueEl.innerText = `${counterValue}`
}

function decreaseValue() {
    counterValue--;
    valueEl.innerText = `${counterValue}`
}
