"use strict";

// const names = ["alireza", "ghasem", "sohrab", "negin"];
// const numbers = [1, 2, 3, 4, 5, 6, 6];

// const slice = names.slice(1, 3);
// const splice = names.splice(0, 1);
// const reverse = names.reverse();
// const concat = names.concat(numbers);
// const join = names.join("-");

// console.log(join);
// console.log(names);

// console.log(Math.abs(+6));

// names.forEach(function (value, index, arr) {
//   //   console.log(`
//   //         Value : ${value}
//   //         Index : ${index}
//   //         Array : ${arr}
//   //     `);
//   console.log(value + "hey");
// });

// console.log();

// const container = document.querySelector(".container");

// names.forEach(function (value) {
//   const htmlCode = `
//     <div class="child">
//         <p>Hello ${value}</p>
//     </div>
//     `;

//   container.insertAdjacentHTML("afterbegin", htmlCode);
// });

// // const htmlCode = `
// //     <div class="child">
// //         <p>Hello Guys</p>
// //     </div>
// // `;

// const innerContainer = document.getElementById("inner");

// innerContainer.innerHTML = "<p>hey im p</p>";
// innerContainer.innerText = "<p>hey im p</p>";

// const names = ["alireza", "ghasem", "sohrab", "negin"];
// const numbers = [1, 2, 3, 4, 5, 6, 6];

// const map = numbers.map(function (value, index, arr) {
//   return value * 2;
// });

// // console.log(map);

// const filter = numbers.filter(function (value, index) {
//   return value * 2 == 12;
//   //   return index == 0;
// });

// // console.log(filter);

// const reduce = numbers.reduce(function (last, first) {
//   return last + first;
// });

// console.log(reduce);

// const chaining = numbers
//   .map((value) => value * 2)
//   .filter((value) => value == 12);

// console.log(chaining);

// const person1 = {
//   names: "alireza",
// };

// const person2 = {
//   names: "sohrab",
// };
// const persons = [person1, person2];

// const find = persons.find((value) => value.names == "kk");

// console.log(find ?? false);

// document.getElementById("btn").blur();

// const names = ["aoireza", "gohasem", "sohrab", "noegin"];
// const numbers = [1, 2, 3, 4, 5, 6, 6];

// const names2 = ["alireza", "ahmad", "sara", "abtib"];

// // console.log(numbers.indexOf(4));

// // const fIndex = names.findIndex(function (value) {
// //   return value[0] == "a";
// // });

// // console.log(fIndex);

// const someNames = names2.some(function (value) {
//   return value[0] == "a";
// });

// const everyNames = names.every(function (value) {
//   return value[1] == "o";
// });

// console.log(everyNames);

// const flatArray = [1, 2, [[3]], [[4]]];

// // console.log(flatArray.flat(3));
// // const myArr = flatArray;

// // console.log(myArr);

// const arr = flatArray.flatMap(function (value) {
//   return value * 2;
// });

// console.log(arr);

// const names = ["aoireza", "gohasem", "sohrab", "noegin"];

// const numbers = [34, 57, 1, 7, 8, 2, 6];

// console.log(names.sort());
// // console.log(numbers.sort());

// const sortingNumbers = numbers.sort(function (a, b) {
//   return b - a;
// });

// console.log(sortingNumbers);

// const newArr = new Array(9);

// // newArr.fill(1, 3, 4);

// console.log(newArr);
// const pp = "pp";
// document.querySelectorAll(function () {
//   "hi";
// });

const numbers = [2, 2, 3, 4];

const rNumbers = numbers.reduce(function (f, l) {
  return [f, l].flat();
});

console.log(rNumbers);

// let myNum = 1;
// myNum++;
// // console.log(myNum++);
// console.log(myNum);

const names = ["aoireza", "gohasem", "sohrab", "noegin"];

// console.log(names.toUpperCase());
