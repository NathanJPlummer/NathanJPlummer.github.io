"use strict";const calculator=document.getElementById("project-calculator-form"),display=document.getElementById("project-calculator-output");calculator.addEventListener("click",function(event){var clicked=event.target;if("clear"===clicked.value)event.preventDefault(),display.value="";else if("delete"===clicked.value)event.preventDefault(),display.value=display.value.slice(0,-1);else if(isNaN(clicked.value)&&0===display.value.length)event.preventDefault();else if("="===clicked.value){let eqaution=display.value;event.preventDefault(),display.value=eval(eqaution)}else"BUTTON"===clicked.tagName&&(event.preventDefault(),display.value+=clicked.value)}),"use strict";var i,dotNoInput="#EDBE69";dotDefault(dotNoInput);var dotInvalid="#F2617A",dotValid="#31E96B";dotWidth("6px"),dotHeight("6px");var validator={};validator.isEmail=function(a){return /\w+([\.-]?\w+)+@[a-z0-9][a-z0-9-]+[a-z0-9]*?(\.[a-z0-9]{2,})+/gi.test(a)},validator.isPhoneNumber=function(a){a=a.split("-"),a=a.join(""),"1"===a.substring(0,1)&&(a=a.substring(1));try{if(10!==a.length)throw"Not a valid USA Phone Number with 10 digits";else if(!0===isNaN(a))throw"Not a number"}catch(a){return console.log("ERROR: "+a),!1}return!0},validator.isDate=function(a){a=a.toString();var b=new Date(a);console.log(b);try{if(!0===Number.isNaN(b.getTime()))throw a+" is not a valid date"}catch(a){return console.log("ERROR: "+a),!1}return!0},validator.withoutSymbols=function(a){return a.replace(/[^a-z0-9]/gi,"")},validator.password=function(a){return a=a.toString(),!(12>a.length)&&a!==validator.withoutSymbols(a)},validator.isAlphanumeric=function(a){return /^[a-z0-9]+$/gi.test(a)},validator.username=function(a){return 5<=a.length&&validator.isAlphanumeric(a)},validator.zipcode=function(a){return /^[0-9]{5}(?:-[0-9]{4})?$/.test(a)};var inputCode={email:function(a){a.nextElementSibling.style.backgroundColor=""===a.value?dotNoInput:validator.isEmail(a.value)?dotValid:dotInvalid},search:function(a){a.nextElementSibling.style.backgroundColor=""===a.value?dotNoInput:2<a.value.length?dotValid:dotInvalid},tel:function(a){a.nextElementSibling.style.backgroundColor=""===a.value?dotNoInput:validator.isPhoneNumber(a.value)?dotValid:dotInvalid},number:function(a){a.nextElementSibling.style.backgroundColor=""===a.value?dotNoInput:Number.isNaN(a.value)?dotInvalid:dotValid},date:function(a){""===a.value?a.nextElementSibling.style.backgroundColor=dotInvalid:validator.isDate(a.value)?(a.nextElementSibling.style.backgroundColor=dotValid,function(a){var b=new Date,c=new Date(a),d=b.getFullYear()-c.getFullYear(),e=b.getMonth()-c.getMonth();(0>e||0===e&&b.getDate()<c.getDate())&&d--;var f=document.getElementById("evo-c-dotValidator-age-id");console.log(d),f.innerHTML=d,f.nextElementSibling.style.backgroundColor=18>d?dotInvalid:dotValid,f.classList.remove("evo-c-dotValidator-age-inactive")}(a.value)):a.nextElementSibling.style.backgroundColor=dotInvalid},password:function(a){a.nextElementSibling.style.backgroundColor=""===a.value?dotNoInput:validator.password(a.value)?dotValid:dotInvalid},username:function(a){a.nextElementSibling.style.backgroundColor=""===a.value?dotNoInput:validator.username(a.value)?dotValid:dotInvalid},zipcode:function(a){a.nextElementSibling.style.backgroundColor=""===a.value?dotNoInput:validator.zipcode(a.value)?dotValid:dotInvalid}},validotMe=document.querySelectorAll("[data-dotvalidator='true']"),len=validotMe&&validotMe.length||!1;function validateMe(a){"search"===a.type?inputCode.search(a):"email"===a.type?inputCode.email(a):"tel"===a.type?inputCode.tel(a):"number"===a.type?inputCode.number(a):"date"===a.type?inputCode.date(a):"password"===a.type?inputCode.password(a):"text"===a.type&&"Username"===a.previousElementSibling.innerHTML?inputCode.username(a):"text"===a.type&&"Zipcode"===a.previousElementSibling.innerHTML&&inputCode.zipcode(a)}if(len)for(i=0;i<validotMe.length;i++)"date"===validotMe[i].type?validotMe[i].addEventListener("blur",function(){validateMe(this)}):validotMe[i].addEventListener("input",function(){validateMe(this)});function dotDefault(a){var b=document.getElementsByClassName("evo-c-validation-dot");for(i=0;i<b.length;i++)"false"===b[i].previousElementSibling.dataset.dotvalidator?b[i].style.opacity="0":b[i].style.backgroundColor=a}function dotWidth(a){var b=document.getElementsByClassName("evo-c-validation-dot");for(i=0;i<b.length;i++)b[i].style.width=a}function dotHeight(a){var b=document.getElementsByClassName("evo-c-validation-dot");for(i=0;i<b.length;i++)b[i].style.height=a}var portGfxArray=[];portGfxArray[0]={imgsrc:"img/newNT.jpg",text:"This image is based on a screenplay I wrote when I was 17, a prequel to \"A Nightmare on Elm Street.\"<br><br>The poster was developed using a variety of tools: Affinity Photo, Inkscape, and even some neural network styling.<br><br>It is intentionally designed to mimic the original series' posters created by <a href=\"http://matthewpeak.com/category/movie-posters\">Mathew Peak.</a>"},portGfxArray[1]={imgsrc:"img/SuperPaul.jpg",text:"My friend Paul is a huge Superman fan so I made this for him in GIMP using a few face merging techniques.<br><br>This particular merge was a bit tricky because Paul's image was a photo, and I needed to merge his head with a comic style drawing. This was acomplished using a variety of image filters on Paul that mimic the animation style of the original superman image. I then averaged the results so I could retain some of Paul's details."},portGfxArray[2]={imgsrc:"img/SpiderLee.jpg",text:"A simple headswap I made while I was just starting to learn Photoshop."},"use strict";function changeGraphicsContent(a){var b=document.getElementById("portfolio-graphics-img");b.src=portGfxArray[a].imgsrc;var c=document.getElementById("porfolio-graphics-info-nav-p");c.innerHTML=portGfxArray[a].text}var breadcrumb=document.getElementById("portfolio-graphics-breadcrumb");breadcrumb.addEventListener("click",function(a){if("LI"===a.target.nodeName){var b=document.getElementById("portfolio-graphics-wrapper-section");b.style.transition="all 0.5s ease",b.style.opacity="0";var c=getIndex(a.target);setTimeout(()=>changeGraphicsContent(c),500),setTimeout(()=>b.style.opacity="1",500);var d=a.target.parentElement;for(let a=0;a<d.children.length;a++)a!==c&&d.children[a].classList.remove("active");d.children[c].classList.add("active")}});const galley_images=document.get,cellNavigators={};cellNavigators.home=document.getElementById("navpane-home"),cellNavigators.project=document.getElementById("navpane-project"),window.onload=pre_loader;function pre_loader(){document.getElementById("home-nav-a-home").click(),cellNavigators.home.style.display="flex",cellNavigators.project.style.display="none"}window.onorientationchange=function(){var a=window.orientation;0===a||90===a||-90===a?window.location.reload():void 0};const projectsNavSwitch=document.getElementById("projects-switch"),homeNavSwitch=document.getElementById("home-switch");function switchNav(){if("none"!==cellNavigators.home.style.display)var a=cellNavigators.home,b=cellNavigators.project;else a=cellNavigators.project,b=cellNavigators.home;a.style.transition="all 0.5s ease",a.style.opacity="0",setTimeout(()=>a.style.display="none",500),setTimeout(()=>b.style.display="flex",500),b.style.transition="all 0.5s ease",b.style.opacity="0",setTimeout(()=>b.style.opacity="1",550)}projectsNavSwitch.addEventListener("click",function(){switchNav()}),homeNavSwitch.addEventListener("click",function(){switchNav()});function getIndex(a){for(var b=0;a=a.previousElementSibling;b++);return b}function sendToWikia(a){""===a?window.open("http://powerrangers.wikia.com/wiki/Ronny_on_Empty"):window.open("http://powerrangers.wikia.com/wiki/Special:Search?query="+a,"_blank")}function sendToGoogle(a){window.open("https://www.google.com/search?hl=en&q= Power Rangers "+a,"_blank")}function search(){var a=document.getElementById("powerSearch-searchbox").value;let b=document.getElementById("powerSearch-selectbox");var c=b.options[b.selectedIndex].value;"Wikia"===c&&sendToWikia(a),"Google"===c&&sendToGoogle(a)}const powersearchForm=document.getElementById("powerSearch-form");powersearchForm.addEventListener("submit",function(a){a.preventDefault(),search()});