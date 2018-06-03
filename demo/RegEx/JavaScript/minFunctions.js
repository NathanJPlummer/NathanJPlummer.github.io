function displayHiddenParagraphs() {
    //grab paragraphs then are not displayed before submit
    //then make them visible: display = block
    var displayClass = document.getElementsByClassName('hideB4Submit');
    
    for (i = 0; i < displayClass.length; i++) {
        displayClass[i].style.display = "block";
    }
}

function noValuesDisplay() {
    displayHiddenParagraphs()
    
    //grab the paragraphs that will display results
    var emailResult = document.getElementById('emailResults');
    var linkResultsDisplay = document.getElementById('linkResults');
    
    //make both values = to "No Result"
    emailResult.innerHTML = "NO RESULTS";
    linkResultsDisplay.innerHTML = "NO RESULTS";
}