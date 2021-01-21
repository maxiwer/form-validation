document.onload = () => {
    const {
        form,
        username,
        email,
        password,
        password2
    } = getIds(ids);
}

const ids = ['form', 'username', 'email', 'password', 'password2'];

function getIds(arr) {
    for (let i = 0; i < arr.length; i++) {
        return document.getElementById(ids[i]);
    }
}

function showError(el, message) {
    const formCtrl = el.parentElement;
    formCtrl.className = 'form-control error';
    formCtrl.querySelector('small').innerText = message;
}

function showSuccess(el) {
    const formCtrl = el.parentElement;
    formCtrl.className = 'form-control success';
}

function isEmailValid(email) {
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regexEmail.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    username.value ? showSuccess(username) : showError(username, 'Username is required');
    // email checking
    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isEmailValid(email.value)) {
        showError(email, 'Email is required');
    } else {
        showSuccess(email);
    }
    password.value ? showSuccess(password) : showError(password, 'Password is required');
    password2.value ? showSuccess(password2) : showError(password2, 'Second password is required');
});