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


const userInfo = {
  name: "alireza",
  lastName: "fazeli",
};

const bestFriend = "salar";

function editInfo(infoOne, infoTwo) {
  infoOne.name = "korosh";
  infoTwo = "reza";
}

editInfo(userInfo, bestFriend);

console.log(userInfo);
console.log(bestFriend);


// function for callback
function convertToUpper(word) {
  return word.toUpperCase();
}

function convertToLower(word) {
  return word.toLowerCase();
}

// function converter for user word
function converter(input, funcUpper) {
  return `
    your Word : |${funcUpper(input)}|
  `;
}

// get word from user
const inputWord = prompt("enter your word :");

console.log(converter(inputWord, convertToUpper));
console.log(converter(inputWord, convertToLower));


function enterWord(word) {
  return function (name) {
    return `
      ${word} |⚛| ${name}
    `;
  };
}

// console.log(enterWord("hello"));

const enterWordTwo = enterWord("hello");

console.log(enterWordTwo("alireza"));

console.log(enterWord("hi")("korosh"));


const arrowReturn = (word) => (name) => `${word} |🙌| ${name}`;

console.log(arrowReturn("hello")("dariush"));


let userDB;

// last solution
function setUserInfo(
  userName = "--user none--",
  firstName,
  age = "18",
  city = "ghost city"
) {
  // first solution
  firstName = firstName || "--none--";
  userDB = {
    userName,
    firstName,
    age,
    city,
  };

  console.log(userDB);
}

setUserInfo("jackiePye");


const valueOne = "--my value--";
const objOne = {
  userName: "obj One",
};

function changeValue(value1) {
  // value1 = "--change in function--";
  // value2.name = "--change in function--";
  value1.userName = "--changed in function--";
}

// changeValue(valueOne); // its not changed

// console.log(valueOne);

changeValue(objOne);

console.log(objOne);


function toUpper(word) {
  return word.toUpperCase();
}

function getWordMagic(word, funcToUpper) {
  return funcToUpper(word);
}

console.log(getWordMagic("hello", toUpper));


function getWordOne(wordOne) {
  return function getWordTwo(wordTwo) {
    return `${wordOne} 👾 ${wordTwo}`;
  };
}

// const funcOne = getWordOne("alireza");

// console.log(funcOne("fazeli"));

console.log(getWordOne("alireza")("fazeli"));
const surprise = (firstName) => (lastName) =>
  `-- ${firstName} 📥 ${lastName} -- `;

console.log(surprise("jackie")("lori"));


const restaurant = {
  name: "tehran food",
  restNumber: 1,
  bookers: [],
  book(name, restNumber) {
    console.log(`
      ${this.name} from number ${restNumber} is booked for Mr/Ms. ${name}.
    `);
    this.bookers.push({
      name,
      restName: this.name,
      restNumber,
    });
  },
};

// restaurant.book("alireza", 45);

const amooSohrab = {
  name: "amoo Sohrab",
  restNumber: 8,
  bookers: [],
};

const akbarJooje = {
  name: "Akbar Jooje",
  restNumber: 1,
  bookers: [],
};

const booker = restaurant.book;

// booker("alireza", 43);
// amooSohrab.booker("alireza", 43);

const restBooker = restaurant.book;

restBooker.call(amooSohrab, "jey", 9);

restaurant.book.apply(akbarJooje, ["jack", 1]);
restaurant.book.apply(akbarJooje, ["jack", 1]);


const restaurant = {
  name: "tehran food",
  restNumber: 1,
  bookers: [],
  book(name, restNumber) {
    console.log(`
      ${this.name} from number ${restNumber} is booked for Mr/Ms. ${name}.
    `);
    this.bookers.push({
      name,
      restName: this.name,
      restNumber,
    });
  },
};

const amooSohrab = {
  name: "amoo Sohrab",
  restNumber: 8,
  bookers: [],
};

const amooBooker = restaurant.book.bind(amooSohrab);

amooBooker("jeyKoob", 9);
amooBooker("jeyKoob", 9);
amooBooker("jeyKoob", 9);
amooBooker("jeyKoob", 9);
amooBooker("jeyKoob", 9);


// SECTION IIEF
function sayHello() {
  console.log("hello world");
}

// sayHello();

// sayHello();

(function () {
  console.log("run for once");
})();

(() => console.log("im arrow , i run for once"))();
*/
