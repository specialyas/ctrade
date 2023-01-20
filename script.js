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

// SLIDE SHOW

let shows = [0, 1];

let slidePrev = _("slide-prev");
let slideNext = _("slide-next");

let j = shows[0];
let k = shows[shows.length - 1];

let slideBox = document.getElementsByClassName("review-card");

function disableSlides() {
  for (let i = 0; i < slideBox.length; i++) {
    const element = slideBox[i];

    if (!shows.includes(i)) element.style.display = "none";
  }
}

disableSlides();

slideNext.addEventListener("click", () => {
  shows[0] = k;
  k = k + 1;
  if (k < slideBox.length) {
    disableSlides();
    shows.pop(k);
    shows.push(k);
    showSlide(shows);
  }
});

slidePrev.addEventListener("click", () => {
  // check if the value is already 0

  if (shows[0] != 0) {
    disableSlides();
    shows.pop(k);
    shows.push(shows[0]);
    shows[0] = shows[0] - 1;
  }
  showSlide(shows);
});

function showSlide(shows) {
  console.log(shows);
  shows.forEach((box) => {
    if (box < slideBox.length - 1 && box >= 0)
      slideBox[box].style.display = "block";
  });
}
