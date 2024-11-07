// Select DOM elements
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

// Initialize variables
let slideNumber = 1;
const length = images.length;

// Create navigation buttons
for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

// Select all created buttons
const buttons = document.querySelectorAll(".button");
// Set the first button's background to white
buttons[0].style.backgroundColor = "white";

// Function to reset all button backgrounds to transparent
const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

// Add click event listeners to each button
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    // Move slider to corresponding image
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    // Highlight the clicked button
    button.style.backgroundColor = "white";
  });
});

// Function to move to next slide
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

// Function to move to previous slide
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};

// Function to move to first slide
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

// Function to move to last slide
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
};

// Function to update button colors based on current slide
const changeColor = ()=>{
  resetBg()
  buttons[slideNumber-1].style.backgroundColor = "white";
}

// Add click event listener to right arrow
right.addEventListener("click", () => {
  // If not at last slide, go to next; otherwise, go to first
  slideNumber < length ? nextSlide() : getFirstSlide();
  changeColor()
});

// Add click event listener to left arrow
left.addEventListener("click", () => {
  // If not at first slide, go to previous; otherwise, go to last
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor()
});