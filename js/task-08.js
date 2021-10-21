const form = document.querySelector('.login-form');

form.addEventListener('submit', checkingForm);

function checkingForm(event) {
    event.preventDefault();
    const {
        elements: {email, password} 
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert('Please fill in all blanks');
        event.currentTarget.reset();
        return;
    }
    const user = {
        email: email.value,
        password: password.value
    };

    console.log('user', user);
    event.currentTarget.reset();
}

