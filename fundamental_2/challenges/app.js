"use strict";
/*
//  average calculator
const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
    return (scoreOne + scoreTwo + scoreThree) / 3
};

// store calculate data from dolphin and koalas
const dolphinAverage = calcAverage(85, 54, 41);
const koalasAverage = calcAverage(23, 34, 27);

// check the winner 
function checkWinner (avgDolphins, avgKoalas) {
   if (avgDolphins >=  2 *  avgKoalas) {
        return `Dolphin is Win (${avgDolphins} vs ${avgKoalas}) `
   } else if  (avgDolphins >=  2 * avgKoalas) {
        return `Koalas is Win (${avgKoalas} vs ${avgDolphins}) `
   } else {
       return `We Dont Have Winner`
   }
}

// result of winner form averages variable
console.log(checkWinner(dolphinAverage, koalasAverage));
*/
/*
// let tip;

function calcTip(billValue) {
    if (billValue > 50 && billValue < 300) {
        tip = (15 * billValue) / 100;
        console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value
        ${tip + billValue} 🤑`);
    } else if (billValue < 50 ) {
        tip = (10 * billValue) / 100;
        console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value
        ${tip + billValue} 🤑`);
    } else {
        tip = (20 * billValue) / 100;
        console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value
        ${tip + billValue} 🤑`);
    }
}

const billValue = [125, 555, 44]
const tips = [calcTip(billValue[0]), calcTip(billValue[1]), calcTip(billValue[2])];
console.log(billValue, tips);
*/
/*
//Coding Challenge #3 
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return `${this.fullName} BMI (${this.bmi})`
    }
};

console.log(mark.calcBmi());

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.bmi =  this.mass / (this.height * this.height);
        return `${this.fullName} BMI (${this.bmi})`
    }
};

console.log(john.calcBmi());

if (mark.bmi  >  john.bmi) {
    console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})!`);
} else {
    console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})!`);
}
*/