var iframe = document.getElementById('qualtrics');
var selectbox = document.getElementById('select-box');

selectbox.addEventListener('change', function(){
    if (selectbox.value === "1") {
        iframe.src = "https://unc.az1.qualtrics.com/jfe/form/SV_cI8bJorTom8HkeF"; 
    } else if (selectbox.value === "2") {
        iframe.src = "https://unc.az1.qualtrics.com/jfe/form/SV_3lYbbJnlqXm7pvn";
    } else {
        iframe.src = "https://unc.az1.qualtrics.com/jfe/form/SV_2rj3p5U78PYVvG5";
    }
});

window.addEventListener("load", function(){
    if (window.screen.width < 595) {
        iframe.width = "250px";
    }
});