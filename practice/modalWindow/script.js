const buttons = document.querySelectorAll(".buttons");
const mainWindow = document.querySelector(".window");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const windowPopUp = document.querySelector(".windowPopUp");
const container = document.querySelector(".container");

//remove hidden
const removeHidden = function () {
	overlay.classList.remove("hidden");
	windowPopUp.classList.remove("hidden");
};

//add hidden
const addHidden = function () {
	overlay.classList.add("hidden");
	windowPopUp.classList.add("hidden");
};

// button event handler
for (let x = 0; x < buttons.length; x++) {
	buttons[x].addEventListener("click", removeHidden);
}

// close event handler
close.addEventListener("click", addHidden);

// container event handler
overlay.addEventListener("click", addHidden);

//key event handler
document.addEventListener("keyup", function (eventObject) {
	console.log(eventObject.key);
	if (
		!windowPopUp.classList.contains("hidden") &&
		eventObject.key === "Escape"
	) {
		addHidden();
	}
});
