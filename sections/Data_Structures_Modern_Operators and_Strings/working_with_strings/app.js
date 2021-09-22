"use strict";

/*
const mySentence = "alireza is my good person in the city";
const s = "11B";

console.log(s.slice(-1));

console.log(mySentence.indexOf("is"));
console.log(mySentence.indexOf("hey"));

const newSentence = mySentence.replaceAll("i", "l");

console.log(newSentence);


// NOTE startWith check word before first space
const mySentence = "alireza is my good person in the city";

console.log(mySentence.startsWith(" "));
console.log(mySentence.startsWith("a"));
console.log(mySentence.startsWith("alireza"));
console.log(mySentence.startsWith("alirez"));

const newSentence = " hello baby";
console.log(newSentence.startsWith(" "));


const mySentence = "Hey My Firends Im Alireza From You. FU";
const name = "Sophia";

console.log(mySentence[15]);

// SECTION string method
// STUB length
console.log(name.length);

// STUB indexOf
console.log(name.indexOf("S"));
console.log(name.indexOf("i"));
console.log(mySentence.indexOf("F"));

// STUB lastIndexOf
console.log(mySentence.lastIndexOf("F"));

// STUB indexOf --if string is existed--> show it index of string .. ---if string is not existed ---> show it -1
console.log(name.indexOf("p")); // index 2
console.log(name.indexOf("f")); // -1 


const mySentence = "Hey My Firends Im Alireza From You. FU";
const name = "Sophia";

// STUB slice method

console.log(mySentence.slice(10)); // if just put start value , show it start index and after

console.log(mySentence.slice(0, 3)); // --> hey

// const start = prompt("Tell ME Start Value");
// const finish = prompt("Tell ME finish Value");

// alert(mySentence.slice(start, finish));

// console.log(mySentence.slice(0, indexOf("y")));

// console.log(name.slice(1, name.indexOf("a")));

// const verbOne = prompt("Tell ME Start Value");
// const verbTwo = prompt("Tell ME finish Value");

// alert(name.slice(name.indexOf(verbOne), name.indexOf(verbTwo)));
// console.log(name.slice(name.indexOf(verbOne), name.indexOf(verbTwo)));
// console.log(verbOne, verbTwo);

// STUB back slice
console.log(mySentence.slice(-10)); // 10 ta miad aghab , az 10 ta aghab be 10 ta rasto neshoon mide

// STUB new String --> just for show how boxing work

const newString = new String("hello to world");

console.log(newString);
console.log(newString[13]);

const mySentence = "Hey My Firends Im Alireza From You. FU";
const name = "Sophia";

const allLowerCase = "hello world im sophia today i want say hello world.";
const allUpperCase = "HELLO GUYS HOW ARE YOU.";
let allSpace = "         i    love    you   guys   :))) ) ) ).         ";

// STUB toUpperCase
console.log(allLowerCase.toUpperCase());

// STUB toLowerCase
console.log(allUpperCase.toLowerCase());

// STUB trim
// allSpace = allSpace.trim();
console.log(allSpace);
console.log(allSpace.trim());

// console.log(" heloll lo l o".trim());

console.log(mySentence.slice(0, 10).toLowerCase().trim()); // biam posht ham tarif bokonam


let allLowerCase = "hello world im sophia today i want say hello world.";

// STUB replace
allLowerCase = allLowerCase.replace("hello", "hi");
console.log(allLowerCase);

console.log(allLowerCase.replace("hello", "hi"));

console.log(allLowerCase.replace("s", "a"));

// STUB replaceAll
console.log(allLowerCase.replaceAll("i", "hi"));

console.log("gghhkk".replaceAll("k", "l"));


// STUB use simple regex for replaceAll
console.log(allLowerCase.replace(/i/g, "h")); 

let allLowerCase = "hello world im sophia today i want say hello world.";

// STUB includes
console.log(allLowerCase.includes("im")); // true
console.log(allLowerCase.includes("mmd")); // false

// STUB startWith
// "hello im alireza fazeli"
const myInfo = "hello im alireza fazeli";

// console.log(myInfo.startsWith("h")); // true
// console.log(myInfo.startsWith("e")); // fasle
// console.log(myInfo.startsWith("l")); // fasle
// console.log(myInfo.startsWith("l")); // fasle
// console.log(myInfo.startsWith("o")); // fasle

// console.log(myInfo.startsWith("hello")); //true

// STUB endWith
console.log(myInfo.endsWith("fazeli")); // true
console.log(myInfo.endsWith("alireza")); // false
console.log(myInfo.endsWith("f")); // false
console.log(myInfo.endsWith("a")); // false
console.log(myInfo.endsWith("z")); // false
console.log(myInfo.endsWith("e")); // false
console.log(myInfo.endsWith("l")); // false
console.log(myInfo.endsWith("i")); // i


// ANCHOR hide card number project
const hideCardNumber = function (numbers) {
  return numbers.slice(-4).padStart(numbers.length, "*");
};

console.log(hideCardNumber("12345678"));

const mySentence = "salam(haj(mamd(khobi(?";

const myArray = mySentence.split("(");
console.log(myArray.join(" "));

const name = "alireza";

console.log(name[0], name[1]);

// length
console.log(name.length);

// indexOf
console.log(name.indexOf("e")); // in be avalie bar bokhore miad ono be ma neshoon mide indexesho

console.log(name.indexOf("a"));

// last indexOf
console.log(name.lastIndexOf("a"));

// -1 in indexOf
console.log(name.indexOf("g")); // -1


const upper = "GUYS";
const word = "hello";
let sentence = "Hey my friend im alireza";
const spaceSentence = "      hey   you       ";

// console.log(sentence.slice(0, 3));
// console.log(sentence.slice(-4));

// console.log(typeof new String("hello"));

// console.log(upper.toLowerCase());
// console.log(word.toUpperCase());

// trim
// console.log(spaceSentence.trim());

// replace

sentence = sentence.replace("Hey", "--changed--");

// replace all

console.log(sentence.replaceAll("i", "🤞"));

console.log(sentence);


const upper = "GUYS";
const word = "hello";
let sentence = "Hey my friend im alireza";
const spaceSentence = "      hey   you       ";

sentence = sentence.replace(/i/g, "🚶");

console.log(sentence);

console.log(sentence.includes("i")); // false
console.log(sentence.includes("🚶")); // true


// "|start- -| "
let sentence = "Hey my friend im alireza";

console.log(sentence.startsWith("my")); //false
console.log(sentence.startsWith("Hey")); // true

// "|- -end|"

console.log(sentence.endsWith("alireza")); // true
console.log(sentence.endsWith("im")); // false


// split

let sentence = "Hey my friend im alireza";
let plusSentence = "Hey+my+friend+im+alireza";

console.log(sentence.split(" "));

console.log(plusSentence.split("+"));

// for (let word of sentence.split(" ")) {
//   console.log(word);
// }

// join

plusSentence = plusSentence.split("+");

console.log(plusSentence.join(" "));

const names = ["alireza", "korosh", "ghasem", "sohrab"];

console.log(names.join("-"));


const word = "hello";

console.log(word.padStart(10, "+"));
console.log(word.padEnd(10, "+").padStart(20, "-"));

console.log(word.repeat(5).padStart(7, "_"));
*/
