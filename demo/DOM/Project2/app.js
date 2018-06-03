//various scrolling code
//would look better with some animation code
//but nah

function returnTopOffset(element) {
    //return top offset on an element
    
    var rect = element.getBoundingClientRect();
    return rect.top;
}

function scrollMe(target) {
    //scrolls to appropriate header based on user selected button

    //if target equals a button scroll to header with same index as button
    //this works because the buttons are in the same order as the headers
    //hence they have mirrored indexes
    var i = 0;
    while (target !== buttons[i]) {
        i++;
    }
    window.scrollTo(0, returnTopOffset(headers[i]));
}

function topScroll() {
    //scrolls page to top.  Hides scroll arrow
    window.scrollTo(0,0);
    arrow.style.display = "none";
}

//grab all buttons
var navBar = document.querySelector('.navBar');
var buttons = navBar.querySelectorAll('button');

//grab all headers
var headers = document.body.querySelectorAll('h2');

//grab scroll arrow
var arrow = document.getElementById('arrow');

navBar.addEventListener('click', function assignment() {
    var target = event.target;
    
    
    
    if (target.nodeName.toLowerCase() === 'button') {
        scrollMe(target);
        arrow.style.display = "inline";
    }
});

arrow.addEventListener('click', topScroll);