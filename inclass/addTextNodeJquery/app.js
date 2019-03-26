var addTextNode = (text) => {
    var newText = document.createTextNode(text);
    var question = document.getElementById("ques");
    question.appendChild(newText);
}
var extra = (stuff) => {
    $("#ques2").append(stuff);
}
var addText = (a) => {

     $(".three").append(a);
}

var red = (x) => {
    $("#hey").append(x);
}