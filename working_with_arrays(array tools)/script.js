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
*/

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
