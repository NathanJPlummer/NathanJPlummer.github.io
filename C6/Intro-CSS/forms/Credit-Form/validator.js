/*jslint devel: true, white: true, plusplus: true, sloppy: true*/
var validator = {};

validator.isEmail = (function (input) {
    //Test for valid Email address
    try {
        switch (input.indexOf("@")) {
            case 0:
                throw "An Email Address can not start with @ symbol";
            case -1:
                throw "An Email Address must have an @ symbol";
            case (input.length - 1):
                throw "An Email Address may not end with an @ symbol";
        }
    } catch (err) {
        console.log("ERROR: " + err);
        return false;
    }

    /*Removed rule since Emails can have multiple periods
    var inputAlpha = input.replace("@","");
    inputAlpha = inputAlpha.replace(".","");
    console.log(inputAlpha);
    
    if (validator.isAlphanumeric(inputAlpha) === false) {
        return false;
        }*/

    return true;
});

validator.isPhoneNumber = (function (input) {
    //remove hyphens
    input = input.split("-");
    input = input.join("");

    //Remove USA Country Code
    if (input.substring(0, 1) === "1") {
        input = input.substring(1);
    }

    //Check input is 10 digits and a number.  Report Errors if need be.
    try {
        if (input.length !== 10) {
            throw "Not a valid USA Phone Number with 10 digits";
        } else if (isNaN(input) === true) {
            throw "Not a number";
        }
    } catch (err) {
        console.log("ERROR: " + err);
        return false;
    }
    return true;
});

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

validator.isDate = (function (input) {
    //convert input to string
    input = input.toString();

    var isItDate = new Date(input);

    try {
        if (isNaN(isItDate.getTime()) === true) {
            throw input + " is not a valid date";
        }
    } catch (err) {
        console.log("ERROR: " + err);
        return false;
    }

    return true;
});

//Defunct and Replaced by Array Version
/*validator.areTheyDates = (function (input, input2) {
    //similar to validator.isDate() except allows 2 inputs.
    //Used in Date comparision functions

    var error = validator.isDate(input);
    var error2 = validator.isDate(input2);

    if ((error === false) || (error2 === false)) {
        return false;
    }

    return true;

});*/

validator.areTheyDates = (function (input) {
    //similar to validator.isDate() except allows multiple inputs.
    //Used in Date comparision functions
    //takes array as input

    var i; //used in loop
    var error = false; //stores if at least 1x value not a date

    for (i = 0; i < input.length; i++) {
        if (validator.isDate(input[i]) === false) {
            error = true;
        }
    }

    return !(error);

});

validator.isBeforeDate = (function (input, input2) {
    if (validator.areTheyDates([input, input2]) === false) {
        return "Invalid Input(s)";
    }

    input = new Date(input);
    input2 = new Date(input2);

    if (input.getTime() < input2.getTime()) {
        return true;
    } else {
        return false;
    }

});

validator.isAfterDate = (function (input, input2) {
    if (validator.areTheyDates([input, input]) === false) {
        return "Invalid Input(s)";
    }

    input = new Date(input);
    input2 = new Date(input2);

    if (input.getTime() > input2.getTime()) {
        return true;
    } else {
        return false;
    }

});

validator.isEmpty = (function (input) {

    if (input === null) {
        return false;
    }

    input = input.toString();

    input = input.split(" ");
    input = input.join("");

    if (input.length === 0) {
        return true;
    } else {
        return false;
    }
});

validator.contains = (function (input, words, caseSensitive) {
    var i; //used in loops

    //convert "-" to " "
    while (input.indexOf("-") !== -1) {
        input = input.replace("-", " ");
    }

    //remove symbols from input
    input = validator.withoutSymbols(input);

    //allows user to enter string of words instead of array to check a phrase
    //converts string to single index array
    if (Array.isArray(words) === false) {
        words = [words];

    }

    //remove case check unless enabled by user
    if (caseSensitive !== true) {
        input = input.toLowerCase();
        for (i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase();
        }
    }

    //convert input to array of seperate words
    input = input.split(" ");

    for (i = 0; i < words.length; i++) {
        if (input.indexOf(words[i]) === -1) {
            return false;
        }
    }

    return true;

});

