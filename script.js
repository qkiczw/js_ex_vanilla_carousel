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

btnNext.addEventListener("click", (e) => {
  const currentSlide = slidesContainer.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const moveWidth = nextSlide.style.left;
  const currentDot = document.querySelector(".current-indicator");

  currentDot.classList.remove("current-indicator");
  currentDot.nextElementSibling.classList.add("current-indicator");

  slidesContainer.style.transform = `translateX(-${moveWidth})`;

  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide");
});

btnPrev.addEventListener("click", () => {
  const currentSlide = slidesContainer.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const moveWidth = prevSlide.style.left;
  const currentDot = document.querySelector(".current-indicator");

  currentDot.classList.remove("current-indicator");
  currentDot.previousElementSibling.classList.add("current-indicator");

  slidesContainer.style.transform = `translateX(-${moveWidth})`;

  currentSlide.classList.remove("current-slide");
  prevSlide.classList.add("current-slide");
});

// Future adds:
// - add dots base on amount of slides
