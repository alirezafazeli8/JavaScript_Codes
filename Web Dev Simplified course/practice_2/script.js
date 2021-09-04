"use strict";

// const htmlBody = document.querySelector("body");

// htmlBody.addEventListener("keyup", function (e) {
//   if (e.key == "Escape") {
//     console.log("hey ESC");
//   }
// });

// document.querySelector("img").src =
//   "https://tpc.googlesyndication.com/simgad/9730324215018905818?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qm5I2RVfLFicC2qeu0K_uWabCvL4A";

// document.querySelector("img").src.link();

// const h1 = document.querySelector("h1").scr?.link ?? "hello";
// console.log(h1);

// const myNames = ["alireza", "fazeli", "mohseni"];

// // const [alirza, fazeli, mohsen] = myNames;

// // console.log(alirza, fazeli, mohsen);

// // const [alireza, , mohseni] = myNames;

// // console.log(alireza, mohseni);

// let [alireza, fazeli, , kaj = "anonymous"] = myNames;

// // console.log(alireza, fazeli);

// // [alireza, fazeli] = [fazeli, alireza];

// // console.log(alireza, fazeli);

// console.log(kaj);

// const address = ["mazandaran", ["neka", ["janbazan"]]];

// const [, [, [mainAddress]]] = address;

// console.log(mainAddress);

// const person = {
//   name: "alireza",
//   lastName: "fazeli",
//   address: {
//     aly: "janbazan",
//   },
// };

// const { name } = person;

// console.log(name);

// const {
//   name: alireza,
//   lastName: fazeli,
//   address = "undefined address",
// } = person;

// console.log(alireza, fazeli);

// console.log(address);

// const {
//   address: { aly },
// } = person;

// console.log(aly);

// const myNames = ["alireza", "fazeli", "mohseni"];

// console.log(...myNames);
// const nameCopy = [...myNames];
// console.log(nameCopy);

// const person = {
//   name: "alireza",
//   lastName: "fazeli",
//   address: {
//     aly: "janbazan",
//   },
// };

// const [alireza, ...order] = myNames;

// console.log(alireza);
// console.log(order);

// const { name, ...objOrder } = person;

// console.log(name, objOrder);

// function numbers(...myNumbers) {
//   console.log(myNumbers);
// }

// numbers(1, 2, 34, 54, 6);

// const myUn = null;

// console.log(myUn ?? "oho");

// for (let [key, value] of Object.entries(myNames)) {
//   console.log(key, value);
// }

// console.log(person.las2?.ll ?? "i cant find it");

// // for (let key of Object.keys(person)) {
// //   console.log(key);
// // }
// // for (let value of Object.values(person)) {
// //   console.log(value);
// // }

// for (let [key, value] of Object.entries(person)) {
//   console.log(`
//         key : ${key} | value ${value}
//     `);
// }

const sentence = "hello im alireza and today i wanna say hello guys";
const word = "helloeee";
const spaceWord = "      dasda            ";
// // console.log(word.length);
// // console.log(word.indexOf("e"));
// for (let char of word) {
//   if (char == "e") {
//     // word.indexOf(char);
//     // console.log(word.indexOf("e"));
//     // console.log(char.indexOf("e"));
//     console.log(word.indexOf("e"));
//   } else {
//     word.replace(word.indexOf("e"), "
//     ");
//   }
// }

// console.log(word.lastIndexOf("e"));

// // console.log(sentence.slice(10, 12));
// console.log(sentence.slice(-5));

// console.log(new String("hell"));

// console.log(word.toUpperCase());
// console.log(word.toLowerCase());

// console.log(spaceWord.trim());

// console.log(sentence.replace("hello", "doogh"));

// console.log(sentence.includes("ll"));
// console.log(sentence.startsWith("hello"));
// console.log(sentence.startsWith("fuck"));
// console.log(sentence.split(" "));

// const myNames = ["alireza", "fazeli", "mohseni"];

// console.log(myNames.join("___"));
// console.log(word.padStart(10, "=="));

// console.log(word.repeat(50));

// const friendNames = ["sara", "alireza", "ghasem", "mohsen", "akbar"];

// console.log(friendNames.slice(2, 4));
// console.log(friendNames);

// console.log(friendNames.splice(0, 2)); // this can remove the value from the array
// console.log(friendNames);

// console.log(friendNames.reverse());

// console.log(friendNames.concat("[", "hey", "guys"));

// const arr1 = ["ali"];
// const arr2 = ["name :", ...arr1];
// console.log(arr2);

// console.log(friendNames.join(" "));

// console.log(Math.abs(-34));

// friendNames.forEach(function (value, index, array) {
//   console.log(`
//         ${index + 1} ${value}
//         arr : ${array}
//     `);
// });

const container = document.querySelector(".container");

// // const htmlCode = `
// //     <div>
// //         <p>Hello Guys Im P</p>
// //     </div>
// // `;

// // container.insertAdjacentHTML("afterbegin", htmlCode);

// // container.innerHTML = "<h1>hey you </h1>";
// // container.innerText = "<h1>hey you </h1>";

// const friendNames = ["alireza", "ghasem", "mohsen", "akbar"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNumber = numbers.map((value) => {
//   return value * 2;
// });

// console.log(newNumber);

// const filterName = friendNames.filter((value) => {
//   return value == "ll";
// });

// console.log(filterName);

// const reduceNumber = numbers.reduce((c, l) => {
//   return c + l;
// });

// console.log(reduceNumber);

// console.log(
//   friendNames.find(function (value) {
//     return value == "sara";
//   })
// );

// const nameInput = document.querySelector("#name");

// nameInput.addEventListener("onblur", () => console.log("hello"));

// nameInput.blur();

// nameInput.addEventListener("click", () => {
//   document.querySelector("#text").blur();
// });

// console.log(window);

// // window.console.log("hello");
// // window.alert("hello guys");

// console.log(document.documentElement);

// const htmlCode = `
//     ${String(document.documentElement)}
// `;

// const container = document.querySelector(".container");

// // // console.log(document.documentElement);

// const myElement = document.createElement("p");
// myElement.innerText = "hello guys";

// container.appendChild(myElement);

let texts = document.getElementById("text");

// // for (let item of texts) {
// //   item.style.color = "red";
// // }

// texts = Array.from(texts);

// texts.forEach((element) => {
//   element.style.color = "red";
// });

const h1 = document.querySelector("h1");
// h1.dataset.password = "kjk";

// if (h1.dataset.password == "ali") {
//   console.log("correct");
// } else {
//   console.log("wrong");
// }

// h1.addEventListener("");

const eventResize = (e) => {
  e.target.value = "kkk";
};

h1.addEventListener("click", eventResize);

// window.removeEventListener("resize", eventResize);

// const sub

// console.log(name);

document.querySelector("#submit").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hello");
});

// console.log(container.children);

// for (let item of container.children) {
//   item.style.color = "green";
// }
// console.log((h1.nextElementSibling.style.backgroundColor = "blue"));
console.log(texts.parentElement);

document.querySelector("#imC").closest(".texts").style.color = "red";

// console.log((texts.nodeValue = ));
texts.nodeValue = "hello";

console.log(texts.nodeValue);

console.log(document.getElementById("name").nodeValue);

h1.remove();
