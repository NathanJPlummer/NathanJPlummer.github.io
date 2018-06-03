"use strict";function searchValidity(userSearch){if(userSearch==""){form.setCustomValidity("Please enter a search term")}}
function sendToWikia(userSearch){alert("External website may not be responsive or work well on mobile devices");window.location.href="http://powerrangers.wikia.com/wiki/Special:Search?query="+userSearch}
function sendToGoogle(userSearch){window.location.href="https://www.google.com/search?hl=en&q="+" Power Rangers "+userSearch}
function search(){var userSearch=document.getElementById('powerSearch-searchbox').value;searchValidity(userSearch);let selectBox=document.getElementById('powerSearch-selectbox');var searchEngine=selectBox.options[selectBox.selectedIndex].value;if(searchEngine==="Wikia"){sendToWikia(userSearch)}
if(searchEngine==="Google"){sendToGoogle(userSearch)}}
const form=document.getElementById('powerSearch-form');form.addEventListener("submit",function(event){event.preventDefault();search()})