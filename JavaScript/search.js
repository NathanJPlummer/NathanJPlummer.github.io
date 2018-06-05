"use strict";

function sendToWikia(userSearch) {
  window.open("http://powerrangers.wikia.com/wiki/Special:Search?query=" + userSearch, '_blank');
}

function sendToGoogle(userSearch) {
  window.open("https://www.google.com/search?hl=en&q=" + " Power Rangers " + userSearch, '_blank');
}

function search() {
  var userSearch = document.getElementById('powerSearch-searchbox').value;

  let selectBox = document.getElementById('powerSearch-selectbox');
  var searchEngine = selectBox.options[selectBox.selectedIndex].value;

  if (searchEngine === "Wikia") {
    sendToWikia(userSearch);
  }

  if (searchEngine === "Google") {
    sendToGoogle(userSearch);
  }

}

const powersearchForm = document.getElementById('powerSearch-form');

powersearchForm.addEventListener("submit", function(event){
  event.preventDefault();
  search();
});
