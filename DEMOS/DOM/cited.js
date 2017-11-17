var titleRange = document.createRange();

titleRange.setStart(document.getElementsByClassName('scriptTitle')[0], 0);

titleRange.setEndAfter(document.getElementsByClassName('scriptTitle')[5]);


var cite = document.createElement('cite');
cite.innerHTML = "This work is a not for profit derivitive work of material under copyright.<br>It is released under the experimental <a href='https://github.com/NathanJPlummer/Creative-Fan-License'>Creative Fan License</a>."

var aside = document.createElement('aside');
aside.appendChild(titleRange.cloneContents());
aside.appendChild(cite);




document.body.appendChild(aside);

var scriptwidth = document.getElementById('screenplay').offsetWidth;

var width = document.body.offsetWidth;


aside.style.left = (scriptwidth) + (width * .2) + "px"; 