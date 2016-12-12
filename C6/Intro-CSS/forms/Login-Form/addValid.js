//Functions
function validateUsernamePassword() {
    var inputs = document.querySelectorAll("input");
    var i; //used in loop
    //only checks first two inputs
    for (i = 0; i <= 1; i++) {
        if (inputs[i].value.length < 3) {
            inputs[i].setCustomValidity("Must be at least 3 characters");
            inputs[i].style.border = "2px solid red";
        } else {
            inputs[i].setCustomValidity("");
        }
    }
}

//debug code
/*
function validateUserName() {
    var userName = document.querySelector("#username");
    
    if (validator.isName(userName.value)) {
        userName.setCustomValidity("Yes");
    } else {
        userName.setCustomValidity("No");
        userName.style.border = "2px solid red";
    }
}
*/


//Main Program Code

var submit = document.querySelector('input[type = "submit"]');

//add submit event listener
submit.addEventListener("click", function (event) {
    //validation functions run on event "click"
    validateUsernamePassword();
});