validator.lacks = (function (input, words, caseSensitive) {
    return !(validator.contains(input, words, caseSensitive));

});

validator.isComposedOf = (function (input, strings, caseSensitive) {
    //Checks that the input text parameter contains only strings found within the strings array.

    var i; // used in loops

    //remove symbols from input
    input = validator.withoutSymbols(input);

    //remove case sensitivity unless requested by user
    if (caseSensitive !== true) {
        input = input.toLowerCase();
        for (i = 0; i < strings.length; i++) {
            strings[i] = strings[i].toLowerCase();
        }
    }

    //loop through strings index
    //remove matching values from input
    //do this until input has no more mathing values
    for (i = 0; i < strings.length; i++) {
        do {
            input = input.replace(strings[i], "");
        } while (input.indexOf(strings[i]) >= 0);
    }
    //if input is empty then all values are contains in strings
    return validator.isEmpty(input);
});

validator.isLength = (function (input, n) {
    //Checks if the input parameter’s character count is less than or equal to the n parameter.

    //convert string to number if possible
    n = n - 0;

    //error check
    try {
        if (isNaN(n) === true) {
            throw n + "Second parameter is not a number.";
        }
    } catch (err) {
        return "ERROR: " + err;

    }

    //Checks if the input character count is less than/equal to n parameter.
    if (input.length <= n) {
        return true;
    }

    return false;

});

validator.isOfLength = (function (input, n) {
    //Checks if the input character count is greater than/equal to the n

    //convert string to number if possible
    n = n - 0;

    //error check
    try {
        if (isNaN(n) === true) {
            throw "Second parameter is not a number.";
        }
    } catch (err) {
        return "ERROR: " + err;

    }

    //Checks if the input character count is more than/equal to n parameter.
    if (input.length >= n) {
        return true;
    }

    return false;


});

validator.countWords = (function (input) {
    //counts number of words in string

    //convert "-" to " "
    while (input.indexOf("-") !== -1) {
        input = input.replace("-", " ");
    }

    //accounts for edge case of no input
    if (input === "" || input === null) {
        return 0;
    }

    //counts words in input
    return input.split(" ").length;
});

validator.lessWordsThan = (function (input, n) {
    //Checks if input has a word count less than or equal to the n parameter.

    //convert n to number if possible;
    n = n - 0;

    //error check
    try {
        if (isNaN(n) === true) {
            throw "Second parameter is not a number.";
        }
    } catch (err) {
        return "ERROR: " + err;

    }

    if ((validator.countWords(input)) <= n) {
        return true;
    }

    return false;

});

validator.moreWordsThan = (function (input, n) {
    //Checks if input parameter has a word count more/equal to the n parameter.

    //convert n to number if possible;
    n = n - 0;

    //error check
    try {
        if (isNaN(n) === true) {
            throw "Second parameter is not a number.";
        }
    } catch (err) {
        return "ERROR: " + err;

    }

    if ((validator.countWords(input)) >= n) {
        return true;
    }

    return false;

});

validator.isBetween = (function (input, floor, ceiling) {

    //string conversion
    input = input - 0;
    floor = floor - 0;
    ceiling = ceiling - 0;

    //error checks
    try {
        if (floor > ceiling) {
            throw "Floor can not be more than ceiling";
        }
        if (isNaN(input) === true || (isNaN(floor) === true) || (isNaN(ceiling) === true)) {
            throw "Parameters must be valid numbers";
        }
    } catch (err) {
        return "ERROR: " + err;
    }

    if ((input >= floor) && (input <= ceiling)) {
        return true;
    }

    return false;
});

validator.isAlphanumeric = (function (input) {
    //checks if input is alphanumeric only

    //create newInput from input w/o symbols
    var newInput = validator.withoutSymbols(input);

    //remove whitespace from newInput
    newInput = newInput.replace(" ", "");

    if (input === newInput) {
        return true;
    }

    return false;

});

