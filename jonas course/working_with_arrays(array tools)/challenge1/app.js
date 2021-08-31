"use strict";

function checkDogs(dogsJulia, dogsKate) {
  const copyOfJulia = [...dogsJulia.slice(1, -2)];
  const allDogs = copyOfJulia.concat(dogsKate);
  allDogs.forEach(function (dogs, i) {
    console.log(
      dogs >= 3
        ? `Dog 🐶 number ${i + 1} is an adult and is ${dogs} years old`
        : `Dog number ${i + 1} is still a puppy 🐶`
    );
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
