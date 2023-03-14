document.onload = () => {

    const {
        form,
        username,
        email,
        password,
        password2
    } = getIds(ids);
    loadSvgs();
}

document.onload = () => {
    document.getElementsByClassName
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

// returns "`${field}` is required message"
function requiredMessage(field) {
    return field.id[0].toUpperCase() + field.id.slice(1) + ' is required';
}

// returns "`${field}` must be at least `${min}` characters"
function atLeastCharMsg(field, min) {
    return `${field.id} must be at least ${min} characters`;
}

// returns "`${field}` must be at less than `${max}` characters"
function lessThanCharMsg(field, max) {
    return `${field.id} must be less than ${max} characters`;
}

// check input's length
function checkLength(input, min, max) {
    const fieldLength = input.value.length;
    if (fieldLength < min) {
        showError(input, atLeastCharMsg(input, min));
    } else if (fieldLength > max) {
        showError(input, lessThanCharMsg(input, max));
    } else {
        showError(input);
    }
}

function checkIfRequired(fieldsArr) {
    fieldsArr.forEach(field => {
        !field.value.trim() ? showError(field, requiredMessage(field)) : showSuccess(field);
    })
}

function isEmailValid(input) {
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regexEmail.test(input.value.trim())) {
        showSuccess(input);
    } else {
        checkLength(input, 6, 25);
        showError(input, 'Email is not valid');
    }
}

function checkPasswordsMatch(pswrd1, pswrd2) {
    if (pswrd1.value !== pswrd2.value) {
        showError(pswrd2, 'Passwords do not match');
    }
}

function loadSvgs() {
    console.log(`~THIS: `);
    console.log(`~THIS: `, this);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkIfRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    isEmailValid(email);
    checkPasswordsMatch(password, password2);
});