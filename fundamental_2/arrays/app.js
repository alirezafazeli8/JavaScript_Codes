"use strict";
/*
let fullName;
const tellMeYourName = function (firstName, lastName) {
    fullName = [firstName, lastName];
    return fullName;
};

console.log(tellMeYourName("jack", "nelson"));
console.log(fullName[0], fullName[1]);


let firstName = ["alireza", "fazeli"];

console.log(firstName);

firstName[0] = "ghasem"; // change data
console.log(firstName);

*/

// Array Methods
// push, unshift, pop, shift, index of , include

const names = ["ali", "ghasem", "alireza", "sara"];
console.log(names);

// push
names.push("Shahin"); // added value to last of data
console.log(names);

//unshift
names.unshift("Jabar"); // added value to first of data
console.log(names);

// pop 
names.pop(); // if use pop, last data must be deleted
console.log(names);

// shift
names.shift(); //  if use shift, first data must be deleted
console.log(names);

// indexOf 
console.log(names.indexOf("ali")); // indexOf can show index of data in array.

// include 
console.log(names.includes("ali")); // if we want to know this data is there in array??

