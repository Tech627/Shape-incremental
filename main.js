var newObject = document.createElement("DIV");
newObject.setAttribute("class", "object");
newObject.setAttribute("id", "powerup");
document.body.appendChild(newObject);
var powerup = document.getElementById("powerup");
var object = document.getElementsByClassName("object");
for (i = 0; i < object.length; i++) {
  object[i].style.top = Math.floor(Math.random() * window.innerHeight) + 50 + "px";
  object[i].style.left = Math.floor(Math.random() * window.innerWidth) + 50 + "px";
}

function createObject() {
  var newObject = document.createElement("DIV");
  newObject.setAttribute("class", "object");
  newObject.setAttribute("id", "powerup");
  document.body.appendChild(newObject);
  for (i = 0; i < object.length; i++) {
    object[i].style.top = Math.floor(Math.random() * 600) + 100 + "px";
    object[i].style.left = Math.floor(Math.random() * 1280) + "px";
  }
}

setInterval(function() {
    createObject();
}, 1000)