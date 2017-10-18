function parseMe(input) {
    var i; //loop variable
    //create object to hold ink data and email addresses
    var parseObj = {};
    parseObj.links = [];
    parseObj.emailAddresses = [];


    //filter out link addresses
    var linkMe = input.match(/(https?:\/\/)(.*?")/g);

    //filter out email address
    var emails = input.match(/(mailto:?)[a-zA-z](\D*?)@(\D+).com/g);



    //filter quotations out of text when applicable and add Link objects to parseObj
    for (i = 0; i < linkMe.length; i++) {
        //filter out quotations
        linkMe[i] = linkMe[i].replace(/\"/, "");
        linkMe[i] = linkMe[i].replace(/\'/, "");
        //add links to parseObj
        parseObj.links[i] = {
            linkText: linkMe[i].replace(/https?:\/\//, ""),
            url: linkMe[i]
        };
    }


    //filter out "mailto:" when applicable and add results to parseObj emailAddresses
    for (i = 0; i < emails.length; i++) {
        emails[i] = emails[i].replace("mailto:", "");
        parseObj.emailAddresses[i] = emails[i];
    }

    return parseObj;

}