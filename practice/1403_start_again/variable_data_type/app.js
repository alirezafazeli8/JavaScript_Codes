"use strict";

// ----- work with console

// console.group("All Things  :");
// console.log("Hello, world");

// console.error("You have error");

// console.warn("Becareful dear developer");

// const userData = {
// 	name: "alireza",
// 	lastName: "fazeli",
// 	gmail: "test@test.com",
// };

// console.table(userData);
// console.groupEnd();

// // console css style
// const consoleStyle = "background-color : yellow; color: red; padding: 20px";
// console.log("%cWelcome", consoleStyle);

//

// const a = 0,
// 	b = 0,
// 	c = 0;

// let d, e, f;

// let firstName = null;
// let userData = {};

// console.log(firstName);
// console.log(userData);
// // console.log(userName);

// console.log(typeof firstName);

// if (typeof firstName == "string") {
// 	console.log("This is string");
// } else {
// 	console.log("this is not string");
// }

// let und = undefined;

// console.log(typeof und);

// let iranSymbol = Symbol("iran flag");
// console.log(typeof iranSymbol);

// let name = "Jon";
// let newName = name;
// newName = "Johanatan";

// console.log(name);
// console.log(newName);

// let numOne = "100";
// let numTwo = "200.2";

// let sumOne = 100;
// let sumTwo = 100.22;

// parse int
// console.log(parseInt(numOne));
// console.log(parseInt(numTwo));

// unary operator
// console.log(+numOne);
// console.log(+numTwo);

// Number method
// console.log(Number(numOne));
// console.log(Number(numTwo));

// .toString() method
// console.log(sumOne.toString());
// console.log(sumTwo.toString());

// String() method
// console.log(String(sumOne));
// console.log(String(sumTwo));

// console.log(parseFloat(sumOne));

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 / 2);
// console.log(2 * 2);
// console.log(3 ** 2);
// console.log(3 % 2);
// console.log(3  2);

// const userId = 1234;
// let userName = "Alireza";

// let msg = "Hello mr " + userName + ". your id id : " + userId;

// console.log(msg);

// let x = 1;
// x++;
// x++;

// x--;
// x--;
// x--;
// x--;

// console.log(x);

// let x = 1;
// x += 2;
// x -= 1;
// x /= 2;
// x += 8;
// x %= 4;
// x **= 2;

// console.log(x);

// let x = "2";
// let y = "3";

// console.log(x === y);

// console.log(Number(null));

// let x = 5 + "5";
// let x = 5 * "5";

// console.log(x);

// let sentence = "             Hello World World From Iran.         ";

// console.log(sentence.length);
// sentence = sentence.toUpperCase();
// sentence = sentence.toUpperCase();

// console.log(sentence.charAt(4));
// console.log(sentence[4]);

// console.log(sentence.indexOf("World"));

// let name = new Number(4);

// console.log(name.valueOf());

// console.log(sentence.substring(-2));
// console.log(sentence[(0, 5)]);

// console.log(sentence.slice(-5));

// sentence = sentence.trim();

// sentence = sentence.replace("Hello", "Hi");

// // console.log(sentence.includes("World"));

// console.log(sentence.split(""));
// console.log(sentence.split(" "));

// sentence = sentence.concat("new alireza");
// console.log(sentence.endsWith("alirea"));
// console.log(sentence);

// console.log(sentence.charCodeAt(0));

// const myString = "developer";
// const myNewString = myString.replace(
// 	myString.charAt(myString[0]),
// 	myString.charAt(myString[0]).toUpperCase()
// );

// console.log(myNewString);

// let num = 555555.543;

// console.log(Number(num.toFixed(5)));
// console.log(num.toExponential(5));

// console.log(num.toPrecision(3));
// console.log(num.toLocaleString("bn-BD"));

// let x = [3, 1, 7, 20, 34, 4, 2];

// console.log(Math.min(...x));

// console.log(...x);
// console.log(Math.sqrt(88));
// console.log(Math.abs(-5));
// console.log(Math.round(5.9));
// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.1));

// Number Challenge
// let x = Math.floor(Math.random() * 100 + 1);
// let y = Math.floor(Math.random() * 50 + 1);

// let sumOutPut = x + y;
// let differenceOutPut = x - y;
// let productOutPut = x * y;
// let quotientOutPut = x / y;
// let remindOutput = x % y;

// console.log(`${x} + ${y} = ${sumOutPut}`);
// console.log(`${x} - ${y} = ${differenceOutPut}`);
// console.log(`${x} * ${y} = ${productOutPut}`);
// console.log(`${x} / ${y} = ${quotientOutPut}`);
// console.log(`${x} % ${y} = ${remindOutput}`);

// date and time
// let time = new Date(2004, 9, 12);
// let y = new Date(time.getTime());
// let x = new Date(Date(time.getTime()).now());

// console.log(y);
// console.log(x);

// let nowDate = new Date();

// console.log(nowDate.getMonth());
// console.log(nowDate.getFullYear());
// console.log(nowDate.getDate());
// console.log(nowDate.getDay());

// let dateTimeAPI = Intl.DateTimeFormat("fa", {
// 	month: "numeric",
// 	day: "2-digit",
// 	year: "2-digit",
// }).format(new Date());

// let localeString = new Date().toLocaleDateString("fa", {
// 	month: "short",
// });

// console.log(dateTimeAPI);
// console.log(localeString);
// const myName = "alireza";

// console.log(myName.charAt(5));

// const dateTimeAPI = Intl.DateTimeFormat("fa").format(new Date());

// console.log(dateTimeAPI);

let userNames = ["alireza", "sara", "sasan", "amir", "mohammad"];

userNames.push("Javad");
userNames.pop();
userNames.unshift("Javad");
userNames.shift();

userNames.reverse();

// console.log(userNames);
// console.log(userNames.includes("Javad"));
// console.log(userNames.includes("amir"));

// console.log(userNames[userNames.indexOf("sasan")]);

console.log(userNames.slice(2, 4));
