var header = document.querySelector(".header");
var nav = document.querySelector(".nav");
var btn = document.querySelector(".nav__toggle");

nav.classList.remove("nav--opened");
nav.classList.add("nav--closed");
header.classList.remove("header--solid");

btn.onclick = function () {
  header.classList.toggle("header--solid");
  nav.classList.toggle("nav--opened");
  nav.classList.toggle("nav--closed");
}
