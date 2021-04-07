// we can write variable in oneLine
let dayOne = 50000,
	dayTwo = 20000,
	dayThree = 70000,
	dayFour = 10000,
	dayFive = 40000,
	daySix = 45650,
	daySeven = 39490;

// calculate percent
let sum = dayOne + dayTwo + dayThree + dayFour + dayFive + daySix + daySeven;
let percentToGet = 1000000;
let percentAsDecimal = sum / percentToGet;
let percent = percentAsDecimal * 100;

// show in console
let calculate = `
    your spending in week.\n
    dayOne : ${dayOne} \n
    dayTwo : ${dayTwo} \n
    dayThree : ${dayThree} \n
    dayFour : ${dayFour} \n
    dayFive : ${dayFive} \n
    daySix : ${daySix} \n
    daySeven : ${daySeven} \n
    total: ${
			dayOne + dayTwo + dayThree + dayFour + dayFive + daySix + daySeven
		} \n
    total percent: ${percent}% \n
    you save ${100 - percent}% of your money.
`;

console.log(calculate);
