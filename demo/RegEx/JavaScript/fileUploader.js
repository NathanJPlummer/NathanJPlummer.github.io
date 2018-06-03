//grab input type = file
var fileInput = document.getElementById('fileInput');
//define where the text will display, in this case the TextArea
var fileDisplayArea = document.getElementById('userTextArea');

//Reads text data and sends to textarea unless the file is not supported
fileInput.addEventListener('change', function (event) {
    var file = fileInput.files[0];
    var textType = /text.*/;

    if (file.type.match(textType)) {
        var reader = new FileReader();

        reader.onload = function (event) {
            fileDisplayArea.innerText = reader.result;
            fileDisplayArea.value = reader.result
        }

        reader.readAsText(file);
    } else {
        fileDisplayArea.innerText = "File not supported!"
    }
});
