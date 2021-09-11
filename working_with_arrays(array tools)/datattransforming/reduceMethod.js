"use strict";

const moneys = [200, 300, 500, -100, -40, 800];

// const allMoneys = moneys.reduce(function (amount, current, index, array) {
//   console.log(`thats index ${index} = ${amount} - ${current} __ ${array}`);
//   return amount + current;
// }, 0);

const allMoneys = moneys.reduce((first, last) => first + last);

console.log(allMoneys);

// console.log(allMoneys);

let iniValue = 0;

moneys.forEach((value) => (iniValue += value));

console.log(iniValue);

// NOTE with method we can find big value in array
const upperValue = moneys.reduce(function (firstValue, currentValue) {
  if (firstValue > currentValue) {
    return firstValue;
  } else {
    return currentValue;
  }
});

console.log(upperValue);

// const bigValue = allMoneys.forEach(function (value) {
//   if (value > value) {
//     return value;
//   }
// });

// console.log(bigValue);

// for (let [key, value] of moneys) {
//   console.log(value);
// }

// for (let [key, value] of moneys.entries()) {
//   let firstItem = value[key];
//   let lastITem = value[key + 1];
//   //   if (firstItem > lastITem) {
//   //     console.log(firstItem);
//   //   } else {
//   //     console.log(lastITem);
//   //   }

//   console.log(firstItem);
//   console.log(lastITem);
// }

// for (let i = 0; i < moneys.length; i++) {
//   let firstItem = moneys[i];
//   let lastITem = moneys[i + 1];

//   if (firstItem > lastITem) {
//     // console.log(firstItem);
//   } else if (lastITem < firstItem) {
//     // console.log(lastITem);
//   } else {
//     console.log(firstItem || lastITem);
//   }
// }
