const sizeControl = document.querySelector('#font-size-control');
const font = document.querySelector('#text');

font.style.fontSize = `${sizeControl.value}px`

sizeControl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    font.style.fontSize = `${event.currentTarget.value}px`
}
 