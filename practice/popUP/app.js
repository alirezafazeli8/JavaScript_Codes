"use strict";
const buttons = document.querySelectorAll(".buttons");
const message = document.querySelector(".message");

for (let x = 0; x < buttons.length; x++) {
  buttons[x].addEventListener("click", function () {
    if (message.classList.contains("hidden")) {
      message.classList.remove("hidden");
    } else {
      message.classList.add("hidden");
    }
  });
}
