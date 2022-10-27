//Form elements
const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adress-error");

//Form elements changed when submit
const button = document.querySelector("button");
const formIsValid = document.querySelector(".formIsValid");
const formHeader = document.querySelectorAll(".form-header");
const input = document.querySelectorAll("input");


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

    // Form is valid - success message
    if(checkLength(fullName.value, 0) && checkLength(subject.value, 9) && validateEmail(email.value) && checkLength(adress.value, 24)) {
        form.style.border = "4px solid #749e83";
        formIsValid.innerHTML += `<h2 style ="color: #415b4a">Your message was sent!</h2>
                                    <h3 style ="color: #415b4a">We will answer your request in a few days</h3>`;
        button.setAttribute("style", "border: 0.2rem solid #749e83; color: white; background: #749e83");
        formHeader.forEach(item => item.style.display = "none");
        input.forEach(item => item.style.border = "none");
    }
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