validator.isCreditCard = (function (input) {
    //checks if input is a credit card number

    var i; //used in loop

    if (input.length === 19) {
        for (i = 0; i < 3; i++) {
            input = input.replace("-", "");
        }
    }

    if (validator.isAlphanumeric(input) === false) {
        return false;
    }

    if (input.length !== 16) {
        return false;
    }

    return true;

});

validator.isHex = (function (input) {
    //checks in input is a valid hex value

    //is input 7 characters (hex) or 4 characters (hex shorthand)
    if ((input.length !== 4) && (input.length !== 7)) {
        return false;
    }

    //is there a # character and is it the first character
    if (input.indexOf("#") !== 0) {
        return false;
    }

    //are characters except the first one alphanumeric?
    if (validator.isAlphanumeric(input.substring(1)) === false) {
        return false;
    }

    //check if alpha characters are within range a - f
    input = input.split("");
    var i; //used in loop
    for (i = 1; i < input.length; i++) {
        if (isNaN(input[i]) === true) {
            if (input[i].toLowerCase() > "f") {
                return false;
            }
        }
    }

    return true;

});

validator.isRGB = (function (input) {
    //checks input is an RGB value

    var inputArray = []; //array which will store different sections of input
    inputArray[0] = input.substring(0, 4); //should equal rgb(
    inputArray[2] = input.substring(input.length - 1); //should equal )

    //remove first and second sections of input.  Should result in rgb values
    inputArray[1] = input.replace(inputArray[0], "").replace(inputArray[2], "");


    //first check that input starts with "rgb("
    if (inputArray[0] !== "rgb(") {
        return false;
    }

    //second check- ")" is last character
    if (inputArray[2] !== ")") {
        return false;
    }

    //split RGB value at comma
    var inputRGB = inputArray[1].split(",");

    //third check- there are 3 rgb values
    if (inputRGB.length !== 3) {
        return false;
    }

    //Check four- RGB value is a number
    //Check five- between 0 and 255
    //Note: RGB ignores whitespace.  I tested it.  Comparison operators do, too.
    var i; //used in loop
    for (i = 0; i < 3; i++) {
        if (isNaN(inputRGB[i]) === true) {
            return false;
        }
        if ((inputRGB[i] > 255) || (inputRGB[i] < 0)) {
            return false;
        }
    }


    return true;

});

validator.isHSL = (function (input) {

    //checks input is an HSL value

    var inputArray = []; //array which will store different sections of input
    inputArray[0] = input.substring(0, 4); //should equal hsl(
    inputArray[2] = input.substring(input.length - 1); //should equal )

    //remove first and second sections of input.  Should result in hsl values
    inputArray[1] = input.replace(inputArray[0], "").replace(inputArray[2], "");


    //first check that input starts with "hsl("
    if (inputArray[0] !== "hsl(") {
        return false;
    }

    //second check- ")" is last character
    if (inputArray[2] !== ")") {
        return false;
    }

    //split HSL value at comma
    var inputHSL = inputArray[1].split(",");

    //third check- there are 3 rgb values
    if (inputHSL.length !== 3) {
        return false;
    }

    //Check four- HSL values are numbers
    var i; //used in loops
    for (i = 0; i < 3; i++) {
        if (isNaN(inputHSL[i]) === true) {
            return false;
        }
    }

    //check first HSL value is between 0 and 360
    if ((inputHSL[0] < 0) || (inputHSL[0] > 360)) {
        return false;
    }

    //checks second and third HSL values are between 0 and 1
    for (i = 1; i < 3; i++) {
        if ((inputHSL[i] < 0) || (inputHSL[i] > 1)) {
            return false;
        }
    }

    return true;

});

validator.isColor = (function (input) {

    if (validator.isHex(input) === true) {
        return true;
    }

    if (validator.isHSL(input) === true) {
        return true;
    }

    if (validator.isRGB(input) === true) {
        return true;
    }

    return false;
});

