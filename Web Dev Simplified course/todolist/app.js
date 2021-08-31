"use strict";

// variable
const form = document.getElementById("form");
const listContainer = document.getElementById("list-container");
const input = document.getElementById("todo-input");
const btn = document.getElementById("submit-button");

// list children
let listChild;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // create element
  const myEl = document.createElement("div");

  // add bootstrap class
  myEl.className = "list-group-item";

  // add value to elemnt
  myEl.innerText = input.value;

  // add element to container
  listContainer.appendChild(myEl);

  //clear input
  input.value = "";

  // pointer style
  myEl.style.cursor = "pointer";

  // remove element event Listener
  myEl.addEventListener("click", function () {
    myEl.remove();
  });
});
