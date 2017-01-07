var validator = {};

validator.withoutSymbols = (function (input) {
    //convert input to an array
    input = input.toString();
    input = input.split("");

    //output will be input without symbols
    var output = [];

    var i; //used in loop

    //If upper and lower case are not equal (alpha check)
    //OR Is Not a Number equls false (Number Check)
    //push value to output array
    for (i = 0; i < input.length; i++) {
        if ((input[i].toUpperCase() !== input[i].toLowerCase()) || (isNaN(input[i]) === false)) {
            output.push(input[i]);
        }
    }

    //convert Array back to string
    output = output.join("");

    return output;
});