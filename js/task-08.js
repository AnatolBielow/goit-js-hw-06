const form = document.querySelector('.login-form');

form.addEventListener('submit', checkingForm);

function checkingForm(event) {
    event.preventDefault();
    const {
        elements: {email, password} 
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert('Please fill in all blanks')
    }
    const user = {
        email: email.value,
        password: password.value
    };

    console.log('user', user);
    event.currentTarget.reset();
}

