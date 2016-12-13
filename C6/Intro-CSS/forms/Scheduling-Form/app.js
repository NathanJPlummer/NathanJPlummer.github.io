var submit = document.getElementById("submit");
var inputs = document.querySelectorAll("input");



submit.addEventListener("click", function (event) {
    //validate phone number
    var phone = inputs[1].value + inputs[2].value + inputs[3].value;
    if (validator.isPhoneNumber(phone)) {
        inputs[2].setCustomValidity("");
        inputs[1].style.backgroundColor = "#109C9E";
        inputs[2].style.backgroundColor = "#109C9E";
        inputs[3].style.backgroundColor = "#109C9E";
    } else {
        inputs[2].setCustomValidity("Please enter valid phone number");
        inputs[1].style.backgroundColor = "#9F1210";
        inputs[2].style.backgroundColor = "#9F1210";
        inputs[3].style.backgroundColor = "#9F1210";
    }
    
    //validate event descripton
    if (inputs[0].value === "") {
        inputs[0].setCustomValidity("Please Enter an Event Description");
        inputs[0].style.backgroundColor = "#9F1210";
    } else {
        inputs[0].setCustomValidity("");
        inputs[0].style.backgroundColor = "#109C9E";
    }
    
    //validate e-mail
    if (validator.isEmail(inputs[4].value)) {
        inputs[4].setCustomValidity("");
        inputs[4].style.backgroundColor = "#109C9E";
    } else {
        inputs[4].setCustomValidity("Please enter a valid e-mail address");
        inputs[4].style.backgroundColor = "#9F1210";
    }
});
