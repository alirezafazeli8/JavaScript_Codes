"use strict";

const button = document.getElementById("btn");

function addEventListenerPromise(element, method) {
  return new Promise(function (resolve, reject) {
    element.addEventListener(method, (e) => {
      resolve();
    });
  });
}

// addEventListenerPromise(button, "click").then(() => {
//   button.addEventListener(method, function () {
//     console.log("hello world");
//   });
// });

addEventListenerPromise(button, "click").then(() => {
  console.log("hello world");
});
