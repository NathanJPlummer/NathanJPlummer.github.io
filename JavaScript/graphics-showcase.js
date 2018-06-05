"use strict";


//change the information in the Graphics page when breadcrumb is clicked
function changeGraphicsContent(index) {
  var galleryImage = document.getElementById('portfolio-graphics-img');
  galleryImage.src = portGfxArray[index].imgsrc;

  var galleryInfo = document.getElementById('porfolio-graphics-info-nav-p');
  galleryInfo.innerHTML = portGfxArray[index].text;
}

var breadcrumb = document.getElementById('portfolio-graphics-breadcrumb');

breadcrumb.addEventListener('click', function(event){
  if (event.target.nodeName === "LI") {

    var gfxWrapper = document.getElementById('portfolio-graphics-wrapper-section');
    gfxWrapper.style.transition = "all 0.5s ease";
    gfxWrapper.style.opacity = "0";

    var index = getIndex(event.target);

    setTimeout(() => changeGraphicsContent(index), 500);
    setTimeout(() => gfxWrapper.style.opacity = "1", 500);

    //change contents- allow timeout for transition to complete
    //setTimeout(() => changeGraphicsContent(index), 500);

    var parent = event.target.parentElement;

    //make event.target li the only one with the active class
    //changes text color and decoration
    for (let i = 0; i < parent.children.length; i++) {
      if (i !== index) {
        parent.children[i].classList.remove('active');
      }
    }
    parent.children[index].classList.add('active');
  }
});

const galley_images = document.get
