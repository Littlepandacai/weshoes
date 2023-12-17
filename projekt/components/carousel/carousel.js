"use strict";

// Whenever we load the page, always display the first slide
let currentSlide = 0;

// Set how many slides we have
// This is useful because we can use it as our max slide value
let totalSlides = document.querySelectorAll(".holder div").length;

// A function that takes us to the next slide
function nextSlide() {
  // Increment our currentSlide value
  currentSlide = (currentSlide + 1) % totalSlides;

  // Convert currentSlide value into a negative vw unit
  let leftPosition = -currentSlide * 100 + "vw";

  // Set the left property of the holder element
  document.querySelector(".holder").style.left = leftPosition;

  // Uncomment the following lines if you want to display slide numbers
  // let slideNumber = currentSlide + 1;
  // Set the text for the steps using currentSlide and total number
  // document.querySelector('.steps').textContent =
  //   slideNumber + ' / ' + totalSlides;
}


// A function that takes us to the previous slide
function previousSlide () {
  // Decrement the currentSlide value
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;

  let leftPosition = -currentSlide * 100 + "vw";

  // Set the left property of the holder element
  document.querySelector('.holder').style.left = leftPosition;

  let slideNumber = currentSlide + 1;

  // // Set the text for the steps using currentSlide and total number
  // document.querySelector('.steps').textContent =
  //   slideNumber + ' / ' + totalSlides;
};

// setInterval allows us to run a function every x amount of time
let autoSlide = setInterval(nextSlide, 3000);


// Click event for the next button
let nextArrow = document.querySelector("#next");
nextArrow.addEventListener("click", function () {
  // Cancel the autoSlide interval function
  clearInterval(autoSlide);

  // Call the nextSlide function
  nextSlide();
});

// Click event for the previous button
let previousArrow = document.querySelector("#prev");
previousArrow.addEventListener("click", function () {
  clearInterval(autoSlide);
  previousSlide();
});

// Keydown event for the body
document.body.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    clearInterval(autoSlide);
    previousSlide();
  }
  if (event.key === "ArrowRight") {
    clearInterval(autoSlide);
    nextSlide();
  }
});