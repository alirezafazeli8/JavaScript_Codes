// local scope 
// global scope


// local scope
function sayMyName () {
    let myName = "alireza";
    return myName
}

// this code is not working , because this variable for local scope function and not working outside the function. 
// console.log(myName);


// global scope
let lastName = "fazeli";

function sayLastName () {
    lastName = "ghasemi";
    console.log(lastName);
}

console.log(lastName); // => fazeli
sayLastName(); // when function is run => ghasemi
console.log(lastName); // variable data is change to => ghasemi

//Notice : when We Use global scope variable data , everywhere in your code can changes with any function you thing.

