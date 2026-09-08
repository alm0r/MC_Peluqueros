console.log("main script working");

const heroImg = document.querySelector(".hero-img");

//////////////////////////////   HERO SCROLL ANIMATION   /////////////////////////////////////////////////

const scrollLoadAnimation = () => {
  heroImg.classList.add("hero-img-animation");
  window.addEventListener("load", function () {
    if (!heroImg) return;
    // heroImg.classList.add("hero-img-animation");
  });
};

scrollLoadAnimation();

//////////////////////////////   REVIEWS TESTIMONIALS ANIMATION  /////////////////////////////////////////////////

const slider = function () {
  // Variables
  const slides = document.querySelectorAll(".slide");

  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  const dotContainer = document.querySelector(".dots");

  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
    });
  };

  const activateDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach((e) => {
      e.classList.remove("dots__dot--active");
    });

    document.querySelector(`.dots__dot[data-slide= "${slide}"]`).classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach((e, i) => (e.style.transform = `translateX(${100 * (i - slide)}%)`));
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const previousSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(curSlide);
  };

  init();

  // Event Hanldlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", previousSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      previousSlide();
    }
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};

slider();

// slides.forEach((e, i) => (e.style.border = "2px solid orange"));

// document.querySelector("body").setAttribute("style", "background-color: blue");

// document.querySelector("body").style.background = "grey";

// const navLinks = document.querySelectorAll(".main-nav-link");
// console.log("test");

// navLinks.forEach((e) => {
//   e.addEventListener("click", function () {
//     console.log("click!");
//     e.style.color = "{var(--textColor)";
//   });
// });

// window.addEventListener("load", {
//   document.querySelector(".hero-img").addClass = "hero-img-animation"
// })
