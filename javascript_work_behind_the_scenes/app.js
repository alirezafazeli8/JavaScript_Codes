"use strict";

/*
let age = 63; // 1
let city = "shiraz"; // 2

function setMyInfo() {
    return console.log(`on top of function, age=${age}, city=${city}, name=${name}`); // 1 2 - after call that can access the name variable
}

function userInfo() {
    let age = 15;// 3
    let city = "tehran";// 4

    console.log(`one first function , age = ${age}, city = ${city}`); // 3 4

    function showMeComplete() {
        let age = 20; // 5
        let city = "karaj" // 6
        return console.log(`one third function , age = ${age}, city = ${city}`);  // 5 6
    }

    showMeComplete();
}



const name = "alireza";// 7

setMyInfo(); // this wen can access the name when he call down of the name, if you call up of the name, not working.


userInfo();

*/

function sayMyName() {
    console.log(myName);
}

const myName = "alireza";

sayMyName();