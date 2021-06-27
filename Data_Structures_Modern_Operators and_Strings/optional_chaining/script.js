"use strict";

const userInfo = {
  name: "alireza",
  lastName: "fazeli",
  age: 16,
  info: {
    num1: 1,
  },
  kk: {
    jj: 2,
  },
};

console.log(userInfo.name);
console.log(userInfo.kk?.jj ?? "jj where are you"); // handle object property

const names = ["a", "b", "c", "d"];

console.log(names[4]?.a); // like this we can handle in array
