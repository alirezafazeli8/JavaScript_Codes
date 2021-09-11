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

// SECTION The Nullish Coalescing  Operators (Made In  ES2020)
// we no have a few falsy value but in Nullish Operators undefined and null is (True). its so funny 😂.

const money = undefined;
const moreMoney = null;

money ?? console.log("where is my money 😡");
moreMoney ?? console.log("Oh You Shouldn't be a null 😎");


// SECTION looping Arrays The For  - Of Loop

const names = ["sara", "ghasem", "korosh", "dariush", "sohrab", "Arya"];
// manual or with counter
for (let x = 0; x < names.length; x++) {
  console.log(names[x]);
}

console.log("------after use (for of) ---------");

// with (for of)
for (let item of names.entries()) {
  // console.log(item[0], item[1]);
  console.log(`${item[0]} | ${item[1]}`);
}

// very easy we can manipulate numbers
function tellNumbers(...numbers) {
  let sum = 0;
  for (let item of numbers) {
    sum += item;
  }
  console.log(sum);
}

tellNumbers(1, 2, 3);


// NOTE practice
let names = ["korosh", "dariush", "sohrab", "aryan", "roxena", "armitis"];

let [bestFriend, , , badFriend] = names;
names = [bestFriend, badFriend];

console.log(names);
console.log(bestFriend, badFriend);

let arrOne = [1, 3, 5];
// STUB set default value
let [one, two, three, four = "where is my value?", five = "hey im empty"] =
  arrOne;

console.log(one, two, three, four, five);

let carModel = [
  ["benz", ["s300"]],
  ["bmw", ["g750"]],
];
console.log(carModel);

let [[, benz], [, bmw]] = carModel;

console.log(benz, bmw);


const userInfo = {
  name: "alireza",
  lastName: "fazeli",
  age: 16,
  bestFriends: ["mohammad", "dariush", "korosh", "sara"],
  knowledge: {
    programming: ["html", "css", "sass", "javascript"],
  },
};

let cars = {
  car1: "benz",
};

// let {
//   name,
//   age,
//   bestFriends: yourBestFriends,
//   knowledge = "doest notexist",
// } = userInfo;

// console.log(name, age, yourBestFriends, knowledge);

cars = { car1: "bmw" };

let {
  knowledge: { programming: myPr },
} = userInfo;

// console.log(cars);

// console.log(myPr);

console.log(...(userInfo.bestFriends + "bahala"));

const deathGuys = [...userInfo.bestFriends];
console.log(deathGuys);

console.log(`
  ☠ DEATH GUYS IS HERE MY FRIEND ☠
    ${deathGuys}
  💀💀💀💀💀💀💀💀💀💀💀💀💀💀
`);

let { name, ...hasBeenTaked } = userInfo;

console.log(hasBeenTaked);

const lolo = "lolo where are you";

function numbers(...nums) {
  console.log(...nums);
}

numbers(1, 5, 5, 5, 4544, 4, 452, 5, 54641, 4, 454, 4, 354, 4, 6, 4, 4, 4);

let undefinedValue = undefined;
let myValue = undefinedValue;

console.log(myValue ?? "this is undefined");


let names = ["arash", "sohrab", "ghasem", "sara"];

// normal solution
for (let x = 0; x < names.length; x++) {
  // thats boring 🥱
  // console.log(names[x]);
}

// advance solution (for of loop)
for (let item of names) {
  // thats nice 🎯
  console.log(item);
}

// entries method
for (let item of names.entries()) {
  // thats nice 🎯
  console.log(`${item[0]} | ${item[1]}`);
}


const shop = {
  openDay: [
    ["00/4/4", "friday"],
    ["00/4/5", "satherday"],
    {
      newDay: "hello",
    },
  ],
};

for (let item of shop.openDay) {
  console.log(`we are open at ${item[0]} | ${item[1]}`);
}

for (let [, , { newDay }] of [shop.openDay]) {
  console.log(newDay);
}


const arrayOne = ["hello", "im", "alireza", "from"];
const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8];

