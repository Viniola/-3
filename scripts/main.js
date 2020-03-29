var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/owarinoseraph.png') {
      myImage.setAttribute ('src','images/s1200.png');
    } else {
      myImage.setAttribute ('src','images/owarinoseraph.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h6');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Добро пожаловать, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Добро пожаловать, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}