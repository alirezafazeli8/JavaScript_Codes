"use strict";
/*
let db;

// SECTION set default value for function
function SetUserInformation(
  firstName = "ANONYMOUS",
  lastName = "ANONYMOUS",
  //   expression in default value
  age = lastName + 2,
  city = "NOTHING"
) {
  // es5
  //  age = age || 18;
  db = {
    firstName,
    lastName,
    age,
    city,
  };
  console.log(db);
}

SetUserInformation("alireza", "fazeli", 32, "IR, TH");
SetUserInformation("alireza", "fazeli");
SetUserInformation(undefined, undefined, 545454, undefined);


// SECTION how to Passing arguments.

const valueOne = "SSHHJJ";

let valueTwo = "JJKKLL";

const userInfo = {
  name: "alireza",
  lastName: "fazeli",
};

const testTrue = function (value1, value2) {
  value1 = "Its Changed";
  valueTwo = "---its changed---";
  value2.name = "reza";
};


testTrue(valueOne, userInfo);
console.log(valueOne);
console.log(valueTwo);
console.log(userInfo);

let changedValueOne = valueOne;
console.log(valueOne);
changedValueOne = "---changed";
console.log(valueOne);
console.log(changedValueOne);

changedValueOne = userInfo;
changedValueOne.name = "asghar";

console.log(userInfo);


const testTrue = function (value1, value2) {};
// console.log(testTrue.name);




// SECTION callback

// function first() {
//   console.log("first");
// }

// function second() {
//   console.log("second");
// }

// first();
// second();

function convertToUpper(word) {
  return word.toUpperCase();
}

function enterWord(word, func) {
  return func(word);
}

console.log(enterWord("hello", convertToUpper));


// SECTION functions returning functions

const greet = (greet) => (name) => `${greet} 🔮 ${name}`;
console.log(greet("welcome")("alireza"));

function numPlusNum(numOne) {
    return function (numTwo) {
        return console.log(numOne + numTwo);
    };
}

// STUB solution one
const storeNum = numPlusNum(5);

storeNum(5); // 10

// STUB solution 2
numPlusNum(5)(5);

function sayGreet(greet) {
    return function (name) {
        return console.log(`${greet} 🎩 ${name}`);
    };
}

sayGreet("heyyyyyyyyyy")("alireza");



// NOTE just practice

// after es6
function yourInfo(
  name = "ANONYMOUS",
  lastName = "ANONYMOUS",
  age = 18,
  city = "IDK"
) {
  // last of es6
  // lastName = lastName || "ANONYMOUS";
  return `
    ${name} ${lastName}
    ${age} || ${city}
  `;
}

console.log(yourInfo("alireza", "fazeli", 18, "neka"));
console.log(yourInfo("ahmad"));
console.log(yourInfo());
console.log(yourInfo("salar", undefined, 67, undefined));
*/

const userInfo = {
  name: "alireza",
  lastName: "fazeli",
};

const bestFriend = "salar";
