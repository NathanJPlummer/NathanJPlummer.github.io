function customRangerColor() {
    var rangerColor = document.getElementById("custom");

    var r = document.getElementById("red").value;
    var b = document.getElementById("blue").value;
    var g = document.getElementById("green").value;
    rangerColor.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.backgroundColor = "rgba(" + r + "," + g + "," + b + ", 0.05)";
}
