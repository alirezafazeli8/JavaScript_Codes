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

const fuckingArr = new Array(3);

fuckingArr.fill("2");

console.log(fuckingArr);
