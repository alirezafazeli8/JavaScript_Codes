"use strict";

/*
// function declaration
function helloWorld() {
    console.log("Hello World");
}

helloWorld();

function calculate(numberOne, numberTwo) {
    const jam = numberOne + numberTwo;
    const tafrigh = numberOne - numberTwo;
    const zarb = numberOne * numberTwo;
    const taghsim = numberOne / numberTwo;

    const finalResult = `
        ${numberOne} + ${numberTwo} = ${jam}
        ${numberOne} - ${numberTwo} = ${tafrigh}
        ${numberOne} * ${numberTwo} = ${zarb}
        ${numberOne} / ${numberTwo} = ${taghsim}
    `;

    return finalResult
}

console.log(calculate(2, 2));
*/

/*
// function expression
const nameMixer = function (firstName, lastName) {

    // change undefined to anonymous
    if (firstName === undefined || lastName === undefined) {
       firstName = "anonymous 🎃";
       lastName = "anonymous 🎃";
    }
    const mixing = `your name is ${firstName}, and your last name is ${lastName}`;
    return mixing
};

console.log(nameMixer("jack", "nelson"));

*/
/*
// arrow function

const sayHello = () => console.log("hello world");

const nameMixer = (firstName, lastName) => `name: ${firstName}, family: ${lastName}`; 

const calculate = (numberOne, numberTwo) => {
    const result = numberOne + numberTwo;
    return result
};

sayHello();
console.log(nameMixer("jack", "nelson"));
console.log(calculate(2, 2));
*/
/*
const names = new Array ("alireza", "ghasem", "salar", "Sara");
console.log(names);
*/
/*
const friendNames = ["alireza", "korosh", "sohrab", "dariush"];

console.log(friendNames);
console.log(friendNames[1]);
console.log(friendNames[3]);
friendNames[2] = "Rostam";
console.log(friendNames);

// length
console.log(friendNames.length);

// method
// Add Value
// push
friendNames.push("Sorena");
console.log(friendNames);

// unshift
friendNames.unshift("Soren");
console.log(friendNames);

//delete value
//pop
friendNames.pop();
console.log(friendNames);

//shift
friendNames.shift();
console.log(friendNames);


// include
console.log(friendNames.includes("alireza")); //if we want to know the specific value is exist or no

// indexOf 
console.log(friendNames.indexOf("korosh"));
*/
/*
const age = 75;

if (age >= 18 && age < 75) {
    console.log("hey dear you can get a license 💳");
} else if (age >= 75) {
    console.log("sorry you very old 😁");
} else {
    console.log("shit you cant get a license ❌");
}


// type conversion
let newYear = "45345";
let oldYear = 2021;

console.log(typeof newYear);
console.log(typeof oldYear);

newYear = Number(newYear);
console.log(typeof newYear);
oldYear = String(oldYear);
console.log(typeof oldYear);

// type coercion
const sum = 2 % "2";
console.log(sum);


// falsy : "", undefined, null, 0, NaN, false, -0

//falsy
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean(-0));

// truthy: everything else falsy is truthy.
const sayHello = function () {
    console.log("hello");
}
console.log(Boolean("dasdad"));
console.log(Boolean(3242));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(sayHello));
//.......................

*/

