//create a small JavaScript library, DOMinate
//DOM iNate (get it?  hahah)
/*jshint browser: true*/

//create Library object
var DOMinate = {};

DOMinate.getIndexOfChild = function (child, ElementNodesOnly) {
    //Returns index of Child Node from parent Element.
    
    //counts all Nodes by default.
    //Element Nodes only if second parameter === true*/

    //Check for Parents
    if (child === document.body) {
        return "No Parent Elements";
    }

    //get parent element of child
    var parent = child.parentElement;

    //create a list of siblings of the child.  Includes child.
    var siblingsNodes;

    //define sibling nodes based on nodes (default) or ElementNodes (option)
    if (ElementNodesOnly === true) {
        siblingsNodes = child.parentElement.children;
    } else {
        siblingsNodes = child.parentElement.childNodes;
    }

    //calculate index
    var i = 0;
    while (siblingsNodes[i] !== child) {
        i++;
    }

    return i;
};

DOMinate.getAncestorBySelector = function (userElement, userSelector) {

    //if parent element of userElement matches userSelector return that parent
    // otherwise select userElement equal to it's parent and repeat the process
    // continue until userElement === document.body
    // in that event, return null
    do {
        if (userElement.parentElement.matches(userSelector)) {
            return userElement.parentElement;
        } else {
            userElement = userElement.parentElement;
        }
    } while (userElement !== document.body);

    return null;
};

//test getAncestorbySelector
/*var testElement = document.getElementsByTagName('li')[0];
console.log(DOMinate.getAncestorBySelector(testElement,"aside").innerHTML);*/

DOMinate.getSiblingsBySelector = function (userElement, userSelector) {
    //select of nodes of user selected query type
    var amISibling = document.querySelectorAll(userSelector);

    //array of all siblings of the user element
    var allSiblings = userElement.parentElement.childNodes;

    //array to store siblings that matcch the userSelector
    var userSiblings = [];
    //track array index for user Siblings
    var z = 0;

    for (var i = 0; i < amISibling.length; i++) {

        //prevent false positive in event userElement meets the userSelector requirement
        if (amISibling[i] === userElement) {
            break;
        }

        if (amISibling[i].parentElement === userElement.parentElement) {
            userSiblings[z] = amISibling[i];
            z++;
        }
    }

    return userSiblings;
};

//test getSiblingsBySelector
/*var testElement = document.querySelector(".read");
console.log(DOMinate.getSiblingsBySelector(testElement,"h2"));*/

DOMinate.insertAfter = function (insertThis, afterThis) {
    //inserts a user supplied node after a user specified node
    //depends on DOMinate libraries: getIndexofChild

    //CHECK FOR INPUT ERRORS
    if (insertThis.nodeType === undefined) {
        return "The defined node to be inserted is not valid";
    }

    if (afterThis.nodeType === undefined) {
        return "The defined page node is not a valid node";
    }

    if (document.body.contains(afterThis) !== true) {
        return "The document does not contain the node you specified";
    }
    //END INPUT ERRORS

    //grab index of afterThis Node
    var index = DOMinate.getIndexOfChild(afterThis);

    //grab parent of after this node
    var parent = afterThis.parentElement;

    parent.childNodes[index].insertAdjacentElement("afterEnd", insertThis);
    
    return insertThis;

};

/*TEST CODE for DOMinate.insertAfter

var p = document.createElement("p");
p.innerHTML = "Yeah okay";
var testNode = document.querySelector(".read");
DOMinate.insertAfter(p, testNode);*/

DOMinate.swapElements = function(Element1, Element2) {
    //swaps 2 nodes and checks for success
    //depends on DOMinate libraries: insertAfter and getIndexofChild
    
    //define locations of user supplied elements
    //this will allow us to confirm swap at end of function
    var firstElement = {};
    firstElement.parent = Element1.parentElement;
    firstElement.index = DOMinate.getIndexOfChild(Element1);
    
    var secondElement = {};
    secondElement.parent = Element2.parentElement;
    secondElement.index = DOMinate.getIndexOfChild(Element2);
    
    //make copies of user defined elements by value.  This will prevent errors as the elements are moved/removed
    var copy1 = Element1.cloneNode(true);
    var copy2 = Element2.cloneNode(true);
    
    
    
    //insert Element 2 copy after Element 1
    DOMinate.insertAfter(copy2, Element1);
    
    //insert Element 1 copy after Element 2
    DOMinate.insertAfter(copy1, Element2);
    
    //remove Element1
    Element1.parentElement.removeChild(Element1);
    
    //remove Element2
    Element2.parentElement.removeChild(Element2);
    
    //check that copy2 is in former location of Element1
    if (copy2.parentElement !== firstElement.parent) {
        return false;
    }
    
    if (DOMinate.getIndexOfChild(copy2) !== firstElement.index) {
        return false;
    }
    
    //check that copy1 is in former location of Element2
    if (copy1.parentElement !== secondElement.parent) {
        return false;
    }
    
    if (DOMinate.getIndexOfChild(copy1) !== secondElement.index) {
        return false;
    }
    
    return true;
    
    
};


//TEST CODE for DOMinate.swapElements
/*var Element1 = document.querySelector(".read");
console.log(Element1);
var Element2 = document.querySelectorAll(".intro")[1];
console.log(Element2);

console.log(DOMinate.swapElements(Element1,Element2));*/

DOMinate.removeALL = function(userSelector) {
    //removes all elements of type based on user supplied CSS selector
    
    //for return list of elements removed
    var selectedList = document.querySelectorAll(userSelector);
    
    //removes all elements of userSelector
    while (document.querySelector(userSelector) !== null) {
        var selected = document.querySelector(userSelector);
        selected.parentElement.removeChild(selected);
    }
    
    return selectedList;
};

//TEST CODE for DOMinate.removeAll
//console.log(DOMinate.removeALL(".read"));