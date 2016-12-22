//GLOBAL VARIABLES

//grab submit button
var submit = document.querySelector("#submit");

//FUNCTIONS

function validateName(input) {
    //validate user First/Last Name

    if (validator.isName(input.value)) {
        input.setCustomValidity("");
        input.style.border = "1px solid gray";
    } else {
        input.setCustomValidity("Please Enter a valid name");
        input.style.border = "2px ridge black";
    }
}

function validateEmail(email) {
    if (validator.isEmpty(email.value)) {
        email.setCustomValidity("Enter an Email Address");
        email.style.border = "2px ridge black";
    } else if (!validator.isEmail(email.value)) {
        email.setCustomValidity("Email is invalid");
        email.style.border = "2px ridge black";
    } else {
        email.setCustomValidity("");
        email.style.border = "1px solid gray";
    }
}


function blankDate(inputs) {
    //checks for blank spaces in the date fields
    var i; //loops
    for (i = 3; i < 6; i++) {
        if (validator.isEmpty(inputs[i].value)) {
            return true;
        }

    }
    return false;
}

function validateBirthDate(inputs) {
    var date = inputs[3].value + "/" + inputs[4].value + "/" + inputs[5].value;

    if (blankDate(inputs)) {
        inputs[4].setCustomValidity("Please Enter a value in all three date fields");
        inputs[3].style.border = "2px ridge black";
        inputs[4].style.border = "2px ridge black";
        inputs[5].style.border = "2px ridge black";
    } else if (!validator.isDate(date)) {
        inputs[4].setCustomValidity("Please Enter a valid date");
        inputs[3].style.border = "2px ridge black";
        inputs[4].style.border = "2px ridge black";
        inputs[5].style.border = "2px ridge black";
    } else {
        inputs[4].setCustomValidity("");
        inputs[3].style.border = "1px solid gray";
        inputs[4].style.border = "1px solid gray";
        inputs[5].style.border = "1px solid gray";
    }
}

function validatePassword(password) {
    if (validator.isEmpty(password.value)) {
        password.setCustomValidity("Please enter a password");
        password.style.border = "2px ridge black";
    } else if (password.value.length < 6) {
        password.setCustomValidity("Passwords must contain at least 7 characters");
        password.style.border = "2px ridge black";
    } else {
        password.setCustomValidity("");
        password.style.border = "1px solid gray";
    }
}

function formValidate(form) {
    //validate forms

    //select form inputs
    var inputs = document.querySelectorAll(form + " input");

    //validate first name
    validateName(inputs[0]);
    //validate last name
    validateName(inputs[1]);

    //validate E-mail
    validateEmail(inputs[2]);

    //validate Birth Day as date
    validateBirthDate(inputs);
    
    //validate password of at least 6 characters
    validatePassword(inputs[6]);
}

//////MAIN PROGRAM CODE///


submit.addEventListener("click", function (event) {
    //validate form
    formValidate("#form");
});
