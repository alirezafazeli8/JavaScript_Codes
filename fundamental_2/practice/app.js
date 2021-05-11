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


console.log(myFriends.includes("salar")); // true
console.log(myFriends.includes("kkhh")); // true
*/

/*
const userInfo = {
    userName: "king Ali",
    firstName: "ali",
    lastName: "fazeli",
    age: 16,
    job: "Developer"
};

console.log(userInfo);

const completeUserInfo = `
    hello ${userInfo.userName} welcome to database.
    your name is : ${userInfo.firstName} and your lastName is ${userInfo.lastName} . i know you are a ${userInfo.job} . and i know it your age is ${userInfo.age} years old.
`;

console.log(completeUserInfo);
// console.log(userInfo."teach" + "er"); // we cant do this
// but ...
console.log(userInfo['first'+ 'Name']); // first + Name : userInfo.firstName


const sayEveryName = {
    // declare method
    sayHello : function () {
        return "hello EveryOne";
    },
    sayMyName: function (name) {
       console.log(`Hello Mr ${name}`); 
    }
};

// call method
sayEveryName.sayMyName("alireza"); 


// ---------------------
// calc object method
const calc = {
    calcPlus: function (numberOne, numberTwo) {
        return console.log(numberOne + numberTwo);
    },
    calcMinus: function (numberOne, numberTwo) {
        return console.log(numberOne - numberTwo);
    },
    calcZarb: function (numberOne, numberTwo) {
        return console.log(numberOne * numberTwo);
    },
    calcTaghsim: function (numberOne, numberTwo) {
        return console.log(numberOne / numberTwo);
    },
};

calc.calcPlus(2, 2);
calc.calcMinus(2, 2);
calc.calcZarb(2, 2);
calc.calcTaghsim(2, 2);

// This Method 

const myInformation = {
    userName: "alireza Developer",
    firstName: "alireza",
    lastName: "fazeli",
    
    fullName: function () {
        return `UserName = ${ this.userName}, FirstName = ${this.firstName}, LastName = ${this.lastName}`
    },
};

console.log(myInformation.fullName());


// console.log("number 1");
// console.log("number 2");
// console.log("number 3");
// console.log("number 4");
// console.log("number 5");
// console.log("number 6");
// ...............

for (let x = 1; x <= 10; x++) {
    console.log(`number ${x}`);
    if (x == 5) {
        console.log("Finished");
        break;
    }
}


for (let x = 0; x <= friends.length; x++) {
    if (friends[x] === "hasan") {continue;}
    console.log(friends[x]);
}






for (let x = 1; x <= 5; x++) {
    console.log(`__________Set ${x}___________`);
    for (let x = 1; x <= 10; x++) {
        console.log(`come ${x} `);
    }
}

for (let x = 4; x >= 1; x--) {
    console.log(x);
}


let password = prompt("enter password");

while (true) {
    if (password != "1234") {
        alert("pleas enter correct password");
        password = prompt("enter password");
    } else {
        console.log("Welcome To Pannel");
        break;
    }
}

*/