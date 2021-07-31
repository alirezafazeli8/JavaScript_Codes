"use strict";

/*
// elements
const pol_1 = document.querySelector(".pol-one");
const pol_2 = document.querySelector(".pol-two");
const pol_3 = document.querySelector(".pol-three");
const pol_4 = document.querySelector(".pol-four");

const result_1 = document.querySelector(".result-one");
const result_2 = document.querySelector(".result-two");
const result_3 = document.querySelector(".result-three");
const result_4 = document.querySelector(".result-four");

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],

  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // let userPoll = prompt("pleas enter your poll");
    // while (userPoll > 5 || userPoll < 0) {
    //   userPoll = prompt("pleas enter your poll");
    // }

    let counterOne = 0;
    pol_1.addEventListener("click", function () {
      result_1.textContent = counterOne += 1;
      poll.answers[0]++;
      console.log(poll.answers);
    });
    let counterTwo = 0;
    pol_2.addEventListener("click", function () {
      result_2.textContent = counterTwo += 1;
      poll.answers[1]++;
      console.log(poll.answers);
    });
    let counterThree = 0;
    pol_3.addEventListener("click", function () {
      result_3.textContent = counterThree += 1;
      poll.answers[2]++;
      console.log(poll.answers);
    });
    let counterFour = 0;
    pol_4.addEventListener("click", function () {
      result_4.textContent = counterFour += 1;
      poll.answers[3]++;
      console.log(poll.answers);
    });
  },
};

poll.registerNewAnswer();
*/

const pollBtn = document.querySelector(".poll");

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let pAnswer = Number(
      prompt(`
        ${this.question}
        ${this.options}
      `)
    );
    while (pAnswer > 3 || pAnswer < -1) {
      pAnswer = Number(
        prompt(`
        ${this.question}
        ${this.options}
      `)
      );
    }

    switch (pAnswer) {
      case 0:
        this.answers[0]++;
        break;
      case 1:
        this.answers[1]++;
        break;
      case 2:
        this.answers[2]++;
        break;
      case 3:
        this.answers[3]++;
        break;
    }
  },

  displayResults() {
    console.log(this.answers);
  },
};

const foodPoll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

const poolRegister = poll.registerNewAnswer;
const showPool = poll.displayResults;

pollBtn.addEventListener("click", function () {
  //   poll.registerNewAnswer();
  //   poll.displayResults();
  poolRegister.call(foodPoll);
  showPool.call(foodPoll);
});
