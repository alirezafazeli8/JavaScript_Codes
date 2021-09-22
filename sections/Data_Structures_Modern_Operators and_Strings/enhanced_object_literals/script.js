"use strict";

// STUB declare variable
const alirezaInfo = {
  name: "alireza",
  lastName: "fazeli",
  age: 16,
};

const koroshInfo = {
  name: "korosh",
  lastName: "hakhamaneshi",
  age: 2500,
  // STUB define function with normal solution
  showCompleteName: function () {
    console.log(this.name);
  },

  // STUB define function with enhance object literal solution
  showCompleteName2() {
    console.log("hello bitch");
  },

  // STUB compute keywordName
  ["a" + "b"]: "haha thats nice",
};

console.log(koroshInfo.ab);

koroshInfo.showCompleteName2();
koroshInfo.showCompleteName();

const userInfo = {
  // normal solution
  userOne: alirezaInfo,

  // object literals.
  alirezaInfo,
  age: alirezaInfo.age,
};

// NOTE if we want my last object name be like first object we can use this solution.

console.log(userInfo);
