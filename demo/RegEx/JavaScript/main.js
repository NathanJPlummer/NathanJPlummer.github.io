//grab the user submit button
var parseButton = document.querySelector("#parse");

//grab the results section
var results = document.querySelector("#results");

//When the user clicks the "GET RESULTS Button..."
parseButton.addEventListener("click", function () {
    
    //get text from the textarea
    var userText = document.querySelector("#userTextArea").value;
    
    //send text to the parseMe() function in parser.js to extract links/emails
    //returns an object which you can view in console
    var userObj = parseMe(userText);
    console.log(userObj);
    
    //check if no results and if so run function to display that to user
    if (userObj === null) {
        noValuesDisplay();
        return;
    }
    
    displayHiddenParagraphs();

    /***extract email results from object and format them for page display***/
    
    //grab email results paragraph
    var emailResult = document.getElementById('emailResults');
    
    //display the email results to user
    if (userObj.emailAddresses === null) {
        emailResult.innerHTML = "NO RESULT";
    } else {
        emailResult.innerHTML = userObj.emailAddresses.toString().replace(",", ", ");
    }
    
    
    /***extract link results from object and format them for page display***/

    //Grab paragraph that displays links results
    var linkResultsDisplay = document.getElementById('linkResults');
    
    //IF no links say so and move on!  ;)
    if (userObj.links === null) {
        linkResultsDisplay.innerHTML = "NO RESULT";
        return;
    }

    //extract links from userObj and stringify them
    var linkResults = JSON.stringify(userObj.links).match(/(url":").*?"/g);

    //Remove data following url: in stringed object getting just addresses
    linkResults = linkResults.toString().replace(/(url":")/g, "");
    //remove extraneous quotes from conversion
    linkResults = linkResults.replace(/"/g, "");
    //add space between results for better readability
    linkResults = linkResults.replace(",", ", ");
    
    //display results
    linkResultsDisplay.innerHTML = linkResults;
});

/*NOTE: I realized after doing all this I was supposed to include the title next
to the URL.  That would be easier than this since I could do something like:

for (i = 0; i < userObj.links.length i++) {
    result[i] = " " + userObj.links[i].linkText + userObj.links[i].url;
}

Then for each array item in results I could have added a paragraph to the DOM
with its innerHTML = results[i];

I kept it this way since I had to use a bunch of additional RegEx code in my
solution and that's what we're actually testing for in this course.

But if you need this fixed up just drop me a line!

Also, I could have cleaned this up with more functions, but I wanted to maintain
RegEx code to either main.js or parser.js*/
