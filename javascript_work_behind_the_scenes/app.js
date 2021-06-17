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



function sayMyName() {
    console.log(myName);
}

const myName = "alireza";

sayMyName();


// firstClass Function

function returnHello () {
    return "hello";
}


function sayWhatYouWant(tellMe) {
    return tellMe;
}
// firstClass function
console.log(sayWhatYouWant(returnHello()));


function sayName() {
    return name
}


const name = "alireza";
sayName();

console.log(a);
const a = "hello";


function userInfo() {
    let name = "alireza";
    return this.name; // undefined
}


console.log(userInfo());





const userInfo = () => {
    let name  = "alireza";
    return console.log(this.name);;
};

userInfo();

document.querySelector("body").addEventListener("click", function() {
    this.classList.add("hidden");
})


const firstName = "alireza";
console.log(firstName);

console.log(this);

function sayHello() {
    return this
}


console.log(sayHello());

const alireza = {
    year: 2004,
    showObjectOfObject: function () {
        return this; // it show me object of created
    },
};


alireza.showObjectOfObject = function () {
    return 2021 - this.year;
};

console.log(alireza.showObjectOfObject());



const korosh = {
    year: 12,
    calcAge : function () {
        return 2021 - 12;
    }, 
};


console.log(korosh.calcAge());

alireza.showObjectOfObject = korosh.calcAge; // method borrowing 

console.log(alireza.showObjectOfObject());


function hello (one, two, three  ) {
    console.log(arguments);
}

hello();



const alireza = {
    name: "alireza",
    age: 43,
};

const mohsen = alireza;
mohsen.age = 15;

console.log(alireza);
console.log(mohsen);


let age = 12;
let oldAge = 14;

age = oldAge;

console.log(age);
console.log(oldAge);


mohsen.name = "salar";
console.log(mohsen);
mohsen = {};
mohsen = 424323;
*/


const objectOne  = {
    a: 1,
    b: 2,
};

const objectTwo  = {
    c: 3,
    d: 4,
};

console.log(objectOne);
console.log(objectTwo);

// Object.assign(objectOne, objectTwo);


// copy target object to another object
Object.assign(objectOne, {name: "alireza", lastName: "ghasemi"});

console.log(objectOne);