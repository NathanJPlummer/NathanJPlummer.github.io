var calculator = document.querySelector("#calculator");
var i; //loop variable
var display = document.querySelector("#output");

calculator.addEventListener('click', function (event) {
    var clicked = event.target;

    if (clicked.value === "clear") {
        //clear screen with clear button
        event.preventDefault();
        display.value = "";
    } else if (clicked.value === "delete") {
        //delete button one character
        event.preventDefault();
        display.value = display.value.slice(0, -1);
    } else if ((isNaN(clicked.value) && (display.value.length === 0))) {
        //do not allow operand as first value
        event.preventDefault();
    } else if (clicked.value === "calculate" || clicked.value === "=") {
        //calculate equation if = or calculate buttons
        var eqaution = display.value;
        event.preventDefault();
        display.value = eval(eqaution);
    } else if (clicked.tagName === 'BUTTON') {
        //add value display based on user input
        event.preventDefault();
        display.value += clicked.value;
    }
});
