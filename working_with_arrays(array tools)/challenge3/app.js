"use strict";

function calcAverageHumanAge(ages) {
  const average = ages
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((age) => age >= 18)
    .reduce((first, last, i, arr) => first + last / arr.length, 0);
  return average;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
