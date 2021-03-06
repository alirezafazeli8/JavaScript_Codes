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



function completeUserInfo (firstName, lastName = "anonymous", age = 17, city = "IDK") {
  // solution one
  firstName = firstName || "anonymous";
  console.log(`
    hello ${firstName} ${lastName} - you ${age >= 18? "can": "cant"} come to ${city}. 
  `);
}

completeUserInfo("alireza", "fazeli", 16, "neka");
completeUserInfo("alireza", "fazeli", 21, "neka");

completeUserInfo("alireza", "fazeli");
completeUserInfo();

const userInfo = {
  name: "alireza",
  lastName: "fazeli",
};

const name = "ghasem";

function changeValue (passvariable) {
  return  passvariable = "changed in function";
}

changeValue(name);

console.log(name);

function editeByRefrence(obj) {
  return obj.name = "changed in to function";
}

editeByRefrence(userInfo);

console.log(userInfo);



function convertUpper (word) {
  return word.toUpperCase();
}

function convertLower (word) {
  return word.toLowerCase();
}

function words(word, func) {
  return func(word);
}

console.log(words("hello", convertUpper));
console.log(words("ALIREZA", convertLower));

function waitForMe(time) {
  console.log(`hey ricki pleas wait for ${time} seconds for me`);
  setTimeout(function () {
    console.log(`hey im ricki i waited for you in ${time} seconds`);
  }, time *1000);
}


waitForMe(5);


const correctPassword = "12345";

function checkPassword() {
  const getPassword = prompt("pleas enter your password here :");
  return function() {
    if (getPassword == correctPassword) {
      console.log("you are logged in");
    } else {
      console.log("your password is incorrect");
    }
  }
}

// checkPassword();

// const p1 = checkPassword();

// p1();


// checkPassword()();


const yourName = (name) => (lastName) => console.log(`name: ${name} - lastName : ${lastName}`);

yourName("alireza")("fazel");


const restaurant = {
  name: "akabr jooje",
  number: 2,
  bookPerson: [],

  book(name, numRest) {
    console.log(`
      mr ${name} you booked ${this.name} number of ${numRest}.
    `);
    this.bookPerson.push({
      name,
      numRest,
      restName: this.name,
    });
  },
};

restaurant.book("alireza", 5);

// const restBook = restaurant.book;

// restBook("alireza", 43);

const derekhashan = {
  name: "derakhshan",
  number: 8,
  bookPerson: [],
  book(name, number) {
    return restaurant.book.call(derekhashan, name, number);
  },
};

const derekhashanBook = restaurant.book.call(derekhashan, "loka", 88);

derekhashan.book("ki", 9);

const applDerakshan = restaurant.book.apply(derekhashan, ["jey", 7]);

const bookDerekhashan = restaurant.book.bind(derekhashan);

bookDerekhashan("ali", 3);
bookDerekhashan("korosh", 4);
bookDerekhashan("keyvan", 0);


// function sayHello() {
//   console.log("hello");
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();

//
(function () {
  console.log("im run for one");
})();

const name = "alireza";

(function () {
  console.log("hello", name);
})();
*/

function counterFunc() {
  let counter = 0;

  return function () {
    counter += 1;
    console.log(counter);
  };
}

const copyCounter = counterFunc();

copyCounter();
copyCounter();
copyCounter();
console.dir(copyCounter);