validator.isTrimmed = (function (input) {
    //Checks if the input parameter has leading or trailing whitespaces or too 
    //many spaces between words.

    //NOTE: Instructions not 100% clear.  Assuming you want to check for extra
    //space between words.

    //split will remove spaces during conversion to an array
    //However, if there are two spaces next to each other split will convert
    //the second space to an empty array element.  If we find an empty value
    //in the array, we now know there was a trailing whitespace.
    input = input.split(" ");

    var i; //used in loop
    for (i = 0; i < input.length; i++) {
        if (input[i] === "") {
            return false;
        }
    }

    return true;

});

validator.isName = (function (input) {
    //trim whitespace
    while (input.indexOf(" ") !== -1) {
        input = input.replace(" ", "");
    }

    //length checl
    if (input.length < 2) {
        return false;
    }

    //all alpha characters check
    var i; // used in loop
    input = input.split("");
    console.log(input);
    for (i = 0; i < input.length; i++) {
        if (input[i].toUpperCase() === input[i].toLowerCase()) {
            return false;
        }
    }
    return true;
});

//TEST ADDITIONAL FUNCTIONS (Non-Assigned)
//console.log(validator.areTheyDates(["October 17, 1986 11:23:07", "October 16, 1986 11:23:07", "October 15, 1986 11:23:07"]));
//console.log(validator.isName("Tommy Oliver"));


//TEST ASSIGNMENT FUNCTIONS (Personal Examples)
//console.log(validator.isEmail("Jackjay@user.com"));
//console.log(validator.isPhoneNumber("555-555-5555"));
//console.log(validator.withoutSymbols("Mighty-Morphin@Power.Rangers Cool!"));
//console.log(validator.isDate("October 15, 1986 11:23:07"));
//console.log(validator.isBeforeDate("October 14, 1986 11:23:07", "October 15, 1986 11:23:07"));
//console.log(validator.isAfterDate("October 16, 1986 11:23:07", "October 15, 1986 11:23:07"));
//console.log(validator.isEmpty(      ));
//console.log(validator.contains("May the Force be with You", "may the Force"));
//console.log(validator.lacks("May the Force be with You", "may the Force"));
//console.log(validator.isComposedOf("May the force be with you", ["may", "force", "the", "be", "with", "you", "Jack"]));
//console.log(validator.isLength("Tommy", 7));
//console.log(validator.isOfLength("Tommy", "3"));
//console.log(validator.countWords("Mighty-Morphin-Power-Rangers"));
//console.log(validator.lessWordsThan("Mighty Morphn Power Rangers", "5"));
//console.log(validator.moreWordsThan("Mighty Morphn Power Rangers", "3"));
//console.log(validator.isBetween(3,1,7));
//console.log(validator.isAlphanumeric("Tommy6"));
//console.log(validator.isCreditCard("5432-1234-6678-2345"));
//console.log(validator.isHex("#abcdef"));
//console.log(validator.isRGB("rgb(255, 255, 112)"));
//console.log(validator.isHSL("hsl(122, 1, 1)"));
//console.log(validator.isColor("#ccccff")); // returns true
//console.log(validator.isTrimmed("Hey How are you?"));


//TEST ASSIGNMENT FUNCTIONS (Provided Examples)

//withoutSymbols
//validator.withoutSymbols("Hi, john.doe@live.com., is that you?/"); // returns "Hi johndoelivecom is that you"

//isBeforeDate
//validator.isBeforeDate("10-10-2016", "4-5-2012");  // returns false
//validator.isBeforeDate("10-10-2016", "10-12-2016");  // returns true
/*var dec25 = new Date("12-25-2016");
var oct31 = new Date("10-31-2016");
validator.isBeforeDate(oct31, dec25); // returns true
validator.isBeforeDate(dec25, oct31);  // returns false*/

//isEmpty
//validator.isEmpty("Visiting new places is fun."); // returns false
//validator.isEmpty(""); // returns true
//validator.isEmpty(" "); // returns true
//validator.isEmpty("  "); // returns true
//validator.isEmpty(null); // returns false

