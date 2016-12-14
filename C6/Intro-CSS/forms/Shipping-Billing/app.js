//GLOBAL VARIABLES

//grab "Same as Shipping" box
var same = document.querySelector("#samebox");
//grab submit button
var submit = document.querySelector("#submit");

//FUNCTIONS

function shippingToBilling() {
    //allow user to transer shipping information to billing
    var shippingInputs = document.querySelectorAll("#shipping input");
    var billingInputs = document.querySelectorAll("#billing input");
    var i; //used in loops
    if (same.checked) {
        for (i = 0; i < shippingInputs.length; i++) {
            billingInputs[i].value = shippingInputs[i].value;
        }
    }
    if (same.checked === false) {
        for (i = 0; i < shippingInputs.length; i++) {
            billingInputs[i].value = "";
        }
    }
}

function validateName(input) {
    //validate user First/Last Name
    
    if (validator.isName(input.value)) {
        input.setCustomValidity("");
    } else {
        input.setCustomValidity("Please Enter a valid name");
    }
}

function validateStreetNumber(input) {
    //validate street number
    if (validator.isEmpty(input.value)) {
        input.setCustomValidity("Please Enter a value");
    } else if (isNaN(input.value)) {
        input.setCustomValidity("Please Enter a Number");
    } else {
        input.setCustomValidity("");
    }
}


function validateAlpha(input) {
    ////checks for alpha charset.  Validates streetname/city name
    
    if (validator.isEmpty(input.value)) {
        input.setCustomValidity("Please enter a value");
    } else if (!validator.isAlpha(input.value)) {
        input.setCustomValidity("Must not contain symbols or numbers.");
    } else {
        input.setCustomValidity("");
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

    //validate street number
    validateStreetNumber(inputs[2]);

    //validate street name
    validateAlpha(inputs[3]);

    //validate City Name
    validateAlpha(inputs[4]);
}

//////MAIN PROGRAM CODE///

//Allow checkbox to transfer shipping info to billing
same.addEventListener("change", function (event) {
    shippingToBilling();
});

submit.addEventListener("click", function (event) {
    //validate forms*
        //*1 form but seperated by divs.
    formValidate("#shipping");
    formValidate("#billing");
});




