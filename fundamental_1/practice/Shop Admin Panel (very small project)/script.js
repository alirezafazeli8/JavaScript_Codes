// Start Project

// welcome message
alert('Hey Customer Welcome To Your Admin Panel');

// Notice : now i don't know what is (prompt) , just because i need it i use it .

// Product One
let productOne = prompt('Enter Your Product Name (Number 1):');
let productOnePrice = prompt(`Enter Price of ${productOne}`);

// Product Two
let productTwo = prompt('Enter Your Product Name (Number 2):');
let productTwoPrice = prompt(`Enter Price of ${productTwo}`);

// Product Three
let productThree = prompt('Enter Your Product Name (Number 3):');
let productThreePrice = prompt(`Enter Price of ${productThree}`);

// data server function
function dataSaver() {
	// data of price ever should safe.
	// finalResult variable little like json XD.
	const finalResult = `
        Name : ${productOne}, Price : ${productOnePrice} \n 
        Name : ${productTwo}, Price : ${productTwoPrice} \n 
        Name : ${productThree}, Price : ${productThreePrice} \n 

        Your Data Is Save In Database. Have Good Luck Sir.
    `;
	console.log(finalResult);
}

// call function
dataSaver();
