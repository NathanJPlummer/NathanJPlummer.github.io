/*var form = document.querySelector("form");
var other = document.querySelector("#other");



form.addEventListener("change", function (event) {
    otherInput = document.querySelector("#otherText");
    
    var radios = document.getElementsByName("choice");

    //If other value is selected check for valid text input
    if ((other.checked) && !(validator.isName(otherInput.value))) {
        form.setCustomValidity("Please enter a valid name");
        other.checked = false;
    } else {
        for (i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                form.setCustomValidity("");
                alert("Thank you for your input");
            }
        }
    }

});*/

var radios = document.getElementsByName("choice");

var i; //used in loop
for (i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function (event) {
        radioResponse();
    });
}

function radioResponse() {
    var other = document.querySelector("#other");
    var otherInput = document.querySelector("#otherText");
    //If other radio button is selected check for valid text input
    if ((other.checked) && !(validator.isName(otherInput.value))) {
        otherInput.setCustomValidity("Please enter a valid name");
        other.checked = false;
    } else {
        otherInput.setCustomValidity("");
        alert("Thank you for your input");
    }
}
