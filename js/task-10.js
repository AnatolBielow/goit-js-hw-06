function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const container = document.querySelector('#boxes');

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroy);

function createBoxes(amount) {
  amount = input.value;
  const boxes = [];
  let size = 20;

  for(let i=0; i<amount; i++) {
    size+=10;
    const box = document.createElement('div');
    box.style.backgroundColor=getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.border = `1px solid ${getRandomHexColor()}`

    boxes.push(box)
  }
console.log(boxes)
container.append(...boxes);
}
function destroy() {
 container.innerHTML = "";
}
