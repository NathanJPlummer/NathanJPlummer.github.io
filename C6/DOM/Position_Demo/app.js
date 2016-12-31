var currentValue = function (ele, CSSproperty) {
    return parseFloat(window.getComputedStyle(ele, null).getPropertyValue(CSSproperty));
};


var Ranger = document.querySelector('img');

document.body.addEventListener("click", function (event) {
    var clicked = event.target;
    var amount = parseInt(document.querySelector("select").value, 10);
    
    
    if (clicked.id === "left") {
        Ranger.style.left = currentValue(Ranger, "left") + amount + "px";
        console.log(amount);
    } else if (clicked.id === "right") {
        Ranger.style.left = currentValue(Ranger, "left") - amount + "px";
    } else if (clicked.id === "top") {
        Ranger.style.top = currentValue(Ranger, "top") + amount + "px";
    } else if (clicked.id === "bottom") {
        Ranger.style.top = currentValue(Ranger, "top") - amount + "px";
    }
    
});
