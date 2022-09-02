var getcols = document.querySelectorAll(".col");

getcols.forEach(function (col) {
  col.addEventListener("click", function () {
    removeActiveClass();
    col.classList.add("active");
  });
});

function removeActiveClass() {
  getcols.forEach(function (col) {
    col.classList.remove("active");
  });
}
