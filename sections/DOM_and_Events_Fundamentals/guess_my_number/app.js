"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Enjoy With Your Game🎉";
document.querySelector(".score").textContent = 30;
document.querySelector(".number").textContent = 50;
document.querySelector(".guess").textContent = 45;
document.querySelector(".guess").value = 45;
console.log(document.querySelector(".guess").textContent);
console.log(document.querySelector(".check").value);


console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "yay Game Is Started 🎉";

document.querySelector(".score").textContent = 5;
document.querySelector(".number").textContent = 10;
document.querySelector(".guess").value = 2;
console.log(document.querySelector(".guess").value);


// document.querySelector(".check").addEventListener("click", function () {
// 	console.log(document.querySelector(".guess").value);
// });
// Notice : this function when executed a event listener is executed but down function is not.

// or we can
// const readGuessValue = function () {
// 	const guessNumber = Number(document.querySelector(".guess").value);
// 	console.log(typeof guessNumber);

// 	// logic
// 	if (!guessNumber) {
// 		document.querySelector(".message").textContent = " ❌ Pleas Enter Number";
// 	} else {
// 		document.querySelector(".message").textContent = "Yay, Game Started 🎉";
// 	}
// }; // i think this method is better

// document.querySelector(".check").addEventListener("click", readGuessValue);
*/
// -------------------------------------------------------------------------

//  function for changing message value
function messageContent(message) {
	document.querySelector(".message").textContent = message;
}

//  make random number between 0 and 20
let randomNumber = Math.trunc(Math.random(1) * 20);

// score value
let scoreValue = 20;

// when user click check (Game Logic).
document.querySelector(".check").addEventListener("click", function () {
	// get number from user input
	let guessValue = Number(document.querySelector(".guess").value);

	//  for when user enter empty input
	if (!guessValue) {
		messageContent("No Number ❌");

		// for when user entered correct value
	} else if (randomNumber === guessValue) {
		messageContent("Yay, You Win ✅😍🎉");
		document.querySelector(".number").textContent = randomNumber;
		scoreValue += 5;
		document.querySelector(".score").textContent = scoreValue;
		document.querySelector("body").style.backgroundColor = "green";
		document.querySelector(".number").style.width = "30rem";
		// for when user entered higher value
	} else if (guessValue > randomNumber) {
		if (scoreValue > 1) {
			messageContent("your Number Is To High 😮");
			scoreValue--;
			document.querySelector(".score").textContent = scoreValue;
		} else {
			messageContent("You Lost The Game ❌");
			document.querySelector(".score").textContent = 0;
		}

		// for when user entered  lower Value
	} else if (guessValue < randomNumber) {
		if (scoreValue > 1) {
			messageContent("your Number Is To Low 😩");
			scoreValue--;
			document.querySelector(".score").textContent = scoreValue;
		} else {
			messageContent("You Lost The Game ❌");
			document.querySelector(".score").textContent = 0;
		}
	}
});

// for when user again button to reset the game
document.querySelector(".again").addEventListener("click", function () {
	//number
	document.querySelector(".number").textContent = "?";
	// random number
	randomNumber = Math.trunc(Math.random(1) * 20);

	// input value
	document.querySelector(".guess").value = " ";

	// color
	document.querySelector("body").style.backgroundColor = "#222";

	// width
	document.querySelector(".number").style.width = "15rem";

	//text
	messageContent("Start guessing...");
});
