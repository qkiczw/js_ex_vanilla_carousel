console.log("Hello world!");
const slidesContainer = document.querySelector(".carousel__slides");
const slides = Array.from(slidesContainer.children);
const carouselNav = document.querySelector(".carousel__nav");
const singleSlideWidth = slides[0].getBoundingClientRect();
const carouselDots = carouselNav.children;
const BtnNext = document.querySelector(".carousel__button--right");
const BtnPrev = document.querySelector(".carousel__button--left");
