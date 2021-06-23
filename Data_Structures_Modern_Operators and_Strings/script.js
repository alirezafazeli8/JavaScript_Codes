"use strict";
/*
// SECTION destructuring
let mf;
const restaurant  = {
    name: "akbar jooje berlin",
    menu: ["akbar jooje", "asghar jooje", "kebab jooje", "kobide"],
    mainFood: ["akbar jooje", "asghar jooje", "kebab jooje", "kobide"],
    salad: ["sezar", "shirazi", "kahoo", "season Salad"],
    dessert: ["zhele", "torshi", "zeitoon"],
    numbers: [9079079790, 8989809],
    address: "berlin, kenar berlin gate",
    selectionMenu: function (mainFoods, salads, desserts) {
        // NOTE Nested is here
        const ds = "This Food Doesn't Exist";
        // NOTE set default value and use it
        let [ mf = ds] = [this.mainFood[mainFoods]]
        let [ sl = ds] = [this.salad[salads]]
        let [ dst = ds] = [this.dessert[desserts]]
        return `
            main food : ${mf}
            salad : ${sl}
            dessert ${dst}
        `;
    },
};
// ANCHOR Thats It
console.log(restaurant.selectionMenu(1, 3, 0));

// TODO make a, b, c, d variable

// const [existOne, existTwo, , existThree] = restaurant.menu;
// console.log(existOne, existTwo, existThree);


const names = ["korosh", "dariush", "rostam", "sohrab", "mitra"];

console.log(names);

const [myBestFriend, myGoodFriend, myBadFriend, , myGirlFriend] = names;

// console.log(myBestFriend, myGoodFriend, myBadFriend, myGirlFriend);
// console.log(names);

// NOTE in destructuring for value of variable we should first declare the value and then call it.


// STUB change data
let [d, e, f] = [4, 5, 6];
let [a, b, c] = [1, 2, 3];

[d , e, f] = [a, b , c]; //  123
[a, b , c] = [d , e, f]; // 123
 
console.log(d, e, f);
console.log(a, b, c);

// STUB Nested destructuring

const [j = 5, h = 5] = [1];

console.log(j, h);

// STUB set name for array value
let [shirazi, sezar] = [restaurant.salad[1], restaurant.salad[0]];

console.log(shirazi, sezar);


let arr = [1,0];
let [a, b ] = arr;

console.log(a, b);


//
const restaurant = {
  name: "akbar_Jooje",
  address: "gloogah, samt chap, khoone akbar agh",
  menu: {
    mainFood: ["akbar jooje", "koobide", "ash"],
    desert: ["salad", "salad shirazi", "salad fasl"],
    drink: ["doogh", "noshabe", "angoor", "water"],
  },
  closeDate: {
    sunday: {
      closeTime: "12pm",
    },
    saturDay: {
      closeTime: "6am",
    },
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

const newArr = [...restaurant.menu.mainFood, ...restaurant.menu.desert];

console.log(newArr);

// SECTION spread operator.

const names = ["alireza", "korosh", "ghasem", "dariush", "sohrab"];
const age = [3, 4, 6, 6, 66, 3, 21, 566];

const nameAndAge = [...names, ...age];

console.log(...names);

// let newNames =  (...names);

function showNameAge(name, age) {
  return `${name} ${age}`;
}

console.log(showNameAge(...names, ...age));

const restaurant = {
  name: "akbar_Jooje",
  address: "gloogah, samt chap, khoone akbar agh",
  menu: {
    mainFood: ["akbar jooje", "koobide", "ash"],
    desert: ["salad", "salad shirazi", "salad fasl"],
    drink: ["doogh", "noshabe", "angoor", "water"],
  },
  closeDate: {
    sunday: {
      closeTime: "12pm",
    },
    saturDay: {
      closeTime: "6am",
    },
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

let obj2 = [];

// obj2 = ...restaurant.menu.mainFood;
obj2 = restaurant.menu.mainFood;

console.log(obj2);

// SECTION rest pattern And paramter
//                   =   spread - right hand side
// rest - left hand  =

const restaurant = {
  name: "akbar_Jooje",
  address: "gloogah, samt chap, khoone akbar agh",
  menu: {
    mainFood: ["akbar jooje", "koobide", "ash"],
    desert: ["salad", "salad shirazi", "salad fasl"],
    drink: ["doogh", "noshabe", "angoor", "water"],
  },
  closeDate: {
    sunday: {
      closeTime: "12pm",
    },
    saturDay: {
      closeTime: "6am",
    },
    monday: {
      closeTime: "5pm",
    },
  },
  myObj: function (obj) {
    return obj;
  },
};

const arrOne = [1, 2, 3, 4, 5];
console.log(arrOne);

// STUB spread
console.log(...arrOne);

// STUB rest pattern
const [numOne, numTwo, ...orderArr] = arrOne;
console.log(numOne, numTwo, orderArr);

// STUB rest pattern in object
const { name, ...orderRestaurant } = restaurant;
console.log(name);
console.log(orderRestaurant);

// STUB rest in function
function showMeTheNumber(...numbers) {
  let sum = 0;
  for (let x = 0; x < numbers.length; x++) {
    sum += numbers[x];
  }
  console.log(sum);
}

showMeTheNumber(1, 4, 5, 9, 9, 2, 1, 5);


// SECTION short circuiting (&& , ||)

// STUB || OR
const truthy = true;
const falsy = false;

// console.log(truthy || falsy); // true
// console.log(falsy || truthy); // true
// console.log(falsy || 0); // 0

// STUB && AND

console.log(1 && "one"); // one
console.log("hey" && 0); // 0
console.log(0 && "hey"); // 0
console.log(null && undefined); // if both data is falsy , it show first falsy data

const ageLicense = false;

console.log(ageLicense || false);
*/
// SECTION The Nullish Coalescing  Operators (Made In  ES2020)
// we no have a few falsy value but in Nullish Operators undefined and null is (True). its so funny 😂.

const money = undefined;
const moreMoney = null;

money ?? console.log("where is my money 😡");
moreMoney ?? console.log("Oh You Shouldn't be a null 😎");
