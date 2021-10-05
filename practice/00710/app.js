"use strict";

// const btn = document.querySelector("button");

// document.body.addEventListener("keypress", function () {
//   console.log("Hello Guys");
// });

// // console.log(Math.trunc(5555454.45454545));

// btn.style.backgroundColor = "red";

// // console.log(this);

// const human = {
//   name: "alireza",
//   sayThis: function () {
//     console.log(this.name);
//   },
// };

// human.sayThis();

// const nothing = {
//   car: "benz",
// };

// // nothing.sayThis();

// let human2 = {
//   name: "ghasem",
// };

// human2 = Object.assign(human);

// console.log(human2);

// const human = {
//   humanNames: ["alireza", "fazeli", "ghasem"],
//   address: {
//     addressOne: {
//       ally: "one",
//     },
//   },
//   showName() {
//     const [alireza] = this.humanNames;
//     console.log(alireza);
//   },
// };

// const names = ["alireza", "fazeli", "ghasem", "sara"];

// // const alireza = names[0]
// const [alireza, , ghasem, sara = "userNotFound"] = names;

// console.log(alireza, ghasem, sara);

// human.showName();

// const familys = ["ebi", ["alireza", ["mehrad"]]];

// const [, [, [mehrad]]] = familys;

// console.log(mehrad);

// const { humanNames: newHuman, names = "userNotFound" } = human;

// console.log(newHuman);
// console.log(names);

// const {
//   address: {
//     addressOne: { ally },
//   },
// } = human;

// console.log(ally);

// const names = ["alireza", "fazeli", "ghasem", "sara"];

// const familys = ["ebi", ["alireza", ["mehrad"]]];

// const copyName = [...names];
// // const [ebi, ...order] = familys;

// // console.log(ebi, order);

// console.log(...names);

// function allNames(...names) {
//   console.log(...names);
// }

// allNames("ali", "dsa", "dasd", "ads", ";dsa");

// console.log("true" || 0);
// console.log(0 || "true");
// console.log(0 || undefined);
// console.log("2" || 1);

// console.log("------------");

// console.log("true" && 0);
// console.log(0 && "true");
// console.log(0 && undefined);
// console.log("2" || 1);

// const und = undefined;
// const nu = null;

// console.log(und ?? "--new error undefined--");
// console.log(nu ?? "--new error null--");

const human = {
  humanNames: ["alireza", "fazeli", "ghasem"],
  address: {
    addressOne: {
      ally: "one",
    },
  },
  showName() {
    const [alireza] = this.humanNames;
    console.log(alireza);
  },
};

// console.log(Object.entries(human));

// console.log(human.name?.nmae2 ?? "hahahah bitch");

// for (let [key, value] of Object.entries(human)) {
//   console.log(value);
// }
// const humanNames = ["alireza", "fazeli", "ghasem", "ghasem", "alireza"];

// const newSet = new Set(["alireza", "ghasem", "alireza"]);

// newSet.add("lora");
// newSet.delete("lora");
// newSet.clear();
// console.log(newSet);

// console.log(newSet.size);
// console.log(newSet.has("sara"));

// const newMap = new Map();

// newMap.set(true, "You Have Access");
// newMap.set("name", "alireza");

// // const Access = true;
// // if (Access) {
// //   console.log(newMap.get(true));
// // }

// // console.log(newMap);
// // console.log(newMap.get("name"));

// // const myKpObject = { name: "kp" };
// // newMap.set(myKpObject, "kp");

// console.log(newMap.has("lastName"));
// console.log(newMap.delete("name"));
// console.log(newMap.size);
// newMap.clear();
// console.log(newMap);

// const myMap = new Map(
//   Object.entries({
//     name: "alireza",
//     lastName: "fazeli",
//   })
// );

// console.log(myMap);

// for (let item of myMap) {
//   console.log(item[0]);
// }

// const myMap = new Map();

// myMap.set("name", "alireza");
// myMap.set(":user", "alireza");
// myMap.set("fafsaname", "alireza");

// console.log(myMap);

// console.log(myMap.values());

const word = "hoello";
const sentence =
  "hello im alireza and today i wanna show you something you know";

// console.log(sentence.length);
// console.log(word.length);

// console.log(word.indexOf("o"));
// console.log(word.lastIndexOf("o"));

// console.log(sentence.slice(0, -5));
// console.log(new String("hello"));

// console.log("Hello".toLowerCase());
// console.log(word.toUpperCase());

// console.log("   hhh      ".trim());

// console.log(sentence.replace("Mohseni"));

// console.log(sentence[(0, 1)]);

// console.log(sentence.replaceAll("a", "🐤"));
// console.log(sentence.includes("hello"));
// console.log(sentence.startsWith("hello"));
// console.log(sentence.endsWith("know"));
// const newJoinString = sentence.split(" ");

// console.log(newJoinString.join("{}"));
// console.log(sentence.padEnd(sentence.length + 4, "+"));

// console.log(sentence.repeat(20));

// function complete(first, last) {
//   console.log(`
//     your first name is ${first}.
//     your last name is ${last}.
//   `);
// }

// function complete2(first, last) {
//   console.log(`
//     bitch ${first}.
//     fucking ${last}.
//   `);
// }

// function sayYourName(firstName = "not found", lastName = "not found", func) {
//   func(firstName, lastName);
// }

// sayYourName("alireza", "fazeli", complete);
// sayYourName("alireza", "fazeli", complete2);

// const friendName = function (name) {
//   return function (greet) {
//     return `${greet} to you ${name} 🧨🎆🎇`;
//   };
// };

