var i = 0;
var txt = 'Student - Programmer - Developer';
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("descrip").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();