//define submit button
var submit = document.querySelector('input[type = "submit"]');

//add submit event listener
submit.addEventListener("click", function (event) {
    //validation functions run on event "click"
    validateCredit();
    validateName();
    validateCSV();
});

function validateCredit() {
    //validate Credit Card Number

    var creditCard = document.querySelector("#credit"); // gets the current creditCard value

    if (validator.isCreditCard(creditCard.value)) {
        creditCard.setCustomValidity(""); // use setCustomValidity instead to throw pop error for input
        creditCard.style.border = "2px solid green"; // style to show invalid
    } else {
        creditCard.setCustomValidity("Invalid Credit Card Number");
        creditCard.style.border = "2px solid red";
    }
}

function validateName() {
    //validate Name

    var name = document.getElementById("name");

    if (validator.isName(name.value)) {
        name.setCustomValidity("");
    } else {
        name.setCustomValidity("Invalid Name");
        name.style.border = "2px solid red";
    }
}

function validateCSV() {
    //validate CSV code
    var csv = document.getElementById("csv");

    if ((csv.value.lengh > 4) || (csv.value.length === 0)) {
        csv.setCustomValidity("CSV values are between 1 and 4 digits");
        csv.style.border = "2px solid red";
    } else if (isNaN(csv.value) === true) {
        csv.setCustomValidity("CSV must be a number");
        csv.style.border = "2px solid red";
    } else {
        csv.setCustomValidity("");
        csv.style.border = "2px solid green";
    }
}
