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

// change the style of form if input isn't OK
function showError(el, message) {
    const formCtrl = el.parentElement;
    formCtrl.className = 'form-control error';
    formCtrl.querySelector('small').innerText = message;
}

// change the style of form if input is OK
function showSuccess(el) {
    const formCtrl = el.parentElement;
    formCtrl.className = 'form-control success';
}

function requiredMessage(field) {
    return field.id[0].toUpperCase() + field.id.slice(1) + ' is required';
}

function checkIfRequired(fieldsArr) {
    fieldsArr.forEach(field => {
        !field.value.trim() ? showError(field, requiredMessage(field)) : showSuccess(field);
    })
}

function isEmailValid(email) {
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regexEmail.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkIfRequired([username, email, password, password2]);
});