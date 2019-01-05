var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("shoplist");

function buttonClick() {
  if (input.value.length > 0){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
}

function inputEnter(event) {
  if (input.value.length > 0 && event.which == 13){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
}
button.addEventListener("click", buttonClick);
input.addEventListener("keypress", inputEnter);


var firstremove = document.getElementById("first");
function removeFirst() {
  var firstlist = document.getElementsByTagName("li")[0];
  firstlist.remove();
}
firstremove.addEventListener("click", removeFirst);


var lastremove = document.getElementById("last");
function removeLast() {
  var lastt = document.getElementsByTagName("li").length;
  console.log(lastt);
  var lastlist = document.getElementsByTagName("li")[lastt - 1];
  lastlist.remove();
}

lastremove.addEventListener("click", removeLast);





