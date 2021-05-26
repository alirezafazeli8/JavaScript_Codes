const dqTextContent = function (idOrClass, newText) {
	return (document.querySelector(idOrClass).textContent = newText);
};

const dqValue = function (idOrClass, value) {
	return document.querySelector(idOrClass).value = value;
};


// manipulate with javascript
dqTextContent("#textResult", "are you there?");
// document.querySelector("#inputSumbit").value = "click me !!!";
dqValue("#inputSumbit", "Click Me !!!");

// Event Listener
document.querySelector("#inputSumbit").addEventListener("click", function () {
	return dqValue("#inputShowResult", document.querySelector("#inputGetText").value);
});

// Manipulate Css Style
document.querySelector("#inputSumbit").addEventListener("click", function () {
	const colors = ["red", "blue", "green", "yellow", "black", "gray"];

	for (let x = colors.length; x > -1; x--) {
		document.querySelector(".colors").style.backgroundColor = colors[x];
		console.log(colors[x]);
	}
});

