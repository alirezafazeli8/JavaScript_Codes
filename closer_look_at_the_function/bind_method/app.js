"use strict";

// document.querySelector(".button").addEventListener("click", function () {
//   console.log(this);
// });

// const zarb = (num1, num2) => num1 * num2;

// const copyZarb = (num1) => (num2) => zarb(num1, num2);

// console.log(copyZarb(2)(3));

const userDB = {
  name: "alireza",
  lastName: "fazeli",
  showFullName() {
    console.log(`${this.name} ${this.lastName}`);
  },
};

let userOne = {
  name: "amoo",
  lastName: "sohrab",
};

const showUserOne = userDB.showFullName.bind(userOne);
const youTellMeName = function (name, lastName) {
  const fullName = {
    name,
    lastName,
  };
  const funcFullName = userDB.showFullName.bind(fullName);
  return funcFullName();
};

// console.log(showUserOne());

console.log(youTellMeName("alireza", "fazeli"));

userDB.showFullName.bind(userOne);
userDB.showFullName.call(userOne);
