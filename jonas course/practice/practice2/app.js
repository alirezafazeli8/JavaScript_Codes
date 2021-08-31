"use strict";

// const sentence = "hello my name is alireza and today i wanna talk with you";

// console.log(sentence.includes("alireza")); // true
// console.log(sentence.includes("fuck")); // false

// const myArr = ["hello", "whats", "up", "bro", "hey", "you"];

// let myWord;
// function doWork() {
//   for (let word of myArr) {
//     myWord = "";
//     myWord += word;
//   }
// }

// doWork();
// console.log(myWord);

// let newWord = ...myArr
// myWord = `${() => ...myArr}`

// for (let word of myArr) {
//   console.log(...myArr);
// }

// console.log(myArr.join("🥏"));
// // console.log(sentence.padEnd(20, "+"));
// myWord = sentence.padStart(sentence.length + 10, "+");

// console.log(myWord);

// console.log(sentence.padEnd(sentence.length + 10, "🎲"));

// console.log(sentence.repeat(2));

// let valueOne = "OH";
// let valueTwo = {
//   name: "alireza",
//   lastName: "YOKORO",
// };

// function valueChanger(value, valueTwo) {
//   value = "Im Changed Guys";
//   valueTwo.name = "CHAGED ++";
// }

// valueChanger(valueOne, valueTwo);

// console.log(valueOne);
// console.log(valueTwo);

// function upperMaker(word) {
//   console.log(word.toUpperCase());
// }

// function getWord(word, func) {
//   func(word);
// }

// getWord("hello", upperMaker);

// function readTheBook(timer) {
//   console.log(`book is start in ${timer} sec`);
//   setTimeout(function () {
//     console.log(
//       "hello guys im alireza and today im so happy for talking with you."
//     );
//   }, timer * 1000);
// }

// readTheBook(3);

// function message(ms) {
//   return function firstName(name) {
//     console.log(`${ms} ${name}`);
//   };
// }

// const func = message("hello");

// func("alireza");

// message("hello")("ghasem");

// const sayGreet = (greet) => (name) => console.log(` ${greet} ${name}`);

// sayGreet("🥏")("alireza");

// const restaurant = {
//   restName: "restaurant",
//   restAddress: undefined,
//   restBookers: [],
//   restBook(firstName, personNumber) {
//     this.restBookers.push({
//       firstName,
//       restName: this.restName,
//       personNumber,
//       restAddress: this.restAddress,
//     });
//     console.log(`
//         customer name : ${firstName} 🤩
//         restaurant name : ${this.restName} 🥒
//         customer number : ${personNumber} 🔢
//         restaurant address : ${this.restAddress} 🥤
//     `);
//   },
// };

// const amooSohrab = {
//   restName: "amoo sohrab ⭐⭐⭐⭐⭐",
//   restAddress: "Tehran , khay*malan street",
//   restBookers: [],
//   //   restBook: restaurant.restBook,
// };

// restaurant.restBook("alireza", 7);
// console.log(restaurant.restBookers);

// amooSohrab.restBook("alireza", 5);

// restaurant.restBook.call(amooSohrab);

// const restBookers = restaurant.restBook;

// restBookers("name", 43);

// const restFunc = restaurant.restBook;
// restFunc.call(amooSohrab, "alirezza", 8);

// restFunc.apply(amooSohrab, ["keyvan", 5]);

// const newBook = restFunc.bind(amooSohrab);

// newBook("alireza", 9);
// newBook("kk", 423);
// newBook("dasdsa", 4);
// newBook("aliasdsdreza", 423);
// newBook("asdsad", 32);
// console.dir(amooSohrab);

// function sayHello() {
//   console.log("hello world");
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

// const firstName = "alireza";
// (function () {
//   return function () {
//     console.log(firstName);
//   };
// })()();

// const makeError = "dasda" * 8;
// const makeErrorTwo = 0 - 1;

// console.log(isNaN(makeError)); // true
// console.log(isNaN(makeErrorTwo)); // false

// const nameArr = ["hello", "alireza", "sohrab", "naser", "rostam", "dastam"];

// console.log(nameArr.slice(2, 4));
// console.log(nameArr.splice(1));
// const sohrab = nameArr.splice(2, 1);
// console.log(sohrab);

// console.log(nameArr.reverse());

// const concatArr = nameArr.concat(["new", "new"]);

// console.log(concatArr);

// console.log(nameArr.join(" "));

// console.log(Math.abs());

// for (let item of nameArr) {
//   console.log(item);
// }
// nameArr.forEach(function (value, key, array) {
//   console.log(key, value);
// });

// for (let [key, value] of Object.entries(nameArr)) {
//   console.log(Number(key), String(value));
//   console.log(nameArr);
// }

// const htmlCode = `
//     <ul>
//         <li>alireza</li>
//         <li>ghasem</li>
//         <li>mohsen</li>
//         <li>akbar</li>
//     </ul>
// `;

// const ulC = document.querySelector(".container");

// ulC.insertAdjacentHTML("beforeend", htmlCode);

// document.querySelector(".container").innerHTML = "<p>hello</p>";

// document.querySelector(".container").textContent = "<p>hello</p>";

const nameArr = ["hello", "alireza", "sohrab", "naser", "rostam", "dastam"];

const numberArr = [2, 3, 5, 7, 3, 2, 3];

const likeArr = ["mamad", "mamad", "reza", "zeinab", "zeinab"];

// const newArr = nameArr.map(function (value, index) {
//   return value + `im changed ${index + 1} time`;
// });

// console.log(newArr);

// numberArr.map(function (value) {
//   console.log(value * 2);
// });

// const values = likeArr.filter(function (value, index) {
//   return value == "mamad" || value == "zeinab";
// });

// values.map((value, index) => console.log(`${value} ${index + 1}`));

// const reduceArr = numberArr.reduce(function (lastValue, firstValue) {
//   return lastValue + firstValue;
// });

// console.log(reduceArr);

// const copyNumberArr = numberArr
//   .filter((value) => value == 3)
//   .reduce((last, first) => console.log(last + first));

// numberArr.find(function (value) {
//   console.log(value == 3);
// });

// document.querySelector(".btn-sumbit").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("click");
// });

// const userName = ["alireza", "hello", "akbar"];
// const password = 4324324;

// userName.find(function (value) {
//   const user = value == "alireza";
//   if (user && password == 1234) {
//     console.log("you are logged in");
//   }
// });

// document.getElementById("myInput").onblur();
