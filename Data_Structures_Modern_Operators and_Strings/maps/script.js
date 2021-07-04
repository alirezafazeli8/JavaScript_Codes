"use strict";

// SECTION Map
/*
const friends = ["jeff", "eff", "key", "elf"];

const myMap = new Map();
myMap.set("name", "alireza").set("fmily", "fazeli").set("age", 16);

console.log(myMap.get("name"));
console.log(myMap);


// PRACTICE

const question = new Map([
    ["question", "whats my name? 📛📛"],
    ["answers", [
        [1, "alireza"],
        [2, "sara"],
        [3, "mohesn"],
        [4, "reza"],
    ]],
    ["correct", 1],
    [true, "Oh thast right 🎉🎉"],
    [false, "you die 💀💀"]
]);

alert(question.get("question"));
alert(question.get("answers"));
const answer = Number(prompt("pleas answer the question 💖"));

if (answer === question.get("correct")) {
    alert(question.get(true));
} else {
    alert(question.get(false));
}




const myMap = new Map();

// solution #1 for set property value in map
myMap.set("name", "alireza");
myMap.set("lastName", "fazeli").set("age", 16).set("address", "----------").set("country", "iran");


// solution #2 for set property value in map
const myMapTwo = new Map([
    ["name", "alireza"],
    ["lastName", "fazeli"],
    ["age", 16],
    ["country", "iran"]
]);
console.log(myMapTwo);
console.log(myMap);

// get method
console.log(myMap.get("lastName"));
console.log(myMap.get("name"));
console.log(myMap.get("age"));

// has method
console.log(myMapTwo.has("name")); // true
console.log(myMapTwo.has("address")); // false

// delete method
myMapTwo.delete("age");
console.log(myMapTwo);

// size
console.log(myMapTwo.size);

// clear
myMapTwo.clear();
console.log(myMapTwo);



// STUB convert object to map

const myObj = {
    name: "alireza",
    lastName: "Fazeli",
};

// console.log(myObj);
//
//
// const myMap = new Map(Object.entries(myObj));
//
//
//
// console.log(myMap);


console.log(Object.entries(myObj));
const myMap = new Map(Object.entries(myObj));


const arrayOne = [1, 2];
myMap.set(arrayOne, "arrayOne").set(myObj, myObj);


console.log(myMap);
console.log(myMap.get(arrayOne)); // undefined



// convert map to array
const myMap = new Map([
    ["name", "alireza"],
    ["age", 16],
]);


console.log([...myMap]);



const myMap = new Map([
    ["name", "alireza"],
    ["lastName", "fazeli"],
    ["age", 16],
    ["country", "iran"]
]);

for (let item of myMap) {
    console.log(item);
}

for (let [key, value] of myMap) {
    console.log(key);
    console.log(value);
}

const [[key, value]] = myMap;

console.log(key, value);

*/
