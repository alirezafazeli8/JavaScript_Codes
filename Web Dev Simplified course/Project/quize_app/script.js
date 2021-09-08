"use strict";
/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/
const quizForm = document.getElementById("quiz-form");
const answerInput = Array.from(document.querySelectorAll(".answer"));
const questionItem = Array.from(
  document.getElementsByClassName("question-item")
);
const alertEl = document.getElementById("alert");

// TODO: 3. Create a submit event listener for the form that does the following.
quizForm.addEventListener("submit", (e) => {
  //    1. Prevent the default behaviour
  e.preventDefault();

  //    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
  questionItem.forEach((v) => {
    v.classList.remove("correct");
    v.classList.add("incorrect");
  });

  //    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
  const selectedAnswer = answerInput.filter((ae) => {
    return ae.checked;
  });
  //    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
  selectedAnswer.forEach((v) => {
    const crQuestionItem = v.closest(".question-item");
    //    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
    if (v.value == "true") {
      crQuestionItem.classList.remove("incorrect");
      crQuestionItem.classList.add("correct");
    } else {
      //    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
      crQuestionItem.classList.remove("correct");
      crQuestionItem.classList.add("incorrect");
    }

    //    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
    const showAlert = selectedAnswer.filter((v) => v.value == "true");
    const lengthCorrect = questionItem.length == showAlert.length;

    if (showAlert && lengthCorrect) {
      alertEl.classList.add("active");
      setTimeout(function () {
        alertEl.classList.remove("active");
      }, 5000);
    } else {
      alertEl.classList.remove("active");
    }
  });
});
