"use strict";

const calculator = document.getElementById("project-calculator-form");
const display = document.getElementById("project-calculator-output");

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
    } else if (clicked.value === "=") {
        //calculate equation if = button clicked
        let eqaution = display.value;
        event.preventDefault();
        display.value = eval(eqaution);
    } else if (clicked.tagName === 'BUTTON') {
        //add value display based on user input
        event.preventDefault();
        display.value += clicked.value;
    }
});
