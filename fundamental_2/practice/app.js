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