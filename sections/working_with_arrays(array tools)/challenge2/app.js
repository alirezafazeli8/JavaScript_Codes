"use strict";

function calcAverageHumanAge(ages) {
  //   let humanAge = ages.map(function (dogAge) {
  //     if (dogAge <= 2) {
  //       return 2 * dogAge;
  //     } else if (dogAge > 2) {
  //       return 16 + dogAge * 4;
  //     }
  //   });
  const humanAge = ages.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  const adult = humanAge.filter((age) => age >= 18);

  //   const average = humanAge.concat(adult).reduce(function (first, last) {
  //     return (first + last) * humanAge.concat(adult).length;
  //   });

  const average = adult.reduce((first, last) => first + last / adult.length, 0);
  //   console.log(humanAge.concat(adult).length);
  return average;

  //   return humanAge;
  //   return `
  //         Human Age : ${humanAge}.
  //         Adult Age : ${adult}.
  //     `;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
