function _(x) {
  return document.getElementById(x);
}

let navbarCollapse = _("toggle-nav");
let secondNav = _("second-nav");

navbarCollapse.addEventListener("click", function () {
  secondNav.classList.toggle("show-nav");
});

window.onresize = function () {
  if (window.innerWidth > 820) {
    // remove the second nav class
    secondNav.classList.remove("show-nav");
  }
};
