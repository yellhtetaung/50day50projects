var btn = document.getElementById("btn");
var search = document.getElementById("search");
var input = document.querySelector(".inputbox");

btn.addEventListener("click", function () {
  search.classList.toggle("active");
  input.focus();
});