const objOne = {
  name: "alireza",
  lastName: "fazeli",
  age: 16,
  bestFriends: ["ali", "korosh", "sara", "dariush", "sohrab"],
  tellWhatYouWant(variable) {
    console.log(...variable);
    [...variable] = arrayOne;
    console.log(variable);
  },
};

const objeTwo = {
  name: "keyvan",
  lastName: "radman",
  age: 25,
  bestFriends: ["niayesh", "kazem", "adib", "rostam", "armits"],
};

const [hello, , you] = arrayOne;
console.log(hello, you);

// objOne.tellWhatYouWant(["one", "two", "three"]);

const [
  one,
  two,
  three,
  ,
  ,
  five,
  six,
  ,
  eight = "doesNotExist",
  nine = "nine",
  then = "then",
] = arrayTwo;
// console.log(one, two, three, five, six, eight, nine, then);

const nestedArray = [
  ["userName", ["alireza"]],
  ["lastName", ["fazeli"]],
];

const [[, [userName]], [, [lastName]]] = nestedArray;

console.log(userName, lastName);

const arrayOne = ["hello", "im", "alireza", "from"];
const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8];

const objOne = {
  name: "alireza",
  lastName: "fazeli",
  age: 16,
  bestFriends: ["ali", "korosh", "sara", "dariush", "sohrab"],
  tellWhatYouWant(variable) {
    console.log(...variable);
    [...variable] = arrayOne;
    console.log(variable);
  },
  address: "ir, t, street, 124",
};

const objTwo = {
  name: "keyvan",
  lastName: "radman",
  age: 25,
  bestFriends: ["niayesh", "kazem", "adib", "rostam", "armits"],
  moreInfo: {
    fatherName: {
      grandpapa: "salar",
      father: "hamid",
    },
  },
};

const {
  moreInfo: {
    fatherName: { grandpapa, father },
  },
} = objTwo;
console.log(grandpapa, father);

// solution one
const { name, lastName } = objTwo;
// console.log(name, lastName);

// solution two
const { name: keyName, lastName: radName } = objTwo;
// console.log(keyName, radName);

//default value
const { address = "maybe empty" } = objOne;

// console.log(address);

// mutating
objTwo.name = { nameOne: "ghasem", nameTwo: "akbar" };

console.log(objTwo.name);


const arrayOne = ["hello", "im", "alireza", "from"];
const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8];

const objOne = {
  name: "alireza",
  lastName: "fazeli",
  age: 16,
  bestFriends: ["ali", "korosh", "sara", "dariush", "sohrab"],
  tellWhatYouWant(variable) {
    console.log(...variable);
    [...variable] = arrayOne;
    console.log(variable);
  },
  address: "ir, t, street, 124",
};

const objTwo = {
  name: "keyvan",
  lastName: "radman",
  age: 25,
  bestFriends: ["niayesh", "kazem", "adib", "rostam", "armits"],
  moreInfo: {
    fatherName: {
      grandpapa: "salar",
      father: "hamid",
    },
  },
};

console.log("hey", ...arrayTwo);

const copyArr = [...arrayTwo];
console.log(copyArr);

const copyArrTwo = [];
for (let item of arrayTwo) {
  copyArrTwo.push(item);
}

console.log(copyArrTwo);

const [a, c, ...b] = [1, 2, 3, 4];

console.log(a, b, c);


function showMeTheNumbers(...numbers) {
  let num = 0;
  for (let item of numbers) {
    num += item;
  }
  console.log(num);
}

showMeTheNumbers(100, 100, 100, 100); // thats working

// OR ||
console.log(true || false);
console.log(false || "true");
console.log("im true" || "true"); // just it need one aswer, is thast true
console.log(0 || null);

// ANd &&
console.log(true && "im true"); // show last
console.log(0 && "im true"); // show first
console.log(0 && undefined); // show first
console.log(true && undefined); // show last


let name = undefined;
// name = "ahamad";

