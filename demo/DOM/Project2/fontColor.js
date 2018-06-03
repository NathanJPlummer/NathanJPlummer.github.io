//set font color equal to name of class
var setColor = document.body.querySelectorAll('.pink, .yellow, .red, .green, .black, .blue');
for (var i = 0; i < setColor.length; i++) {
    setColor[i].style.color = setColor[i].className;
}

var buttons = document.body.querySelectorAll('button');

for (i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "orange";
    buttons[i].style.backgroundColor = buttons[i].innerHTML;
}