var iframe = document.getElementById('qualtrics');
var selectbox = document.getElementById('select-box');

selectbox.addEventListener('change', function(){
    if (selectbox.value === "1") {
        iframe.src = "https://unc.az1.qualtrics.com/jfe/form/SV_cI8bJorTom8HkeF"; 
    } else {
        iframe.src = "https://unc.az1.qualtrics.com/jfe/form/SV_eXKingfdHuZGcrb";
    }
});
