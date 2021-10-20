const input = document.querySelector('#validation-input');
const inputSymbolsLen = input.getAttribute('data-length');


input.addEventListener('blur', () => {
    if (input.value.length == inputSymbolsLen){
       input.classList.add('valid')
       input.classList.remove('invalid');
       console.log("valid");
    }
else{
        input.classList.add('invalid');
        input.classList.remove('valid');
    console.log("invalid") 
}
    
 })   
   
 
