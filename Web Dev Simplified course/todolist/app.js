"use strict";

// variable
const form = document.getElementById("form");
const listContainer = document.getElementById("list-container");
const input = document.getElementById("todo-input");
const btn = document.querySelector("submit-button");

// list children
let listChild;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //make todo html
  const htmlCode = `
    <a
    href="#"
    class="list-group-item list-group-item-action text-center disabled"
    tabindex="-1"
    aria-disabled="true"
    >
    ${input.value}
    </a>
    `;

  // add html code to container
  const myEl = listContainer.insertAdjacentHTML("beforeend", htmlCode);

  // add child
  listChild = listContainer.children;

  Array.from(listChild).forEach(function (v) {
    v.addEventListener("mouseenter", function () {
      console.log(hello);
    });
  });

  //clear input
  input.value = "";
});