// // const func1 = friendName("alireza");
// // console.log(func1("hey"));

// console.log(friendName("alireza")("hello"));

// const human1 = {
//   name: "alireza",
//   sayName(name) {
//     console.log(this.name, name);
//   },
// };

// const human2 = {
//   name: "human",
// };

// const sayFunc = human1.sayName;

// const humanFunc = human1.sayName;

// // humanFunc.call(human2, "alireza");
// // humanFunc.apply(human2, ["alireza"]);
// const newFuncBind = human1.sayName.bind(human2, "alireza");

// // newFuncBind();
// // newFuncBind();
// // newFuncBind();
// // newFuncBind();
// // newFuncBind();

// // human2.sayName();

// (function (name) {
//   console.log(name);
// })("alireza");

// const nanVar = 0;

// console.log(isNaN(nanVar));

const names = ["hello", "guys", "why", "when", "hye"];
const numbers = [4, 2, 6, 54, 2, 8];
// console.log(names.slice(1, 3));
// names.splice(3, 2);
// console.log(names);

// console.log(
//   numbers.sort((a, b) => {
//     a - b;
//   })
// );

// names.reverse();
// console.log(names.concat(numbers));
// console.log(names.join("👋"));
// console.log(names);
// console.log(Math.abs(-4));

// const arrayEdit = names.map(function (value, index) {
//   return value + "🥓";
// });

// const arrayEdit = names.filter(function (value, index) {
//   return value[0] == "w";
// });
// const arrayEdit = numbers.reduce(function (f, l) {
//   return f + l;
// });
// const arrayEdit = names.find(function (value) {
//   return value == "dasd";
// });

// console.log(arrayEdit);

// const fIndexArr = names.findIndex(function (value) {
//   return value == "when";
// });

// console.log(fIndexArr);

// const arrayEdit = numbers.every(function (value) {
//   return value == 2;
// });
// console.log(arrayEdit);

// let nestedArr = [[1], [[[3]]]];

// console.log(nestedArr.flat(5));

// nestedArr = nestedArr.flat(3).flatMap(function (v) {
//   return v * 2;
// });

// console.log(nestedArr);

// const fuckingArr = new Array(3);

// fuckingArr.fill("2");

// console.log(fuckingArr);

// console.log(+"1" + 1);

const sNumber = "43dasdasdasd";
const sNumber2 = "daasdasdsa432432432443";
const sFloat = "43.4454dasdasdasd";
const sFloat2 = "daasdasdsa432432432443.1548645";
const realNumber = 15645;

// console.log(parseInt(sNumber));
// console.log(parseInt(sNumber2)); // NaN
// console.log(parseFloat(sFloat));
// console.log(parseFloat(sFloat2));

// console.log(Number.isInteger(realNumber));
// console.log(Number.isInteger(sNumber));

// console.log(Math.sqrt(10));

// const arrNumber = [1, 2, 5, 9, 2, 4, 5];

// console.log(Math.max(15, 2, 81, 4, 94, 4));
// console.log(Math.min(15, 2, 81, 4, 94, 4));
// const PI = Math.PI;

// console.log(PI);
// console.log(Math.trunc(Math.random() * (6 + 1 - 2) + 2));

// console.log(Math.round(56.4));
// console.log(Math.ceil(56.1));
// console.log(Math.floor(56.9));
// console.log((4.656564454545).toFixed(5));
// console.log(57 % 2);

// console.log(
//   typeof 54653435454544444444444444444444444444444444444444444444444444444444444444444444444444n
// );

// const bI = BigInt(455555555555555555555555555555555555555555555555555555555555);

// console.log(bI);

// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());

// console.log(myDate.toISOString());

// console.log(myDate.getTime());
// console.log(new Date(1633416776724));

// console.log(Date.now() / (1000 * 60 * 60 * 24) / 365);

// console.log(myDate.getTime());

// if (cToDay > 0) {
// } else {
//   console.log("today");
// }

// console.log(cToDay);

// // your passed date.
// const myDate = new Date("2021 oct 1");

// // now date
// const nowDate = new Date();

// //  get correct millisecond passes
// const cToDay = myDate.getTime() - Date.now();

// // clean the number
// const clearNumber = Math.abs(Math.trunc(cToDay / (1000 * 60 * 60 * 24)));

// console.log(clearNumber); // output => 4

// const nowDate = new Date();

// const myIntl = new Intl.DateTimeFormat("ira", {
//   year: "numeric",
//   month: "numeric",
//   day: "2-digit",
//   weekday: "long",
// }).format(nowDate);

// console.log(myIntl);

// const numFormat = new Intl.NumberFormat("fa-ir", {
//   style: "unit",
//   unit: "inch",
// }).format(54545);

// console.log(numFormat);

// const myTimeOut = setTimeout(
//   function (num) {
//     console.log(num);
//   },
//   1000,
//   "hello"
// );

// clearTimeout(myTimeOut);
const container = document.querySelector(".container");
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.getElementsByTagName("head"));
// console.log(document.body.parentElement);

const pEl = document.createElement("p");
pEl.innerHTML = "<span>Hello</span>";
container.append(pEl);

console.log(pEl);
const copyClone = pEl.cloneNode();
copyClone.innerText = "hello";
console.log(copyClone);

// pEl.remove();

// container.removeChild("");

// console.log(getComputedStyle(pEl));

container.setAttribute("data-password", "1234");
// pEl.setAttribute("data", "user-name");

// console.log(pEl.setAttributeNod));

console.log(container.dataset);
