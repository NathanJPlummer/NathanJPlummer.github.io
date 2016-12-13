var radios = document.getElementsByName("choice");

var i; //used in loop
for (i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function (event) {
        radioResponse();
    });
}

function radioResponse() {
    var other = document.querySelector("#other");
    var otherInput = document.querySelector("#otherText");
    //If other radio button is selected check for valid text input
    if ((other.checked) && !(validator.isName(otherInput.value))) {
        event.preventDefault();
        alert("Please enter a valid name");
        other.checked = false;
    } else {
        alert("Thank you for your input");
    }
}