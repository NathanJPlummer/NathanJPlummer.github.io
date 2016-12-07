var submit = document.querySelector("#submit"); // gets the submit button



submit.addEventListener("click", function (event) {
    //validate Credit Card
    var creditCard = document.querySelector("#credit"); // gets the current creditCard value
    if (validator.isCreditCard(creditCard.value)) {
        creditCard.setCustomValidity(""); // use setCustomValidity instead to throw pop error for input
        creditCard.style.border = "2px solid green"; // style to show invalid
    } else {
        creditCard.setCustomValidity("Invalid Credit Card Number");
        creditCard.style.border = "2px solid red";
    }

});

/*submit.addEventListener("click", function (event) {

    var name = document.getElementById("name");
    if (validator.isName(name.value)) {
        name.setCustomValidity("");
    } else {
        name.setCustomValidity("Invalid Name");
    }

});*/
