

var titleButton = document.querySelector("#titleButton");
var titleInput = document.querySelector('#titleInput');
var addButton = document.querySelector("#addButton");
var remButton = document.querySelector("#remButton");
var list = document.querySelector('#list');
var userInput = document.querySelector('#userInput');

titleButton.addEventListener("click", function () {
    console.log(titleInput.value);
    document.querySelector('#list').innerHTML = titleInput.value;
});

document.addEventListener("click", function (event) {
    if (event.target.tagName === "INPUT") {
        event.target.value = "";
    }
});

addButton.addEventListener("click", function () {
    var newItem = document.createElement("li");
    var newText = document.querySelector("#addListItemText").value;
    newItem.innerHTML = newText;
    list.appendChild(newItem);
});

remButton.addEventListener("click", function () {
    list.removeChild(list.lastChild);
});
