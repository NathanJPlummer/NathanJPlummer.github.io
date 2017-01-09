var inp_text = document.getElementsByClassName("sendMessage");

var inp_textarea = document.getElementById("textMessage");

var panel_body = document.getElementsByClassName("panelBody");

var chat_box = document.getElementById("chatbox");

inp_text[0].addEventListener("click", function (e) {
    createMessage();
    inp_textarea.value = "";
});

var chatBox = {};

function createMessage(){

    var commentBox = document.createElement("div");
    var image = document.createElement("img");
    var comment = document.createElement("div");
    var header = document.createElement("div");
    var name = document.createElement("span");
    var time = document.createElement("span");
    var text = document.createElement("p");

    chatBox.userName = chat_box.dataset.username;
    chatBox.userImg = "images/userimage.jpg";

    text.setAttribute("class", "message");
    text.appendChild(document.createTextNode(inp_textarea.value));

    time.setAttribute("class", "time");
    time.appendChild(document.createTextNode("right now"));

    name.setAttribute("class", "userName");

    //name.appendChild( document.createTextNode(chat_box.dataset.username) );
    name.appendChild( document.createTextNode(chatBox.userName) );

    header.setAttribute("class", "header");
    header.appendChild(time);
    header.appendChild(name);

    comment.setAttribute("class", "comment nocolor");
    comment.appendChild(header);
    comment.appendChild(text);

    image.setAttribute("class", "user");
    //image.setAttribute("src", "images/userimage.jpg");
    image.setAttribute("src", chatBox.userImg);

    commentBox.setAttribute("class", "commentBox commentBoxRight");
    commentBox.appendChild(image);
    commentBox.appendChild(comment);

    data.chatBox = chatBox;

    console.log(data);

    panel_body[0].appendChild(commentBox);
}
