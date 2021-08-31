"use strict";
/*
test data

underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure



// style
document.querySelector("body").style.backgroundColor = "rgb(31,34,35)";
document.querySelector("body").style.color = "white";

// input code
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const textarea = document.querySelector("textarea");

document.querySelector("button").addEventListener("click", function () {
  const newTextArea = textarea.value.toLowerCase().split("_");
  // console.log("1- ", newTextArea.unshift().toUpperCase());
  // console.log("2-", newTextArea);
  // console.log("3-", newTextArea.shift().slice(0));
  // const firstWord =
  //   newTextArea[0].toLowerCase() +
  //   newTextArea.unshift().toUpperCase() +
  //   newTextArea.shift().slice(0);
  // console.log(firstWord);
  // console.log(newTextArea.pop());
  const firstValue = newTextArea[0];
  let otherValues = newTextArea.pop();
  for (let item of otherValues) {
    const nameUpper = otherValues.replace(item[0], item[0].toUpperCase());
    otherValues = nameUpper;
    break;
  }
  console.log(firstValue + otherValues);
});
*/

/*

underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure

*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const textarea = document.querySelector("textarea");

document.querySelector("button").addEventListener("click", function () {
  const editedTextArea = textarea.value.toLowerCase().split("\n");
  for (let word of editedTextArea) {
    const firstWord = word.slice(0, word.indexOf("_"));
    const lastWord = word.slice(word.indexOf("_") + 1);
    const complete = firstWord + lastWord[0].toUpperCase() + lastWord.slice(1);
    console.log(complete.trim());
  }
});
