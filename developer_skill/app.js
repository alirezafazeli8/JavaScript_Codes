'use strict';
/*
const systemLog = [
	3,
	4,
	2,
	1,
	'error',
	54,
	2,
	6565,
	'error',
	432,
	-4324,
	'error',
	423,
	-23,
];

function calcTemp(temp) {
	let max = temp[0];
	let min = temp[0];
	for (let x = 0; x < temp.length; x++) {
		if (typeof systemLog != 'number') {
			continue;
		}
		// can show max value in the array
		if (temp[x] > max) {
			max = temp[x];
		}
		// can show min value in the array
		if (temp[x] < min) {
			min = temp[x];
		}
	}
	console.log(max);
	console.log(min);
}

calcTemp(systemLog);
*/

const userInfo = {
	firstName: 'alireza',
	lastName: 'fazeli',
	age: 16,
};

console.log(userInfo);
console.table(userInfo);

const friendsName = ['fazeli', 'ghasem', 'sara', 'alireza'];

console.table(friendsName);
console.warn('hey you');
console.error('heyyyyy');

function checkAlirezaHere(arr) {
	for (let x = 0; x < arr.length; x++) {
		if (arr[x] == 'alireza') {
			console.warn('alireza is here be carefully ❌');
			break;
		} else {
			console.log('we are safe');
		}
	}
}

checkAlirezaHere(friendsName);
