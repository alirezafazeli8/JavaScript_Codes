"use strict";

const openButton = document.getElementById("open-btn");
const cardBox = document.querySelector(".card-box");
const closeButton = document.getElementById("close-button");

// // reset function
function reset() {
  cardBox.classList.add("hidden");
}

// // open button event
openButton.addEventListener("click", () => {
  cardBox.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  reset();
});

// reset with key
window.addEventListener("keyup", (e) => {
  if (e.key == "Escape") {
    reset();
  }
});
