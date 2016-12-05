var creditCard = document.querySelector("#credit").textContent;
var submit = document.querySelector("#submit");


submit.addEventListener('submit', function () {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    if (validator.isCreditCard(creditCard) === false) {
        alert("Invalid Credit Card Number");
    }
});
