"use strict";

// select elements
const alertModal = document.getElementById("alert");
const form = document.getElementById("quiz-form");
const quizContainer = document.querySelectorAll(".question-item");
const answer = Array.from(document.querySelectorAll(".answer"));

// form eventListener
form.addEventListener("submit", (e) => {
  // prevent
  e.preventDefault();

  // checked radio
  const checked = answer.filter(function (e) {
    return e.checked;
  });

  // check correct or incorrect
  checked.forEach((v) => {
    if (v.value == "true") {
      v.closest(".question-item").classList.remove("incorrect");
      v.closest(".question-item").classList.add("correct");
    } else {
      v.closest(".question-item").classList.remove("correct");
      v.closest(".question-item").classList.add("incorrect");
    }
  });

  // correct answer variable
  const correctAnswer = checked.filter((e) => e.value == "true");

  // check for default error
  if (correctAnswer.length == 0) {
    defaultError();
  }
  // call correct alert
  alertCorrect(correctAnswer, checked);
});

// alert correct function
function alertCorrect(correctAnswer) {
  if (correctAnswer.length == quizContainer.length) {
    alertModal.classList.add("active");
  }
}

// default function
function defaultError() {
  quizContainer.forEach((e) => e.classList.add("incorrect"));
}
