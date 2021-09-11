"use strict";

const printForecast = function (arr) {
	let x; // for show arr value
	let y; // for show days time
	for (x = 0, y = 1; x < arr.length || y < arr.length; x++, y++) {
		console.log(`${arr[x]}C in ${y} days.`);
	}
};

printForecast([17, 21, 23]);

// Data 1: [17, 21, 23]
// Data 2: [12, 5, -5, 0, 4]
