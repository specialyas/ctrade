function _(x) {
  return document.getElementById(x);
}

let navbarCollapse = _("toggle-nav");
let secondNav = _("second-nav");

let shows = [0, 1];

let slidePrev = _("slide-prev");
let slideNext = _("slide-next");

let j = shows[0];
let k = shows[shows.length - 1];

let slideBox = document.getElementsByClassName("review-card");

navbarCollapse.addEventListener("click", function () {
  secondNav.classList.toggle("show-nav");
});

window.onresize = function () {
  if (window.innerWidth > 820) {
    // remove the second nav class
    secondNav.classList.remove("show-nav");
  }

  if (window.innerWidth < 720) {
    // display only one div
    for (let i = 0; i < slideBox.length; i++) {
      const element = slideBox[i];

      if (!shows.includes(i)) element.style.display = "none";
    }
  }
};

// SLIDE SHOW

for (let i = 0; i < slideBox.length; i++) {
  const element = slideBox[i];

  if (!shows.includes(i)) element.style.display = "none";
}

function disableSlides() {
  for (let i = 0; i < slideBox.length; i++) {
    const element = slideBox[i];
    element.style.display = "none";
  }
}

slideNext.addEventListener("click", () => {
  // check the last array if not greater than length of the box

  if (shows[0] + 2 < slideBox.length) {
    shows[0] = shows[0] + 2;
  }

  if (shows[1] + 2 < slideBox.length) {
    shows[1] = shows[1] + 2;
  }

  disableSlides();
  showSlide(shows);
});

slidePrev.addEventListener("click", () => {
  // check if the value is already 0

  if (shows[0] > 0) {
    shows[0] = shows[0] - 2;
    shows[1] = shows[1] - 2;
    disableSlides();

    showSlide(shows);
  }
});

function showSlide(shows) {
  shows.forEach((box) => {
    if (box < slideBox.length && box >= 0)
      slideBox[box].style.display = "block";
  });
}
