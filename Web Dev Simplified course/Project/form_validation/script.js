// variables
const myForm = document.querySelector("#form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("password-confirmation");
const agreeCheckBox = document.getElementById("terms");
const errorContainer = document.querySelector(".errors-list");
const divError = document.querySelector(".errors");

// clear error function
function clearErrors() {
  while (errorContainer.children[0] != null) {
    errorContainer.removeChild(errorContainer.children[0]);
  }
}

// show errors function
function showErrors(errorMessages) {
  errorMessages.forEach((element) => {
    const myLiEl = document.createElement("li");
    myLiEl.innerText = element;
    errorContainer.appendChild(myLiEl);
    divError.classList.add("show");
  });
}

// form event listener
myForm.addEventListener("submit", (e) => {
  // messageError Array
  const messagesError = [];
  // clearErrors function
  clearErrors();

  // name input error
  if (usernameInput.value < 6) {
    messagesError.push("Ensure the username is at least 6 characters long");
  }

  // password input error
  if (passwordInput.value < 10) {
    messagesError.push("Ensure the password is at least 10 characters long");
  }

  // confirm password input error
  if (passwordInput.value != confirmPasswordInput.value) {
    messagesError.push("Ensure the password and confirmation password match");
  }

  // checkbox input error
  if (!agreeCheckBox.checked) {
    messagesError.push("Ensure the terms checkbox is checked");
  }

  // if have error condition
  if (messagesError.length > 0) {
    // prevent default
    e.preventDefault();
    // show error with message error array argument
    showErrors(messagesError);
  }
});