// if (name === undefined) {
//   console.log("oh you are undefined");
// } else {
//   console.log(name);
// }
console.log(name ?? "fuck you if you undefined or null");


const names = ["niayesh", "kazem", "adib", "rostam", "armits"];
const myNum = 16;

console.log(names[0]);
console.log(names);

for (let [key, value] of names.entries()) {
  console.log(`
    ${key} | ${value}
  `);
}

const objOne = {
  name: "alireza",
  lastName: "fazeli",
  age: 16,
  bestFriends: ["ali", "korosh", "sara", "dariush", "sohrab"],
  tellWhatYouWant(variable) {
    console.log(...variable);
    [...variable] = arrayOne;
    console.log(variable);
  },
  address: "ir, t, street, 124",
};

const objTwo = {
  name: "keyvan",
  lastName: "radman",
  age: 25,
  bestFriends: ["niayesh", "kazem", "adib", "rostam", "armits"],
  moreInfo: {
    fatherName: {
      grandpapa: "salar",
      father: "hamid",
    },
  },
  thisIsObjOne: objOne,
  // enhanceDefine - define object to object
  objOne,
  names,
  myNum,
  sayHello() {
    return "hello world";
  },
  // compute keyName
  ["sa" + "lam"]: 1,
};

// console.log(objTwo["keyvanradman"]);
// console.log(objTwo.keyvanradman);
// console.log(objTwo);

// console.log(objTwo["salam"]);

// console.log(objTwo.thisIsObjOne);
// console.log(objTwo.objOne);
// console.log(objTwo.names);
// console.log(objTwo.myNum);
// console.log(objTwo.sayHello());

const objTwo = {
  name: "keyvan",
  lastName: "radman",
  age: 25,
  bestFriends: ["niayesh", "kazem", "adib", "rostam", "armits"],
  moreInfo: {
    fatherName: {
      grandpapa: "salar",
      father: "hamid",
    },
  },
  sayHello() {
    return "hello world";
  },
  // compute keyName
  ["sa" + "lam"]: 1,
};

// console.log(objTwo.age.ageOne?.ageTwo ?? "DoesNotExist");

// for (let keys of Object.keys(objTwo)) {
//   console.log(keys);
// }

// for (let keys of Object.values(objTwo)) {
//   console.log(keys);
// }

for (let [keys, values] of Object.entries(objTwo)) {
  console.log(`
    Keys: ${keys} || values: ${values}   
  `);
}


const arrayOne = [1, 2, 4, "benz", "bmw", "car"];
const arrayTwo = ["dodge", "ferarri", "dodge", "sls", "sls"];

const setOne = new Set();
const settwo = new Set(["ali", "ghasem", "mohesn"]);
setOne.add("alireza");
console.log(setOne);

const mySet = new Set(arrayTwo);

console.log(mySet);

console.log(mySet.size); // size = length
console.log(mySet.has("a")); // has = include - false
console.log(mySet.has("dodge")); // true

mySet.add("fuck you");
console.log(mySet);

mySet.delete("dodge"); // delete = pop - shift
console.log(mySet);

mySet.clear();
console.log(mySet);


// SECTION Map
const myMap = new Map();
myMap.set("name", "alireza").set("age", 16).set("color", "red").set(1, 2);

console.log(myMap);
console.log(myMap.get("name"), myMap.get(1));

console.log(myMap.has("color")); //true
console.log(myMap.has("address")); //fasle

myMap.delete(1);
console.log(myMap);

console.log(myMap.size); // 3
myMap.clear();
console.log(myMap);

const mapOne = new Map([
  ["key", "value"],
  ["age", 16],
  [true, false],
  [myMap, "heyMap"],
]);

console.log(mapOne);
console.log(mapOne.get(myMap));

const objTwo = {
  name: "keyvan",
  lastName: "radman",
  age: 25,
  bestFriends: ["niayesh", "kazem", "adib", "rostam", "armits"],
  moreInfo: {
    fatherName: {
      grandpapa: "salar",
      father: "hamid",
    },
  },
  sayHello() {
    return "hello world";
  },
  // compute keyName
  ["sa" + "lam"]: 1,
};

