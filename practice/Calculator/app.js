document.querySelector(".Button").addEventListener("click", function () {
	const value = Number(document.querySelector(".valueNumber").value);
	document.querySelector("#result").value = value;
	console.log(typeof value);
	console.log(value);
});
