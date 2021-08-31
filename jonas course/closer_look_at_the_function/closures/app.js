"use strict";

/*
let counter;

// without keyword its always global variable
name = "alireza";

function counterNum() {
  let counter = 0;

  return function () {
    counter++;
    console.log(counter, "is counted");
  };
}

// SECTION closures
const countForMe = counterNum();
// counterNum();

countForMe();
countForMe();
countForMe();
countForMe();
countForMe();
countForMe();

// function counterTwo() {
//   let counter = 0;
//   console.log(counter++, "counter Two");
// }

// counterTwo();
// counterTwo();
// counterTwo();
// counterTwo();
// counterTwo();

// console.dir(counterNum);

// const userInfo = {
//   userName: "alireza",
//   lastName: "fazeli",
// };

// console.dir(userInfo);


// let a = 2;

// function zarbOne() {
//   let b = 3;

//   function zarbTwo() {
//     return (a *= b);
//   }
// }

// console.log(a);

// zarbOne();
// console.log(a);

// zarbTwo();

let f;

function zarbOne() {
  let a = 2;

  f = function () {
    console.log(a * 2);
  };
}

// f(); // NOTE  re assign nashode va error mide
zarbOne(); // NOTE hatman in bayad seda zade beshe ke function f re-assign beshe.
f(); // NOTE re-assign shode
*/

// what you want book speed read?
function bookReader(second) {
  const convertSecond = second * 1000;

  setTimeout(function () {
    console.log(`
    Speed :${second} seconds

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `);
  }, convertSecond);

  console.log(`Your Book Speed Is ${second} Seconds`);
}

bookReader(4);
