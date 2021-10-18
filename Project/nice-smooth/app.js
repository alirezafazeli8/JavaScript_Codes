"use strict";

const mainContainer = document.getElementById("main");
const mainButton = document.getElementById("smooth-button");
const mainHeight = mainContainer.getBoundingClientRect().height;

// console.log(mainHeight)
//
// console.log(window.pageYOffset)
//
//
// // console.log(mainHeight.clientHeight
// console.log(document.documentElement.clientHeight)
// console.log(document.documentElement.clientWidth)
//
// console.log(mainContainer.clientHeight)

const smoothFunc = function () {
  window.scrollTo({
    top: mainContainer.clientHeight,
    behavior: "smooth",
  });
  // mainButton.removeEventListener("click", smoothFunc);
};

// document.body.addEventListener("click", ()=> {

// }), {
//   capture: true,
// });

// const allEl = document.querySelectorAll("#main, #h1-smoo, .button-container");

// for (let el of allEl) {
//   el.addEventListener(
//     "click",
//     function () {
//       console.log(this.tagName);
//     },
//     true
//   );
// }
document.body.addEventListener("click", function (e) {
  console.log(e.currentTarget);
});
mainButton.addEventListener("mouseover", function (e) {
  console.log(e.currentTarget);
});
