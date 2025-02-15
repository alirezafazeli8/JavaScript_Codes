"use strict";
console.group("All Things  :");
console.log("Hello, world");

console.error("You have error");

console.warn("Becareful dear developer");

const userData = {
	name: "alireza",
	lastName: "fazeli",
	gmail: "test@test.com",
};

console.table(userData);
console.groupEnd();

// console css style
const consoleStyle = "background-color : yellow; color: red; padding: 20px";
console.log("%cWelcome", consoleStyle);
