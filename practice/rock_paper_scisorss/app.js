"use strict";

/*

// start game button
const startGameButton = document.querySelector(".startButton");

// variables
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const defaultChoice = rock;
const draw = "Draw 🥏";
const playerWin = "player is win 🎉";
const computerWin = "computer is win 🎉";

// get player choice from prompt
function getPlayerChoice() {
  const userChoice = prompt(`${rock} ${paper} ${scissors} ?`).toUpperCase();

  if (userChoice != rock && userChoice != paper && userChoice != scissors) {
    console.log(`wrong choice, we choice for you ${rock} `);
    return defaultChoice;
  } else {
    return userChoice;
  }
}

// compute computer choice
function getComputerChoice() {
  const randomValue = Math.trunc(Math.random() * 3);
  if (randomValue == 0) {
    return rock;
  } else if (randomValue == 1) {
    return paper;
  } else {
    return scissors;
  }
}

// check winner between user and computer
function checkWinner(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return draw;
  } else if (
    (userChoice == paper && computerChoice == rock) ||
    (userChoice == rock && computerChoice == scissors) ||
    (userChoice == scissors && computerChoice == paper)
  ) {
    return playerWin;
  } else {
    return computerWin;
  }
}

// start game button eventListener
startGameButton.addEventListener("click", function () {
  console.log("Game Is Started");

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const howsWin = checkWinner(playerChoice, computerChoice);
  const message = `player Choice ${playerChoice} and computer choice is ${computerChoice} and ${howsWin}`;
  alert(message);
});

*/

// const num = 3 * "b";
// const notNan = 5;

// console.log(isNaN(num));
// console.log(isNaN(notNan));

function calculate(showFunc, a, b) {
  const sum = a + b;

  return showFunc(sum);
}

function showResult(sum) {
  return `Hey This Is Sum For You : ${sum} 🥏`;
}

console.log(calculate(showResult, 5, 6));
