"use strict";

const form = document.getElementById("form");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("password-confirmation");
const agreeInput = document.getElementById("terms");
const errorsList = document.querySelector(".errors-list");
const errorsContainer = document.querySelector(".errors");

form.addEventListener("submit", function (e) {
  //  error array
  const errorArr = [];

  // username error
  if (userNameInput.value.length < 6) {
    errorArr.push("Ensure the username is at least 6 characters long");
  }

  // password error
  if (passwordInput.value.length < 10) {
    errorArr.push("Ensure the password is at least 10 characters long");
  }

  // confirm error
  if (passwordInput.value != confirmPasswordInput.value) {
    errorArr.push("Ensure your password is match with your confirm");
  }

  if (!agreeInput.checked) {
    errorArr.push("Ensure the terms checkbox is checked");
  }

  if (errorArr.length > 0) {
    // prevent default
    e.preventDefault();

    // call add error
    addError(errorArr);

    // call clear error
    clearError(errorArr);
  }
});

function addError(arr) {
  arr.forEach((element) => {
    const liEl = document.createElement("li");
    liEl.innerText = element;
    errorsList.appendChild(liEl);
    errorsContainer.classList.add("show");
  });
}

function clearError(arr) {
  // check errors
  while (errorsList.children.length > arr.length) {
    errorsList.removeChild(errorsList.children[0]);
  }
}
