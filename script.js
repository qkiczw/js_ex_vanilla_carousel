console.log("Hello world!");
const slidesContainer = document.querySelector(".carousel__slides");
const slides = Array.from(slidesContainer.children);
const carouselNav = document.querySelector(".carousel__nav");
const singleSlideWidth = slides[0].getBoundingClientRect().width;
const carouselDots = carouselNav.children;
const btnNext = document.querySelector(".carousel__button--right");
const btnPrev = document.querySelector(".carousel__button--left");

const setSlidesLeftPos = (slide, index) =>
  (slide.style.left = `${singleSlideWidth * index}px`);

slides.forEach(setSlidesLeftPos);

btnNext.addEventListener("click", () => {
  const currentSlide = slidesContainer.querySelector(".current-slide");

  currentSlide.nextElementSibling.style.left = 0;

  currentSlide.classList.remove("current-slide");
  currentSlide.nextElementSibling.classList.add("current-slide");
});

// Future adds:
// - add dots base on amount of slides
