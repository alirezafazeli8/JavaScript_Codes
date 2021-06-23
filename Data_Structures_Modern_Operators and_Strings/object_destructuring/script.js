"use strict";

const restaurant = {
  name: "akbar_Jooje",
  address: "gloogah, samt chap, khoone akbar agh",
  menu: {
    mainFood: ["akbar jooje", "jooj", "koobide", "ash"],
    desert: ["salad", "salad shirazi", "salad fasl"],
    drink: ["doogh", "noshabe", "angoor", "water"],
  },
  closeDate: {
    sunday: {
      closeTime: "12pm",
    },
    // saturDay: {
    //   closeTime: "6am",
    // },
    monday: {
      closeTime: "5pm",
    },
  },
  goosht: true,
  //   findValue: function (first, value) {
  //     // return { key: { value } };
  //     return { first: value };
  //   },
  myObj: function (obj) {
    return obj;
  },
};

// NOTE nested object
const {
  closeDate: { saturDay: a = "doest not exist" },
} = restaurant;

// console.log(a);

/*
// NOTE declare variable for object
// const { name: rName } = restaurant;
/ NOTE default value
const { name, address, goosht = "does Not exist" } = restaurant;

console.log(name, address, goosht);
// console.log(rName);

// NOTE thats so important
const {
  menu: { mainFood: mFood },
} = restaurant;

console.log(mFood);

const restaurant.find

let a = 25;
let b = 45;
// NOTE mutating
const obj = { a: 1, b: 3, c: 4, d: 6 };
// mutating
({ a, b } = obj);
console.log(a, b);
console.log(obj.a, obj.b);
*/