//contains
//validator.contains("Visiting new places is fun.", "coconut"); // returns false
//validator.contains("Visiting new places is fun.", ["aces"]); // returns false
//validator.contains("Visiting new places is fun.", ["places"]); // returns true
//validator.contains('"Definitely," he said in a matter-of-fact tone.', ["matter", "definitely"]); // returns true

//lacks
//validator.lacks("Visiting new places is fun.", ["coconut"]); // returns true
//validator.lacks("Visiting new places is fun.", ["aces"]); // returns true
//validator.lacks("Visiting new places is fun.", ["places"]); // returns false
//validator.lacks('"Definitely," he said in a matter-of-fact tone.', ["matter", "definitely"]); // returns false

//isComposedOf
//validator.isComposedOf("10184", ["1", "2", "3", "4", "5", "6" ,"7", "8", "9", "0"]); // returns true
//validator.isComposedOf("I am ready.", ["I", "I'm", "am", "not", "ready"]); // returns true
//validator.isComposedOf("Iamnotready.", ["I", "I'm", "am", "not", "ready"]); // returns true

//isLength
//validator.isLength("123456789", 6); // false
//validator.isLength("123456789", 20); // true
//validator.isLength("AHHHH", 25); // true
//validator.isLength("This could be a tweet!", 140); // true

//isOfLength
//validator.isOfLength("123456789", 6); // true
//validator.isOfLength("123456789", 20); // false
//validator.isOfLength("AHHHH", 25); // false
//validator.isOfLength("This could be a tweet!", 140); // false


//countWords
//validator.countWords("Hello."); // returns 1
//validator.countWords("Hard-to-type-really-fast!"); // returns 5
//validator.countWords(""); // returns 0
//validator.countWords("supercalifragilisticexpialidocious"); // returns 1


//isAlphaNumeric
//validator.isAlphanumeric("Hello."); // returns false
//validator.isAlphanumeric("slam poetry"); // returns false
//validator.isAlphanumeric(""); // returns true
//validator.isAlphanumeric("ArTᴉ$ʰARd"); // returns false
//validator.isAlphanumeric("supercalifragilisticexpialidocious"); // returns true

//isCreditCard
//validator.isCreditCard("1234-5678-9101-1121"); // returns true
//validator.isCreditCard("1234567891011121"); // returns true
//validator.isCreditCard("4427A693CF324D14"); // returns true
//validator.isCreditCard("4427-A693-CF32-4D14"); // returns true
//validator.isCreditCard("----------------"); // returns false
//validator.isCreditCard("testcard"); // returns false

//isHex
//validator.isHex("#abcdef"); // returns true
//validator.isHex("#bcdefg"); // returns false
//validator.isHex("#bbb"); // returns true
//validator.isHex("#1cf"); // returns true
//validator.isHex("#1234a6"); // returns true
//validator.isHex("#1234a68"); // returns false
//validator.isHex("cc4488"); // returns false

//isRGB
//validator.isRGB("rgb(0,0,0)"); // returns true
//validator.isRGB("rgb(0, 0, 0)"); // returns true
//validator.isRGB("rgb(255, 255, 112)"); // returns true
//validator.isRGB("rgba(0,0,0, 0)"); // returns false
//validator.isRGB("rgb(0,300,0)"); // returns false
//validator.isRGB("rgb(0,-14,0)"); // returns false

//isColor
//validator.isColor("#ccccff"); // returns true
//validator.isColor("rgb(255,255,200)"); // returns true
//validator.isColor("hsl(46,0.66,0.21)"); // returns true
//validator.isColor("hla(255,255,255)"); // returns false
//validator.isColor("abc345"); // returns false
//validator.isColor("#363"); // returns true

//isTrimmed
//validator.isTrimmed("   harmony and irony"); // returns false
//validator.isTrimmed("harmony and irony      "); // returns false
//validator.isTrimmed("harmony  and  irony"); // returns false
//validator.isTrimmed("harmony and irony"); // returns true
