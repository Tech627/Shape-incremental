var newObject = document.createElement("DIV");
newObject.setAttribute("class", "object");
newObject.setAttribute("id", "powerup");
newObject.setAttribute("id", "powerup2");
newObject.setAttribute("id", "powerup3");
newObject.setAttribute("id", "powerup4");
document.body.appendChild(newObject);
var powerup = document.getElementById("powerup");
var powerup2 = document.getElementById("powerup2");
var powerup3 = document.getElementById("powerup3");
var powerup4 = document.getElementById("powerup4");
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

function createObjectCircle() {
  var newObjectCircle = document.createElement("DIVCircle");
  newObjectCircle.setAttribute("class", "object");
  newObjectCircle.setAttribute("id", "powerup2");
  document.body.appendChild(newObjectCircle);
  for (i = 0; i < object.length; i++) {
    object[i].style.top = Math.floor(Math.random() * 600) + 100 + "px";
    object[i].style.left = Math.floor(Math.random() * 1280) + "px";
  }
}

function createObjectEllipse() {
  var newObjectEllipse = document.createElement("DIVEllipse");
  newObjectEllipse.setAttribute("class", "object");
  newObjectEllipse.setAttribute("id", "powerup3");
  document.body.appendChild(newObjectEllipse);
  for (i = 0; i < object.length; i++) {
    object[i].style.top = Math.floor(Math.random() * 600) + 100 + "px";
    object[i].style.left = Math.floor(Math.random() * 1280) + "px";
  }
}

function createObjectTriangle() {
  var newObjectTriangle = document.createElement("DIVTriangle");
  newObjectTriangle.setAttribute("class", "object");
  newObjectTriangle.setAttribute("id", "powerup4");
  document.body.appendChild(newObjectTriangle);
  for (i = 0; i < object.length; i++) {
    object[i].style.top = Math.floor(Math.random() * 600) + 100 + "px";
    object[i].style.left = Math.floor(Math.random() * 1280) + "px";
  }
}

setInterval(function() {
  createObject();
  createObjectCircle();
  createObjectEllipse();
  createObjectTriangle();
}, 1000)