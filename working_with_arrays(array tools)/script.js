"use strict";

// const arr = ["a", "b", "c", "e"];
// const arrTwo = ["f", "g", "h", "i", "j"];

/*
// STUB slice

console.log(arrTwo.slice(2));
console.log(arrTwo.slice(-2));
console.log(arrTwo.slice(1, 4));
console.log(arrTwo.slice(1, -1));
console.log(arrTwo.slice()); // we can copy array items


// STUB splice

// arrTwo.splice(0, 2);

// console.log(arrTwo);

// arr.splice(1);
// console.log(arr);




// STUB reverse
// NOTE reverse changed original value from array
arr.reverse();

console.log(arr);
arrTwo.reverse();
console.log(arrTwo);


// STUB Concat
// NOTE concat should store in variable

const letters = arr.concat(arrTwo);

console.log(letters);


// STUB join
// NOTE should store to variable
console.log(arr.join("+"));


// STUB forEach

const arr = ["alireza", "ghasem", "mohsen", "sohrab"];

// for (let i of arr) {
//   console.log(i);
//   console.log(i + "hey");
// }

arr.forEach(function (value) {
  console.log(value + " foreach is here");
});

arr.forEach(function (value) {
  console.log(`hello mr ${value}`);
});

for (let [key, value] of arr.entries()) {
  console.log(`
        key : ${key} - value : ${value}
    `);
}

arr.forEach(function (myValue, i) {
  console.log(myValue);
  console.log(i);
  //   break;
});
*/

// const arrNames = ["alireza", "sara", "noroz", "yekta"];
// const arrNumbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
// const strangerNumber = [-2, -4, -5, 4, 1];

// console.log();
// arrNames.slice(2, 4);
// console.log(arrNames);

// console.log(arrNames.slice(2, 4));
// arrNames.splice(2, 4);

// console.log(arrNames);

// arrNames.reverse();
// console.log(arrNames);

// const newArr = arrNames.concat(arrNumbers);
// const arr = [...arrNumbers, ...arrNames];
// console.log(newArr);
// console.log(arr);

// console.log(arrNames.join("|"));

// console.log(strangerNumber);
// console.log(Math.abs(strangerNumber));
// strangerNumber.forEach(function (value) {
//   console.log(Math.abs(value));
// });

// const newStrangerNumbers = strangerNumber.map(function (value) {
//   return Math.abs(value);
// });

// console.log(newStrangerNumbers);

// const thatsFor = strangerNumber.forEach(function (value, i, array) {
//   console.log();
// });

// arrNames.forEach((value) => console.log(value));

// console.log(thatsFor);

// arrNames.forEach(function (value, i) {
//   const htmlCode = `
//     <li>${i + 1} ${value}</li>
//   `;

//   document.querySelector(".my_ul").insertAdjacentHTML("beforeend", htmlCode);
// });

// document.querySelector(".my_ul").innerHTML = "<li>hello</li>";

// map
// filter
// reduce

// const arrNames = ["alireza", "sara", "noroz", "yekta"];
// let arrNumbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
// const strangerNumber = [-2, -4, -5, 4, 1];

// const newNames = arrNames.map(function (value, index, arr) {
//   // return `${value} ${index} ${arr}`;
//   return value + " T";
// });

// console.log(newNames);

// const aFilter = arrNames.filter(function (value) {
//   return value[value.lastIndexOf("a")] == "a";
// });

// console.log(aFilter);

// function turnValue() {
//   arrNumbers = arrNumbers.map((value) => value * 2);
// }

// turnValue();
// console.log(arrNumbers);

// let arrNumbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];

// const allNumbers = arrNumbers.reduce(function (last, current, i, array) {
//   // return last * current;
//   return `
//     ${i} sum : ${last} ${current}.${array}
//   `;
// });

// console.log(allNumbers);

// SECTION find method

// const names = ["alireza", "ghasem", "mohesn", "reza", "alireza", "ghasem"];
const userDb = [
  {
    userId: 124534,
    name: "alireza",
    lastName: "fazeli",
  },
  {
    userId: 535345435,
    name: "ghasem",
    lastName: "mohseni",
  },
  {
    userId: 2323,
    name: "ghasem",
    lastName: "nikan",
  },
  {
    userId: 4343,
    name: "alireza",
    lastName: "rezaei",
  },
];

// console.log(
//   names.find(function (value) {
//     return value == "alireza";
//   })
// );

for (let item of userDb) {
  if (item.userId == 434) {
    console.log(item);
  }
}

console.log(
  userDb.find(function (value) {
    return value.userId == 4343;
  })
);
