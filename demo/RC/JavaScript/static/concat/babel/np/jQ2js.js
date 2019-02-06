//jQuery to collapse the navbar on scroll
/*$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});*/
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
          navbar.classList.add("top-nav-collapse");
        } else {
          navbar.classList.remove("top-nav-collapse");
        }
});

//give the mobile menu an animation on toggle

//toggle mobile menu
document.getElementById('menu-button').addEventListener('click', function(){
  var x = document.getElementById("mobile_nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.classList.add('animated','lightSpeedIn');
    x.style.display = "block";
  }
});
