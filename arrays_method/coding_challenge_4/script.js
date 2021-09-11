"use strict";

// dogs information
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// recommend formula
// current > (recommended * 0.90) && current < (recommended *
//     1.10).

// Task One : calCute dog food
dogs.map(function (value) {
  const recommend = Math.trunc(value.weight ** 0.75 * 28);
  value.recommend = recommend;
});

// eatLot function
function eatDogsFind(obj) {
  return obj.curFood > obj.recommend * 0.9 && obj.curFood < obj.recommend * 1.1;
}

// ownersFounder
function ownersFounder(name) {
  const owner = dogs.filter(function (v) {
    return v.owners.find(function (vf) {
      return vf == name;
    });
  });
  return eatDogsFind(owner[0]);
}

const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

function ownersDogEater() {
  dogs.forEach(function (person) {
    if (eatDogsFind(person)) {
      ownersEatTooMuch.push(person.owners);
    } else {
      ownersEatTooLittle.push(person.owners);
    }
  });

  console.log(`
    ${ownersEatTooMuch.flat().join(" and ")}'s dogs eat too much!
    ${ownersEatTooLittle.flat().join(" and ")}'s dogs eat too little!
  `);
}
ownersDogEater();

function equalEat() {
  const ed = dogs.reduce(function (l, f) {
    return l.recommend == f.recommend;
  });

  return ed;
}

console.log(equalEat());

if (ownersEatTooLittle) {
  console.log(true);
}

console.log(ownersEatTooLittle.length);

function sortWeight() {
  const dgRecommend = [];
  dogs.map(function (v) {
    dgRecommend.push(v.recommend);

    dogs
      .filter(function (fv) {
        return fv.recommend == v.recommend;
      })
      .forEach(function (v) {
        console.log(v.owners);
      });
  });
}

console.log(sortWeight());
