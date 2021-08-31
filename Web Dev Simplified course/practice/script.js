"use strict";

const inputTest = document.querySelector("#input-test");
const submitButton = document.querySelector("[data-submit]");
const form = document.querySelector("[data-form]");
const body = document.body;
/*
// make object
// console.log("hello world");

// const obj = {
//   name: "person",
//   lastName: "personFamily",
// };

// console.log(obj);

// const obj = new Object("alireza");

// console.log(obj);

// const thisDate = new Date();

// console.log(thisDate.getDay(), thisDate.getMonth());

// const dayDate = new Date();
// console.log(`
//     hello mr fazeli today is ${dayDate.getDay()} and month is ${dayDate.getMonth()}
// `);

// console.log(document.body);

// alert("hello");
// window.alert("hello world");

// console();
// window.console.log("hello");

// documentElement
// console.log(document.documentElement);

// const myNewElement = document.createElement("h1");
// myNewElement.textContent = "hello im new element";

// document.body.appendChild(myNewElement).style.backgroundColor = "green";

// const myElements = Array.from(document.getElementsByClassName("header"));
// // const myArrayElements = Array.from(myElements);
// // console.log(myElements);

// myElements.forEach((value) => (value.style.backgroundColor = "red"));

// document.querySelector("[data-google]").addEventListener("click", (e) => {
//   e.preventDefault();
// });

// const myDate = new Date();

// console.log(typeof myDate);
// console.log(myDate.getFullYear());
// console.log(myDate.getSeconds());
// console.log(myDate.getTimezoneOffset());

// console.log(window.localStorage);

// console.log(
//   document.documentElement.addEventListener("click", () => alert("hello"))
// );

// const headEl = document.createElement("small");
// console.log(headEl);

// headEl.innerText = " hello guys";
// console.log(headEl);

// document.querySelector("h1").innerText = "hey im js";

// const h1 = document.querySelector("h1");

// h1.appendChild(headEl);

// const hCode = `<p>Hey Im p in js</p>`;

// h1.appendChild(hCode);

// let classEl = Array.from(document.getElementsByClassName("header"));

// console.log(classEl);

// classEl.forEach((element) => {
//   element.style.color = "red";
// });

// submitButton.addEventListener("submit", () => console.log("hey"));

function sayHello() {
  console.log("hello im input");
}

inputTest.addEventListener("change", sayHello);
// inputTest.addEventListener("input", () => console.log("hello world"));
// inputTest.addEventListener("change", () => console.log("hello world"));

// submitButton.addEventListener("mouseenter", () =>
//   console.log("mouse is entred")
// );

// window.addEventListener("resize", () => alert("stop it"));

inputTest.removeEventListener("change", sayHello);

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  // e.target;
  console.log(e.target.value);
});

const myArrow = () => console.log(this);

function myFunc() {
  const hello = { name: "alireza " };
  {
    name: "alireza";
  }
  console.log(this);
}

myArrow();
myFunc(this);


const data = document.querySelector(".password");

data.addEventListener("mouseenter", function () {
  data.innerText = `password : ${data.dataset.userPassword}`;
  data.addEventListener(
    "mouseleave",
    () => (data.innerText = `password : *****`)
  );
});

console.log(data.dataset);
*/

// const headerParent = Array.from(document.querySelector("#box-child").children);

// // console.log(document.querySelector(".header-child").children);

// console.log(headerParent);

// // headerParent.forEach((element) => {
// //   element.style.color = "red";
// // });
// const hp = document.querySelector("#header-parent").nextElementSibling;

// console.log(hp);

// // hp.style.color = "red";

// // hp.parentElement.dataset.test = "true";

// document.querySelector("#header-parent").closest(".find").style.color = "green";

// const myArr = [1, 2, 5, 6, 5, 6, 1, 5, 6, 5];
// // console.log(myArr);

// if (myArr.length == 0) {
//   console.log("empty Array");
// } else if (myArr.length < 5) {
//   console.log("small");
// } else if (myArr.length < 10) {
//   console.log("Medium");
// } else {
//   console.log("large");
// }

// const myAnimal = "dog";

// switch (myAnimal) {
//   case "cat":
//     console.log("hello cat");
//     break;
//   case "dog":
//     console.log("hello dog");
//     break;
//   case "cat":
//     console.log("hello cat two");
//     break;
// }

// const number = 5;

// switch (number) {
//   case 0:
//     console.log("it is zero");
//     break;
//   case 1:
//   case 2:
//     console.log("it is small");
//     break;
//   case 3:
//   case 4:
//     console.log("medium");
//     break;

//   case 5:
//     console.log("large");
//     break;

//   default:
//     console.log("try again");
// }

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     break;
//   } else {
//     console.log(i + 1);
//   }
// }

// const person = {
//   name: "alireza",
//   friend: {
//     name: "mohsen",
//     friend: {
//       name: "akbar",
//     },
//   },
// };

// let currentPerson = person;

// while (currentPerson != null) {
//   console.log(currentPerson.name);
//   // currentPerson
//   currentPerson = currentPerson.friend;
// }

const myName = "ali";

// if (myName == "alireza") {
//   console.log("hey guys this is alireza");
// } else if (myName == "mohammad") {
//   console.log("fuck you mohammd");
// } else {
//   console.log("anonymous user");
// }

// myName == "alireza"
//   ? console.log("wassap mohammad")
//   : console.log("anonymouse user?");

switch (myName) {
  case "ali":
    console.log("hello ali");
    break;
  case "naser":
    console.log("hello naser");
    break;

  default:
    console.log("hey anonymous user");
}

for (let i = 0; i < 10; i++) {
  console.log(`number ${i + 1}`);
}

let i = 0;
while (i < 10) {
  console.log("hello guys");
  i++;
}
