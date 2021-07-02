"use strict";

// SECTION Map
/*
const friends = ["jeff", "eff", "key", "elf"];

const myMap = new Map();
myMap.set("name", "alireza").set("fmily", "fazeli").set("age", 16);

console.log(myMap.get("name"));
console.log(myMap);
*/

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