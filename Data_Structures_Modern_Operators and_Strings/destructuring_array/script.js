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


// const friends = ["alireza", "ghasem", "sohrab", "naser", "korosh", "dariush"];

// let [bestFriendOne, , bestFriendTwo, , bestFriendThree] = friends;

// console.log(bestFriendOne, bestFriendTwo, bestFriendThree);

let arrOne = [1, 2];
let arrTwo = [3, 4];

console.log(arrOne, arrTwo);

[arrOne] = [arrTwo];

console.log(arrOne, arrTwo);

const friends = ["alireza", "ghasem", "sohrab", "naser", "korosh", "dariush"];

let [
  bestFriendOne,
  ,
  bestFriendTwo,
  ,
  bestFriendThree,
  ,
  bestFriendFive = "Me",
] = friends;

console.log(bestFriendOne, bestFriendTwo, bestFriendThree, bestFriendFive);

[friends[5]] = [arrOne[1]];
console.log(friends);
*/
