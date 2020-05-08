document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    const rexp = /^[a-zA-Z]{2,10}$/;

    if (!rexp.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZipcode() {
    const zipcode = document.getElementById('zipcode');
    const rexp = /^[0-9]{5,6}$/;

    if (!rexp.test(zipcode.value)) {
        zipcode.classList.add('is-invalid');
    } else {
        zipcode.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const rexp = /^[0-9]{10}$/;

    if (!rexp.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const rexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!rexp.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}