/*
let age = 18;
const needAge = age > 21;

switch (true) {
    case age == 18:
        console.log("you are 18");
        break
    case age == 16:
        console.log("you are 16");
        break
    case age == 21:
    case age > 21:
        console.log("you are 21");
        console.log("you can drink wine 🍷");
        break
}


const age = 17;
// age >= 18 ? console.log("you can drink wine") : console.log("you cant drink wine");

const needAge = age >= 18 ? "you can drink wine" : "you cant drink wine";

console.log(needAge);



function sayHello() {
  console.log("Hello World !");
}

sayHello();

function calc(numberOne, numberTwo) {
    console.log(numberOne + numberTwo);
    console.log(numberOne - numberTwo);
    console.log(numberOne * numberTwo);
    console.log(numberOne / numberTwo);
}

calc(10, 10);

function myData() {
    const data  = {
        name: "alireza",
        lastName: "fazeli",
        age: 16
    }
    return data
}

console.log(myData());
let dataTwo = 15;
console.log(dataTwo);


let sayHello = function () {
    console.log("Hello World !...");
};
sayHello();

sayHello = 15;
console.log(sayHello);

let arrowFunction = () => console.log("hello");
arrowFunction();

let sayHelloToMe = (sayHello) => {
    if (sayHello === undefined) {
        console.log("You Should Say Hello 😡😒");
    } else {
        console.log("Hello Tooooo...😁");
    }
};

sayHelloToMe("hello");
sayHelloToMe();


let myFriendOne = "alireza";
let myFriendTwo = "Salar";
let myFriendThree = "ghasem";
// then friend.....

const myFriends = ["ghasem", "salar", "alireza", "korosh", "mohammad", "Ros", "Rika"];

console.log(myFriends);
console.log(`my best Friend is : ${myFriends[2]}`);
console.log(myFriends.length);


let x = 2;
// x = x + 2;
x += 2;
x -= 1;
x *= 2;
x /= 2;
x %= 1;
console.log(x);

x = 3;
console.log(typeof x);
x = String(x);
console.log(typeof x);
x = Number(x);
console.log(typeof x);

x = "3" + 3;
console.log(x);
x = "3" - 3;
console.log(x);
x = "3" * 3;
console.log(x);
x = "3" / 3;
console.log(x);
x = "3" % 3;
console.log(x);

let y = "j";

switch (y) {
    case "a":
        console.log("this is a");
        break;

    case "b":
        console.log("this is b");
        break;

    case "c":
        console.log("this is c");
        break;

    case "d":
    case "h":
        console.log("d and h is brother");
        break;

    default:
        console.log("OO Sorry Pleas Enter Correct Value");
}

let x = "x";

x == "y" ? console.log("this is y") : console.log("this is x");

const sayHello = () => console.log("hello World");

sayHello();

document.querySelector(".result").textContent = "Hello World";

console.log(3 * "3");
console.log(3 + "3");


let x = 2;
let y = "2";

console.log(x == "2");
console.log(y === 2);


let x = 41;

x == 18 ? console.log("you are 18") : console.log("you are not 18");


// function declaration
function sayHello() {
    console.log("hello worlds");
}

sayHello();

// function expression
const sayMyName = function (myName) {
    console.log(`my Name Is : ${myName}`);
};

sayMyName("Alireza");

const sayHi = () => console.log('hi world');
sayHi();

const countryName = (country) => {
    console.log(`your country Name Is : ${country}`);
};
countryName("USA");


const friend1 = "alireza";
const friend2 = "mohammad";
const friend3 = "korosh";
const friend4 = "dariush";
const friend5 = "sohrab";

const friends = ["alireza", "mohammad", "sara", "ali", "ghasem", "korosh", "dariush", "sohrab", "roxena"];

console.log(friends);
console.log(`your best friend is ${friends[0]}`)

const friends = ["alireza", "korosh", "sara", "ali"];

console.log(friends);

// push method
friends.push("last friend");
console.log(friends);

// unshift method
friends.unshift("first friends");
console.log(friends);

// pop method
friends.pop();
console.log(friends);

// shift method
friends.shift();
console.log(friends);

// indexOf
console.log(friends.indexOf("alireza"));
console.log(friends.indexOf("sara"));
console.log(friends[2]);

// length
console.log(friends.length);

// include
console.log(friends.includes("mohammad")); // false
console.log(friends.includes("korosh")); // true


const userInfo = {
    firstName : "alireza",
    lastName : "fazeli",
    age : 16,
    country : "USA",

    // object method
    fullName : function() {
        const fullName = `
            // your name : ${userInfo.firstName},
            // your lastName : ${userInfo.lastName},
        `;
        return fullName
    },
};

console.log(userInfo);

console.log(`
    hey ${userInfo.firstName} ${userInfo["lastName"]}
`);

const first = "first";
const Name = "Name";

console.log(userInfo[first + Name]);
console.log(userInfo.fullName());

const data = {
    userID : 345435,
    showUserId : function () {

        // this keyword
        return this.userID
    },
};

console.log(data.showUserId());



// console.log("friend : alireza");
// console.log("friend : mohammad");
// console.log("friend : korosh");
// console.log("friend : dariush");
// console.log("friend : ghasem");
// console.log("friend : sohrab");
// console.log("friend : rostam");
// console.log("friend : armin");
// its bullshit

const friend  = ["alireza", 'mohammad', 'korosh', 'dariush', 'ghasem', 'sohrab'];

for(let x = 0; x < friend.length; x++) {
    console.log("friend :", friend[x]);
}


const number = [1, 2, 3, 4, 9, 5, 6];

// for(let x = 0; x < number.length; x++) {
//     if (number[x] == 9)  {
//         number.pop();
//         console.log("Wtf, really nine ?");
//         break;
//     }
//     console.log(number[x]);
// }

for(let x = 0; x < number.length; x++) {
    if (number[x] == 9)  {
        continue; // nine isn't here
    }
    console.log(number[x]);
}

for(let x = number.length; x > -1; x--) {
    console.log(number[x]);
}



let age = 15;

while (age < 18) {
    console.log("wrong");
    age++;
    if (age == 18) {
        console.log("oh your are right");
    }
}


//dom

document.querySelector("#header-title").textContent = "Hey I Edited You :)";


let x = 3;

x += 3;

console.log(x);

let y = 7;

console.log(x >= y);



let x = 3;
let y = "3";

console.log(x == y);
console.log(x === y);

let license = "jdasdas";

switch (license) {
    case true:
        console.log("you have license");
        break;
    case false:
        console.log("you dont have license");
        break;


    default:
        console.log("pleas enter valid answer");
}





let age = 52;

age >= 18?console.log("you can drive"):console.log("you cant drive");


function helloOne() {
    console.log("im one hello");
}

const helloTwo = function () {
    console.log("im two hello");
};

const helloThree = () => {
    console.log("im three hello");
};

helloOne();
helloTwo();
helloThree();


let friends = ["korosh", "dariush", "atoosa", "sohrab", "rostam", "ahoora"];

console.log(friends);

console.log(friends[2 + 2]);
friends.push("hootan");
friends.unshift("alireza");

console.log(friends);

friends.pop();
friends.shift();

console.log(friends);

console.log(friends.indexOf("rostam"));
console.log(friends.includes("alireza"));
console.log(friends.includes("rostam"));
console.log(friends.length);



const userInfo = {
    firstName : "alireza",
    userName : "@devfazeli",
    age : 23,
    city : "neka",
    showComplete : function () {
        return `hey ${this.userName}, i love you man and i want see ${this.city} ❤`
    },
};

console.log(userInfo);
console.log(userInfo.firstName);
console.log(userInfo["userName"]);
console.log(userInfo["a"+"g"+"e"]);
console.log(userInfo.showComplete());


let friends = ["korosh", "dariush", "atoosa", "sohrab", "rostam", "ahoora"];


// for(let x = 1; x <= 10; x++) {
//     console.log(`hello for ${x}`);
// }

for(let x = 0; x < friends.length; x++) {
    console.log(friends[x]);

    if (friends[x] === "korosh") {
        // break;
        continue;
    }
}



let license = true;

while(license){
    for(let x = 1; x <= 1000; x++){
        result.textContent = `You Hacked 🎃 ${x}`;
        if (x == 10) {
            license = false;
            break;
        }
    }
}

const result = document.querySelector(".result");
const showImage = document.getElementById('showImage');
const showImageButton = document.getElementById("showImageButton");

showImageButton.addEventListener("click", function () {
    showImageButton.classList.add("hidden");
    showImage.classList.remove("hidden");
});

document.querySelector("body").addEventListener("keyup", function (bodyObject) {
    if (bodyObject.key === "Escape") {
        showImage.classList.add("hidden");
        showImageButton.classList.remove("hidden");
    }
});

showImage.addEventListener("click", function() {
    showImage.classList.add("hidden");
    showImageButton.classList.remove("hidden");
});




sayHello();

function sayHello () {
    return "hello"
};

if(sayHello() == "hello"){
    console.log("oh hi there");
} else {
    console.log("is that fun?");
}


console.log(document.querySelector("button").classList.contains("asdk"));

document
  .getElementById("showImageButton")
  .addEventListener("click", function () {
    console.log("hey you clicked me");
  });

document.getElementById("showImageButton").style.color = "red";
document.getElementById("showImageButton").style.backgroundColor = "black";


const personOne = {
  age: 15,
  showAge: function () {
    console.log(this.age);
  },
};

personOne.showAge();

let personTwo = {
  age: 16,
};

// personTwo = personOne;
// console.log(personTwo.showAge());

Object.assign(personTwo, {
  name: "alireza",
});

console.log(personTwo);

let me  = "alireza";


let names = [
  "alireza",
  "korosh",
  "dariush",
  "sohrab",
  "ghasem",
  ["lucky", ["rex", "pex", "max"]],
];

// const [, , , , , [, [l1, l2, l3]]] = names;
const [l1, l2, l3] = names[5][1];
console.log(l1, l2, l3);

// NOTE bullshit
// const bestFriend = names[0];

// console.log(bestFriend);

const [f1, , f2, , f3, f4 = "your friend does not exist"] = names; // alireza, dariush , ghasem
// let a = 1;
// let b = 2;

console.log(f4);

const myFruit = {
  myBestFruit: ["orange", "apple", "kiwi", "blueberry"],
  tellMeTheColor(orangeColor, appleColor, kiwiColor, blueberryColor) {
    const [orange, apple, kiwi, blueberry] = this.myBestFruit;
    console.log(`
            ${orange} : ${orangeColor}
            ${apple} : ${appleColor}
            ${kiwi} : ${kiwiColor}
            ${blueberry} : ${blueberryColor}
        `);
  },
};

myFruit.tellMeTheColor("orange", "red", "brown", "darkblue");


const userDB = {
  firstName: "alireza",
  lastName: "fazeli",
  age: 16,
  address: ["th, on the fly", "LA, On The Roof"],
  bestFriends: ["Jey", "jeff", "rey", "key"],
  howManyFriends() {
    console.log(this.bestFriends.length);
  },
  moreInformation: {
    moreFriend: {
      friends: ["lisa", "kia", "jia"],
    },
  },
};

const { firstName } = userDB;
const { lastName: myLastName, age2 = "shit" } = userDB;

const {
    moreInformation: {
        moreFriend: { friends: moreFriends },
    },
} = userDB;

console.log(moreFriends);

console.log(firstName, myLastName, age2);


const userDB = {
  firstName: "alireza",
  lastName: "fazeli",
  age: 16,
  address: ["th, on the fly", "LA, On The Roof"],
  bestFriends: ["Jey", "jeff", "rey", "key"],
  howManyFriends() {
    console.log(this.bestFriends.length);
  },
  moreInformation: {
    moreFriend: {
      friends: ["lisa", "kia", "jia"],
    },
  },
};


// STUB spread
let bestFriends = ["Jey", "jeff", "rey", "key"];

for (let x = 0; x < bestFriends.length; x++) {
    console.log(bestFriends[x]);
}


const newFriend = [...bestFriends];

console.log(newFriend);

// STUB rest pattern and parameters

const [bf1, bf2, ...orderfriend] = bestFriends;

console.log(bf1, bf2, ...orderfriend);


function pluser(...numbers) {
    let num = 0;
    for (let item of numbers) {
        num += item;
    }
    console.log(num);
}


pluser(234, 4, 4, 1, 6, 6, 71, 3, 5, 44, 54, 4435, 4, 42, 4421, 53, 7);



// || OR
console.log("true" || true); // "true"
console.log("" || true); // true
console.log("" || false); // false


// && AND
console.log("true" && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(0 && false); // 0


// SECTION NULLISH OPERATOR
let myName;
let yourName = null;
console.log(myName);

// its bullshit for handle undefined and null
// if (typeof myName === "undefined") {
//     console.log("does Not Exist");
// }

// STUB Nullish operator
console.log(myName ?? "doesNot exist 🤦‍♂️🤦‍♂"); // its very easy 😊😊
console.log(yourName ?? "why tahts null? ⚛⚛");



// SECTION FOR OF LOOP
let bestFriends = ["Jey", "jeff", "rey", "key"];

// its bullshit
// for (let item = 0; item < bestFriends.length; item++) {
//     console.log(bestFriends[item]);
// }
console.log("---------------------------");
for (let item of bestFriends.entries()) { // [0, "value"]
    console.log(item[0], item[1]);
}




let newdb = [...userDB];

for (let item of newdb) { // [0, "value"]
    console.log(item);
}



const userDB = {
    firstName: "alireza",
    lastName: "fazeli",
    age: 16,
    address: ["th, on the fly", "LA, On The Roof"],
    bestFriends: ["Jey", "jeff", "rey", "key"],
    howManyFriends() {
        console.log(this.bestFriends.length);
    },
    moreInformation: {
        moreFriend: {
            friends: ["lisa", "kia", "jia"],
        },
    },
};

const {firstName, lastName, ...orderObj} = userDB;

console.log(firstName, lastName, orderObj);
console.log(orderObj);
'

const userInfo1 = {
    firstName: "alireza",
    lastName: "fazeli",
    age: 16,
    country: "USA",

    // object method
    fullName: function () {
        const fullName = `
            // your name : ${userInfo.firstName},
            // your lastName : ${userInfo.lastName},
        `;
        return fullName
    },
};

const firstName = "alireza";
const lastName = "fazeli";

const userInfo2 = {
    firstName: "alireza",
    userName: "@devfazeli",
    age: 23,
    // normal solution
    // userDb : userInfo1,
    [4 + 2]: "alireza",
    userInfo1,
    myFirstMethod: function () {
        console.log("hello world");
    },
    mylastMethod() {
        console.log("helloWorld");
    },
    city: "neka",
    showComplete: function () {
        return `hey ${this.userName}, i love you man and i want see ${this.city} ❤`
    },
};

console.log(userInfo2[4 + 2]);


userInfo2.myFirstMethod();
userInfo2.mylastMethod();


console.log(userInfo2.userDb);
console.log(userInfo2.userInfo1);




const userInfo2 = {
    firstName: "alireza",
    userName: "@devfazeli",
    age: 23,
    // normal solution
    // userDb : userInfo1,
    [4 + 2]: "alireza",
    myFirstMethod: function () {
        console.log("hello world");
    },
    mylastMethod() {
        console.log("helloWorld");
    },
    city: "neka",
    showComplete: function () {
        return `hey ${this.userName}, i love you man and i want see ${this.city} ❤`
    },
};

console.log(userInfo2.address?.add2 ?? "doesNot exist");
console.log(userInfo2.address?? "doesNot exist");


const userInfo2 = {
    firstName: "alireza",
    userName: "@devfazeli",
    age: 23,
    // normal solution
    // userDb : userInfo1,
    [4 + 2]: "alireza",
    myFirstMethod: function () {
        console.log("hello world");
    },
    mylastMethod() {
        console.log("helloWorld");
    },
    city: "neka",
    showComplete: function () {
        return `hey ${this.userName}, i love you man and i want see ${this.city} ❤`
    },
};

// for (let item of Object.keys(userInfo2)) {
//     console.log("thats my key", item);
// }
//
// for (let item of Object.values(userInfo2)) {
//     console.log("thats my key", item);
// }

for (let item of Object.entries(userInfo2)) {
    console.log(item);
}



const bestFriends = ["jeff", "jeff", "jey", "key", "key"];
console.log(bestFriends);

const newFriends = new Set(bestFriends); // now are unique
console.log(newFriends);
console.log(newFriends.size); // 3
console.log(newFriends.has("jeff")); // true
console.log(newFriends.has("alberto")); // false
newFriends.add("Maxi");
newFriends.add("jeff"); // we cant add same value , set does delete value
newFriends.delete("key");
newFriends.clear();
console.log(newFriends);





// alert("Hello world");

// console.log("Hello World");

// const name = "alireza";
// console.log(name);

let name;
// let name = "alireza";
name = "ghasem";


// const x;
// const x = 1;
// x = 2;

const age = 2;


if (age >= 18) {
    console.log("you can drive with car");
} else {
    console.log("you cant drive with card");
}


let x = "2";
let y = 2;

// console.log(typeof x);
// x = Number(x);

// console.log(typeof x);


console.log(typeof y);

y = String(y);

console.log(typeof y);


console.log("3" - 2);

console.log("3" + "6");


console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));


console.log(Boolean(1));
console.log(Boolean("hello"));
console.log(Boolean(3 + 3));




const age = 16;


switch(age) {
    case 15:
        console.log("You Are 15");
        break;

    case 17:
        console.log("You Are 17");
        break;
    
    case 18:
        console.log("You Can Drive With Your Card");
        break;

    default:
        console.log("OHHHHHH GO HOME BABY");
}



const age = 20;
const checkYourAge = age >= 18?"you are 18":"you are not 18";

console.log(checkYourAge);



function sayHello() {
    console.log("hello world");
}

sayHello();


function plus() {
    return 3 + 3 + 3;
}

console.log(plus());




const sayHello = function () {
    return "hello World"
}

console.log(sayHello());
let two;

console.log(`${two = function () {return 2}}`);



const sayHello = () => "hello world";

console.log(sayHello());



// const name1 = "alireza"
// const name2 = "fazek"

const friendsName = ["alireza", "ghasem", "sara", "mohsen"];

console.log(friendsName);

console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);

// add value from last of array
friendsName.push("--last--");

// add value from first of array
friendsName.unshift("--first--");

console.log(friendsName);


friendsName.pop();
console.log(friendsName);

friendsName.shift();
console.log(friendsName);



const friendsName = ["alireza","sara", "mohsen"];
console.log(friendsName.indexOf("alireza"));
console.log(friendsName.indexOf("ghasem"));
console.log(Boolean(friendsName.indexOf("korosh")));

if (friendsName.indexOf("korosh") == -1) {
    console.log("shit is not exsit");
} else {
    console.log("is exist");
}

console.log(friendsName.includes("korosh"));
console.log(friendsName.includes("alireza"));
console.log(friendsName.includes("ghasem"));

console.log(friendsName.length);


const userInfo = {
    name: "alireza",
    lastName: "fazeli",
    age: 16,
    showComplete: function () {
        return `
            ${this.name} | ${this.lastName}

                    ${this.age}
        `
    },
};

console.log(userInfo.showComplete());

// console.log(userInfo);
// console.log(userInfo.name);
// console.log(userInfo.lastName);
// console.log(userInfo.age);

// console.log(userInfo["name"]);
// console.log(userInfo["age"]);

// console.log(userInfo["last" + "Name"]);


const friendsName = ["alireza", "ghasem", "sara", "mohsen", "ricka", "lopa", "topa", "oka"];

// console.log(friendsName);

// console.log(`this is my Friend ${friendsName[0]}`);
// console.log(`this is my Friend ${friendsName[1]}`);
// console.log(`this is my Friend ${friendsName[2]}`);
// console.log(`this is my Friend ${friendsName[3]}`);

// for (let x = 0; x < friendsName.length; x++) {
//     console.log(friendsName[x]);
// }

// for(let x = 1; x < 11; x++) {
//     console.log(`Hello WORLD TO ${x}`);
// }

// for (let x = 0; x < friendsName.length; x++) {
//     // console.log(friendsName[x]);
//    for (let y = 1; y < 11; y++) {
//        console.log(y);
//         if (friendsName[x] == "oka") {
//             console.log("Hey Oka is Here");
//             break;
//         } else {
//             continue;
//         }
//    }
// }


// for (let x = 10; x > 0; x--) {
//     console.log(x);
// }

let password =  prompt("pleas enter you password :");

// password();

while(password != "88") {
    console.log("Pleas Enter Correct Password");
    password =  prompt("pleas enter you password :");
    // password();
}



// let x = 0;
// while(x == 0) {
//     console.log("hey five");

// }s

// console.log("hello");

// const h1Title = document.querySelector("#header-title");

const h1Title = document.getElementById("header-title");
const inputText = document.getElementById("main_text");
const button = document.getElementById("clickMe");

// h1Title.textContent = "--New Content--";

button.addEventListener("click", function () {
  console.log(inputText.value);
});


const name = "alireza"; // global

function sayName() {
  // function scope
  //   var name = "mohammad";
  console.log(name);
}

for (let x = 1; x < 2; x++) {
  // block scoped
  const name = "sara";
  console.log(name);
}

console.log(name);
sayName();

const userOneIfo = {
  name: "alireza",
  lastName: "fazeli",
};

const userTwoIfo = {
  name: "ghasem",
  lastName: "mohseni",
};

// console.log(userOneIfo);
// console.log(userTwoIfo);

userOneIfo.name = userTwoIfo.name;
// userTwoIfo.name = userOneIfo.name;

console.log(userOneIfo);
console.log(userTwoIfo);

const copy = {};

Object.assign(copy, userTwoIfo);
console.log(copy);

const names = ["alireza", "fazeli", "ghasem", "sohrab", "akbar", "soghra"];


// const alireza = names[0];
// const fazeli = names[1];
// const ghasem = names[2];

// console.log(alireza, fazeli, ghasem);

const [alireza, fazeli, ghasem, , , soghra] = names;

console.log(alireza, fazeli, ghasem, soghra);


const userInfo = {
  allInfo: ["alireza", "fazeli", 18, "neka"],
  setVariable() {
    const [mName, mLastName, mAge, mCity] = this.allInfo;
    return `
        ${mName} | ${mLastName} | ${mAge}
                    ${mCity}
    `;
  },
};

console.log(userInfo.setVariable());


const names = ["alireza", "fazeli", "ghasem", "sohrab", "akbar", "soghra"];

const [alireza, , , , , , korosh = "ANONYMOUS"] = names;

console.log(alireza, korosh);


const userInfo = [
  ["userName", "alirezaKAKAKAK"],
  ["address", ["Mazandaran", ["Neka"]]],
];

const [[, userName], [, [, [userCity]]]] = userInfo;
console.log(userName, userCity);


const restaurant = {
  name: "pizza_chip",
  mainMenu: ["pizza", "chosfill", "lazania", "gohash"],
  bestFood: {
    fireFood: {
      list: ["gooz", "chos ash", "gooz atashin"],
    },
  },
  salad: ["sazar", "shirazi", "fasl"],
  address: "Mazandaran, Neka, Enghelab Street",
  telephone: 42344234234,
};

const { name, mainMenu, salad: bestSalad, customer = "--Not--" } = restaurant;

const {
  bestFood: {
    fireFood: { list: fireFood },
  },
} = restaurant;

// console.log(name, mainMenu, bestSalad, customer);

console.log(fireFood);


const names = ["alireza", "fazeli", "ghasem", "sohrab", "akbar", "soghra"];

const copy = [];

for (let x = 0; x < names.length; x++) {
  copy.push(names[x]);
}

console.log(copy);

console.log(...names);

const copyNames = [...names];
console.log(copyNames);

const restaurant = {
  name: "pizza_chip",
  mainMenu: ["pizza", "chosfill", "lazania", "gohash"],
  bestFood: {
    fireFood: {
      list: ["gooz", "chos ash", "gooz atashin"],
    },
  },
  salad: ["sazar", "shirazi", "fasl"],
  address: "Mazandaran, Neka, Enghelab Street",
  telephone: 42344234234,
};

console.log(...Object.keys(restaurant));
console.log(...Object.values(restaurant));

const restaurant = {
  name: "pizza_chip",
  mainMenu: ["pizza", "chosfill", "lazania", "gohash"],
  bestFood: {
    fireFood: {
      list: ["gooz", "chos ash", "gooz atashin"],
    },
  },
  salad: ["sazar", "shirazi", "fasl"],
  address: "Mazandaran, Neka, Enghelab Street",
  telephone: 42344234234,
};

console.log(Object.keys(restaurant));


const names = ["alireza", "fazeli", "ghasem", "sohrab", "akbar", "soghra"];

const [alireza, fazeli, ...order] = names;

console.log(alireza, fazeli);
console.log(order);

const restaurant = {
  name: "pizza_chip",
  mainMenu: ["pizza", "chosfill", "lazania", "gohash"],
  bestFood: {
    fireFood: {
      list: ["gooz", "chos ash", "gooz atashin"],
    },
  },
  salad: ["sazar", "shirazi", "fasl"],
  address: "Mazandaran, Neka, Enghelab Street",
  telephone: 42344234234,
};

const { name, ...orderObj } = restaurant;
console.log(name, orderObj);


function saveNames(...names) {
  console.log(names);
}

saveNames("nanay", "asgharo", "soghra", "nanay", "akbaro", "kobra");


function plusPlus(...nums) {
  let sum = 0;
  for (let x = 0; x < nums.length; x++) {
    sum += nums[x];
  }

  return sum;
}

console.log(plusPlus(3, 3, 3, 3));


console.log(1 || 0);
console.log(0 || 2);
console.log(3 || 4);
console.log(0 || undefined);

console.log(1 && 0);
console.log(0 && 1);
console.log(1 && 2);
console.log(undefined && null);


const name = undefined ?? "ANONYMOUS";
const family = null ?? "--nothing--";

console.log(name, family);
// if (name == undefined) {
//   console.log("ANONYMOUS");
// }

// if (family == null) {
//   console.log("THIS IS NULL");
// }


const names = ["alireza", "fazeli", "ghasem", "sohrab", "akbar", "soghra"];

// for (let x = 0; x < names.length; x++) {
//   console.log(names[x]);
// }

for (let item of Object.entries(names)) {
  console.log(`${item[0]} || ${item[1]}`);
}


const restaurantOne = {
  name: "pizza_chip",
  mainMenu: ["pizza", "chosfill", "lazania", "gohash"],
  bestFood: {
    fireFood: {
      list: ["gooz", "chos ash", "gooz atashin"],
    },
  },
  salad: ["sazar", "shirazi", "fasl"],
  address: "Mazandaran, Neka, Enghelab Street",
  telephone: 42344234234,
};

const restaurantTwo = {
  name: "pizza_chip",
  mainMenu: ["pizza", "chosfill", "lazania", "gohash"],
  sayHello() {
    console.log("hello World");
  },
  ["nanay" + "asgharo"]: "soghra",
  //   mainRest: restaurantOne,
  //   restaurantOne,
};

console.log(restaurantTwo);
restaurantTwo.sayHello();
console.log(restaurantTwo["nanayasgharo"]);
console.log(restaurantOne.bestFood.address?.fireFood ?? "--not exist--");


const restaurant = {
  name: "pizza_chip",
  mainMenu: ["pizza", "chosfill", "lazania", "gohash"],
  bestFood: {
    fireFood: {
      list: ["gooz", "chos ash", "gooz atashin"],
    },
  },
  salad: ["sazar", "shirazi", "fasl"],
  address: "Mazandaran, Neka, Enghelab Street",
  telephone: 42344234234,
};

// // keys
// for (let keys of Object.keys(restaurant)) {
//   console.log(`
//      Fucking Keys : ${keys}
//   `);
// }

// // values
// for (let values of Object.values(restaurant)) {
//   console.log(values);
// }

for (let obj of Object.entries(restaurant)) {
  console.log(`
    Keys: ${obj[0]} =|= values ${obj[1]}
  `);
}


// set
// unique in sets
const mySets = new Set();

// primitive and objects can be add in to setss
mySets.add("hello");
mySets.add(88);
mySets.add(true);
mySets.add(["alireza", "ghasem"]);
mySets.add({ name: "alireza" });
mySets.add(function name() {});

// size
console.log(mySets.size);

// has
console.log(mySets.has(88)); // true
console.log(mySets.has("--hello--")); // false

// delete
mySets.delete(true);
console.log(mySets);

// clear
// mySets.clear();
console.log(mySets);

const studentsName = ["jack", "jey", "sara", "jack", "locas", "jey"];
console.log(studentsName);

const filterStudents = new Set(studentsName);
// filterStudents.add(...studentsName);

console.log(filterStudents);



// map

const myMap = new Map();

const arrayOne = [8423843248249];
const setOne = { name: "Mr." };
// declare any type in map
myMap.set("name", "alireza");
myMap.set(true, "premmision");
myMap.set(7567327482, "number");
myMap.set(arrayOne, "array");
myMap.set(setOne, "object");
myMap.set(new Set(), "set");

console.log(myMap);

// get
console.log(myMap.get("name"));
console.log(myMap.get(true));
console.log(myMap.get(7567327482));
console.log(myMap.get(arrayOne));
console.log(myMap.get({ name: "Mr." }));

const myObj = {
  setOne: "hello",
};

console.log(myObj);
console.log(myMap);



const myMap = new Map();

myMap.set("name", "alireza");
myMap.set(true, "premmision");
myMap.set(7567327482, "number");
myMap.set(new Set(), "set");

// has
console.log(myMap.has(true)); // true
console.log(myMap.has(false)); // false

console.log(myMap);

// delete
myMap.delete(7567327482);

console.log(myMap);

// size
console.log(myMap.size);

// clear
myMap.clear();
console.log(myMap);


const myMap = new Map([
  ["name", "alireza"],
  [85, "mohsen"],
  [true, "hey That is true"],
]);

console.log(myMap);
console.log(myMap.get("name"));
console.log(myMap.get(85));
console.log(myMap.get(true));


// console.log(Object.keys(truthyTool));

const myObj = {
  name: "alireza",
  lastName: "fazeli",
};

const myMap = new Map(Object.entries(myObj));
console.log(myMap);

for (let [key, value] of myMap) {
  console.log(key, "\n", value);
}


const myObj = {
  name: "alireza",
  lastName: "fazeli",
};

const myMap = new Map(Object.entries(myObj));
// console.log(myMap);

// convert map to arr
const myArr = [...myMap];

console.log(myArr);

const mySet = new Set();
mySet.add("hello");
console.log(mySet);

mySet.get("hello");

const myObj = {
  name: "alireza",
  lastName: "fazeli",
};

const myMap = new Map(Object.entries(myObj));

// myMap.values();
console.log(myMap.values());

const [[key], [value]] = myMap;
console.log(key, value);


const myObj = {
  name: "alireza",
  lastName: "fazeli",
};

const myMap = new Map(Object.entries(myObj));

const value = myMap.values();

const [alireza, fazeli] = value;

for (let [item] of value) {
  console.log("hey");
  console.log(item);
}
*/
