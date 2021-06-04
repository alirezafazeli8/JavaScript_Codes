"use strict";

// get element

const playerScore0 = document.getElementById("score--0");
const playerScore1 = document.getElementById("score--1");

const playerCurrentScore0 =  document.getElementById("current--0");
const playerCurrentScore1 =  document.getElementById("current--0");

// btn
const newBtn =  document.querySelector(".btn--new");
const rollDiceBtn =  document.querySelector(".btn--roll");
const holdBtn =  document.querySelector(".btn--hold");

// img dice
const diceImg = document.querySelector(".dice");

// store random number
let randomNumber = 0;

// activeplayer 
let activePlayer = 0;

//player active variable
const currentActivePlayer = document.getElementById(`current--${activePlayer}`);

// player score
let playerScore = [0, 0];

// reset player score textcontent
playerScore0.textContent = 0;
playerScore1.textContent = 0;

// change player Active
const changePlayerActive = () => {
	if(activePlayer === 0) {
		activePlayer = 1;
	} else if (activePlayer === 1) {
		activePlayer = 0;
	}
};




// show current user score
const showCurrentScore = () => {
	currentActivePlayer.textContent = playerScore[activePlayer];
};

// change player
const changePlayer = () => {
	//last player
	document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");	

	changePlayerActive();

	// next player
	document.querySelector(`.player--${activePlayer}`).classList.add("player--active");	

};

// user roll dice button event

rollDiceBtn.addEventListener("click", function () {
	// genrate random number
	randomNumber = Math.trunc(Math.random() * (7 - 1) + 1 );

	// display random number
	diceImg.classList.remove("hidden");
	diceImg.src = (`dice-${randomNumber}.png`);

	//condition 
	if(randomNumber === 1) {
		changePlayer();
	} else {
		playerScore[activePlayer] += randomNumber;
		showCurrentScore();
	}
	
});




