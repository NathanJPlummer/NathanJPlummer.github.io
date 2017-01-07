//global variables
var data = {};

//FUNCTIONS
var setDefault = function (object, roomName) {
    //set defualt values for data object and elements.innerHTML

    //room name
    object.roomName = roomName;
    document.querySelector("#roomName").value = roomName;
    document.querySelector("#rn").innerHTML = roomName;

    //create color object within object
    object.color = {};


    //Add application, boxValue, and textColor to color object.
    data.color.Application = document.getElementsByName("Application")[0].value;
    data.color.boxValue = document.getElementsByName("boxValue")[0].value;
    data.color.textColor = document.getElementsByName("textColor")[0].value;

    //create object for roles
    object.roles = {};

    //add people and titles to roles
    var defineRoles = document.querySelector("#defineRoles");
    var spans = defineRoles.querySelectorAll("span");
    var inputs = defineRoles.querySelectorAll("input");

    var i; //loop variable
    for (i = 0; i < spans.length; i++) {
        object.roles[spans[i].innerHTML] = inputs[i].value;
    }
};

var changeRoomName = function (changed) {

    if (changed.value !== validator.withoutSymbols(changed.value)) {
        alert("Room Names can not contain any symbols (&,*,$,%, etc)");
        //remove symbol from string
        changed.value = changed.value.slice(0, -1);
    } else {
        data.roomName = document.querySelector("#roomName").value;
        document.querySelector("#rn").innerHTML = data.roomName;
    }
};

var changeColor = function (changed) {
    if (changed.name === "Application") {
        data.color.Application = changed.value;
        document.querySelector(".panelBody").style.backgroundColor = changed.value;
        document.querySelector(".panelChat").style.backgroundColor = changed.value;

    } else if (changed.name === "boxValue") {
        data.color.boxValue = changed.value;
        var comments = document.getElementsByClassName("comment");

        var i; //loop variable
        for (i = 0; i < comments.length; i++) {
            comments[i].style.backgroundColor = changed.value;
        }
    } else if (changed.name === "textColor") {
        data.color.textColor = changed.value;
        var commentsText = document.getElementsByClassName("message");

        var i; //loop variable
        for (i = 0; i < commentsText.length; i++) {
            commentsText[i].style.color = changed.value;
        }
    }
    //select background color to new color
    changed.style.backgroundColor = changed.value;
    changed.style.color = changed.value;
};

var addName = function (changed) {
    //add People to Roles Section
    var defineRoles = document.querySelector("#defineRoles");
    var newPerson = document.createElement("span");
    //placeholder
    newPerson.innerHTML = "placeholder McGee";
    //END Placeholder
    newPerson.className = "italic";
    var newRole = document.createElement("input");
    newRole.type = "text";
    newRole.value = "Contributor";
    newRole.className = "role";
    defineRoles.appendChild(newPerson);
    defineRoles.appendChild(newRole);
    //alternate background color
    greyAlternate();
    //add new People to database object
    data.roles[newPerson.innerHTML] = newRole.value;
};

var updateRole = function (changed) {
    var person = changed.previousElementSibling.innerHTML;

    if (changed.value !== validator.withoutSymbols(changed.value)) {
        alert("Roles can not contain any symbols (&,*,$,%, etc)");
        //remove symbol from string
        changed.value = changed.value.slice(0, -1);
    } else {
        data.roles[person] = changed.value;
    }
}

var greyAlternate = function () {
    //alternates background color of the "Roles" section
    var defineRoles = document.querySelector("#defineRoles");
    var spans = defineRoles.querySelectorAll("span");
    var inputs = defineRoles.querySelectorAll("input");

    var i; //loop variable
    for (i = 0; i < spans.length; i++) {
        if (i % 2 === 0) {
            spans[i].style.backgroundColor = "#EFF1F2";
        }
    }

    for (i = 0; i < inputs.length; i++) {
        if (i % 2 === 0) {
            inputs[i].style.backgroundColor = "#EFF1F2";
        }
    }
};

var circleColors = function () {
        var colorBoxes = document.querySelectorAll("select");
        var optionBoxes = document.querySelectorAll("option");

        var i; //loop variable
        for (i = 0; i < colorBoxes.length; i++) {
            colorBoxes[i].style.backgroundColor = colorBoxes[i].value;
            colorBoxes[i].style.color = colorBoxes[i].value;
        }
        for (i = 0; i < optionBoxes.length; i++) {
            if (optionBoxes[i].innerHTML !== "Default") {
                optionBoxes[i].style.color = optionBoxes[i].value;
            } else {
                optionBoxes[i].style.color = "black";
            }
        }
    }
    //MAIN PROGRAM CODE

var topUI = document.querySelector("#topUI");

topUI.addEventListener("input", function (event) {

    if (event.target === document.querySelector("#roomName")) {
        changeRoomName(event.target);
    }

    if (event.target.tagName === "SELECT") {
        changeColor(event.target);
    }

    if (event.target.className === "role") {
        updateRole(event.target);
    }
    console.log(data);
});

topUI.addEventListener("click", function (event) {
    if (event.target === document.querySelector(".addNew")) {
        addName();
    }

});
setDefault(data, "Room Name");
greyAlternate();
circleColors();
console.log(data);
