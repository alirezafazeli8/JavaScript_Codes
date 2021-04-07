// declare function in JS

// calculator
function calculator(num1, num2) {
    const sum = num1 + num2;
	alert(`Get Your Number: ${sum}`);
}

// call function
// calculator(56, 78324);

// Sentence maker
// declare function
function sentenceMaker(firstName, lastName) {
	console.log(`
        your firstName is : ${firstName} \n
        and your lastName : ${lastName} \n
        have good time my friend.
    `);
}

// call function
// sentenceMaker('Ghasem', 'mohseni');


// return in javascript function
function call () {
    let myName = "alireza";
    alert('hey friend');
    return myName
};

call();