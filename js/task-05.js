const nameIn = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');

function inputName() {
    if (nameIn.value === "") {
       return nameOut.textContent = "Anonymous";
    }
    
     return nameOut.textContent = nameIn.value.trim();   
    
    
}

nameIn.addEventListener('input', inputName);