const newMap = new Map(Object.entries(objTwo));
console.log(newMap);

const mapOne = new Map([
  ["key", "value"],
  ["age", 16],
  [true, false],
  [
    "myMethod",
    function () {
      console.log("hello world");
    },
  ],
]);

for (let [key, value] of mapOne) {
  console.log(key, value);
}

const myArr = [...mapOne];
console.log(myArr);

console.log(mapOne.get("myMethod"));


// SECTION working with strings

const mySentence = "hello im alireza";
const myName = "alireza";

// console.log(mySentence[0]);
// console.log(mySentence[1]);
// console.log(mySentence[2]);

// STUB length
console.log(myName.length);

// STUB indexof
console.log(myName.indexOf("a"));

// const whereA = [];
// for (let item of myName) {
//   whereA.push(item.indexOf("a"));
//   if (whereA[item.length] == "a") {
//     continue;
//   } else {
//     whereA.shift();
//   }
// }

// console.log(whereA);

// for (let x = 0; x < myName.length; x++) {
//   const newName = myName;
//   const counter = [];
//   counter.push(newName.indexOf("a"));
//   newName.unshift();
//   console.log(counter);
// }


const mySentence = "hello im alireza";
const myName = "alireza";

console.log(myName.indexOf("a"));
console.log(myName.lastIndexOf("a"));

// STUB slice
console.log(mySentence.slice(4));
console.log(mySentence.slice(0, 5));
console.log(mySentence.slice(0, mySentence.indexOf("a")));
console.log(mySentence.slice(-7));

const boxing = new String("hello world");
console.log(boxing);


const low = "hello world hows it going im alireza";
const upper = "HELLO WOLD IM ALIREZA";
const lowUpper = "HEllo WjdIs Up PlliCeE";

console.log(low);
console.log(upper);
console.log(lowUpper);

console.log("----------After------------");

console.log(low.toUpperCase());
console.log(upper.toLowerCase());
console.log(lowUpper.toLowerCase());

console.log(low.slice(0, 5).toUpperCase());


const low = "        hello world hows it going im alireza      ";
console.log(low);
console.log(low.trim());


let mySentence = "hey bitch how are you?";
let msTwo = "benz its cool car , but this car is not good car";

msTwo = msTwo.replaceAll("car", "Truc");
msTwo = msTwo.replaceAll("T", "H");
console.log(msTwo);

console.log(mySentence);

mySentence = mySentence.replace("how", "-----");

console.log(mySentence);


let msTwo = "benz its cool car , but this car is not good car";

// console.log(msTwo.replace(/car/g, "truc"));

// console.log(msTwo.includes("car")); // true
// console.log(msTwo.includes("bmw")); // false

console.log(msTwo.startsWith("benz")); // true
console.log(msTwo.startsWith("b")); // true
console.log(msTwo.startsWith("ben")); // true
console.log(msTwo.startsWith("benz")); // true
console.log(msTwo.startsWith("bmw")); // false

console.log(msTwo.endsWith("car")); // true
console.log(msTwo.endsWith("truc")); // false


let plusChar = "hello+alireza+fazeli+hal+shoma+chetore";
let spaceChar = "hello alireza fazeli hal shoma chetore";
let underScoreChar = "hello_alireza_hal_shoma_chetore";

plusChar = plusChar.split("+");
spaceChar = spaceChar.split(" ");
underScoreChar = underScoreChar.split("_");

console.log(plusChar);
console.log(spaceChar);
console.log(underScoreChar);

plusChar = plusChar.join(" ");
console.log(plusChar);

let name = ["gooz", "mikhori", "ya", "bagbag"];

console.log(name);

name = name.join(" ");

console.log(name);


const mySentence = "Test";
console.log(mySentence.padStart(10, "+"));
console.log(mySentence.padStart(10, "+"));
console.log(mySentence.padEnd(10, "+"));

console.log(mySentence.repeat(10));
*/
