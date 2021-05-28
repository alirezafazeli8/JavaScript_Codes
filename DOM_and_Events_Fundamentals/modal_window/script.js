"use strict";

// query selector variable
const modal = document.querySelector(".modal");
const hidden = document.querySelector(".hidden");
const showModal = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const close_modal = document.querySelector(".close-modal");

// functions
// remove Hidden
const removeHidden = function () {
	overlay.classList.remove("hidden");
	modal.classList.remove("hidden");
};

// add Hidden
const addHidden = function () {
	overlay.classList.add("hidden");
	modal.classList.add("hidden");
};

for (let x = 0; x < showModal.length; x++) {
	showModal[x].addEventListener("click", removeHidden);
}

close_modal.addEventListener("click", addHidden);
overlay.addEventListener("click", addHidden);


// handle click event
document.querySelector("body").addEventListener("keydown", function(eventObj){
	if( !overlay.classList.contains("hidden") && eventObj.key === "Escape") {
		addHidden();
	}
});

