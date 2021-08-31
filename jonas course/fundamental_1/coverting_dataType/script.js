function calculation (num1, num2) {
    const sum = num1 + num2;
    console.log(`Result : ${sum}`);
}

let numberOne = 8;
let numberTwo = 8;

// convert any data to (String)

// first method => String(X)
calculation(String(2), String(3)); // Result : 23

// second method => x.toString() Notice This Just For variable
calculation(numberOne.toString(), numberTwo.toString()) 

//------------------------------------------------------------------
// Convert Any Data to (Number)

numberOne = "7";
numberTwo = "7";
console.log(typeof(numberOne), typeof(numberTwo));

// first method => The global method Number() can convert strings to numbers.
calculation(Number(numberOne), Number(numberTwo));

//second method => Parses a string and returns an integer
calculation(typeof(parseInt(numberOne)), typeof(parseInt(numberOne)));


// ---------------------------------------------------------------
// convert any data to float 
// if any data converted to float can like that => 1.0 or 5.0
//Notice = javascript default not showing the float point

alert(parseFloat(numberOne), parseFloat(numberTwo));