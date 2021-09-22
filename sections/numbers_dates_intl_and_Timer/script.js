"use strict";

// const nString = "3=-=-=-=-";
// const fString = "3.09adasd";
// const correctNumber = 3;
// const numIsNan = 3 * "312sdf";
// const inCorrectFloat = 3.4 * "432324nbm,sd";
// const infinityValue = 10 / 0;

// console.log(Number.isInteger(correctNumber));
// console.log(Number.isInteger(nString));

// console.log(nString);
// console.log(+nString);

// parsing
// console.log(Number(nString));
// console.log(parseInt(nString));
// console.log(parseFloat(fString));

// // console.log(numIsNan);
// console.log(isNaN(numIsNan)); // true
// console.log(isNaN(correctNumber)); // false

// console.log(parseFloat(inCorrectFloat));

// console.log(inCorrectFloat);
// console.log(10 / 0); // infinity

// console.log(isFinite(infinityValue));
// console.log(isFinite);

// console.log(Math.sqrt(30));

// const arrNum = [1, 3, 4, 56, 2, 2, 8];

// console.log(Math.max(...arrNum));
// console.log(Math.min(-3, 4, 1, -88));

// console.log(Math.PI);

// console.log(Math.trunc(Math.random() * (10 - 1 + 1) + 1));

// console.log(Math.round(3.31));
// console.log(Math.ceil(3.01));
// // console.log(Math.decimal());
// console.log(Math.floor(5.99));

// console.log((4.66).toFixed(1));

// console.log(13 % 3);

// const number = 42;
// const bigInt = 6327462648927438247208947023478n;
// const bigIntFunction = BigInt(4242342423423434234);

// // console.log(typeof bigInt);
// // console.log(BigInt(number) + bigInt);
// // console.log(bigIntFunction);

// // console.log(bigInt - number);
// // console.log(bigInt / number);
// // console.log(bigInt * number);

// const dates = new Date("2023 Aug 3 15:04:50");

// console.log(dates);

// // date zero
// console.log(new Date(0));

// // get full year
// console.log(dates.getFullYear()); // 2023

// // get date => month day
// console.log(dates.getDate());

// // get day  => week day
// console.log(dates.getDay());

// // get hours
// console.log(dates.getHours());

// // get minutes
// console.log(dates.getMinutes());

// // get seconds
// console.log(dates.getSeconds());

// // to iso
// console.log(dates.toISOString());

// // get Time
// console.log(dates.getTime());
// console.log(new Date(1691058890000));

// console.log(Date.now());
// const date = new Date("1970,8,12, 8:40:1");
// const myLang = navigator.language.vendor;

// console.log(navigator.vendor.split(" ")[0]);
// // console.log(date);

// const formatOPtion = {
//   year: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "numeric",
//   month: "short",
//   day: "numeric",
//   weekday: "short",
//   //   day: "",
// };

// console.log(new Intl.DateTimeFormat("en", formatOPtion).format(date));

// console.log(navigator.language);

// const number = 21343545.154;
// const numberOption = {
//   style: "percent",
//   currency: "EUR",
//   unit: "celsius",
//   useGrouping: false,
// };
// const formatNumber = new Intl.NumberFormat("fa-ir", numberOption).format(
//   number
// );
// console.log(formatNumber);

// const myTimeout = setTimeout(
//   function (arg1, arg2) {
//     console.log(arg1, arg2);
//   },
//   500,
//   "hello",
//   "guys"
// );

// clearTimeout(myTimeout);

// // console.log("Here 🈁");

// // setTimeout(() => console.log("im after 3 seconds"), 2001);

// const myInterval = setInterval(function () {
//   console.log(new Date().getSeconds());
// }, 1000);

// clearInterval(myInterval)
// function clockConsole(symbol = ":") {
//   setInterval(function () {
//     console.log(`
//      ${new Date().getHours()}${symbol}${new Date().getMinutes()}${symbol}${new Date().getSeconds()}
//    `);
//   }, 1000);
// }

// const htmlCount = document.getElementById("show-countDown");

// function countDown(minuteFunc, secondsFunc, htmlCount, symbol = ":") {
//   // variable condition
//   let start = true;
//   let minute = minuteFunc;
//   let seconds = secondsFunc / 100;
//   // setInterval for start time
//   setInterval(function () {
//     htmlCount.textContent = `${Math.trunc(minute)}${symbol}${Math.trunc(
//       (seconds -= 1)
//     )}`;
//   }, 1000);
// }

// countDown(1, 6000, htmlCount);

// // setTimeOut after a which time
// setTimeout(function () {
//   // convert start to false to stop condition
//   start = false;
//   if (!start) {
//     // html to nothing
//     htmlCount.textContent = " ";
//   }
// }, time++);

// function startTimer(duration, display) {
//   var timer = duration,
//     minutes,
//     seconds;
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = minutes + ":" + seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// }

// window.onload = function () {
//   var fiveMinutes = 60 * 1,
//     display = document.getElementById("show-countDown");
//   startTimer(fiveMinutes, display);
// };
