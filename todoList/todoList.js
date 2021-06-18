var btnAdd = document.getElementById("add");
var main = document.getElementById("list");
var ibox = document.getElementById("text");
var btnDel = document.getElementById("remove");

var currentextNode = "";

ibox.addEventListener("input", function (event) {
  currentextNode = event.target.value;
});

function createNewNode() {
  var newElement = document.createElement("li");
  var textNode = document.createTextNode(currentextNode);
  newElement.appendChild(textNode);
  newElement.id = "item";

  return newElement;
}

btnAdd.addEventListener("click", function () {
  if (
    currentextNode !== undefined &&
    currentextNode !== null &&
    currentextNode !== ""
  ) {
    var newListElement = createNewNode();
    main.append(newListElement);
    ibox.value = "";
    currentextNode = "";
  } else {
    alert("please enter value");
  }
});
btnDel.addEventListener("click", function () {
  console.log("yes it got clicked");
  var firstElement = main.firstElementChild;
  main.removeChild(firstElement);
});
