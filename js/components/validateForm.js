const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adress-error");
const formIsValid = document.querySelector(".formIsValid");

function validateForm(event) {
    event.preventDefault();

    if(checkLength(fullName.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLength(adress.value, 24) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block";
    }

    // if(checkLength === true && validateEmail ===true) {
    //     form.style.borderColor = "4px solid #749e83";
    //     form.innerHTML = `<p style ="color: green">Thank you for contacting us. We will answer your request in a few days</p>` + form.innerHTML;
    // }
}

form.addEventListener("submit", validateForm);

function checkLength (value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}



