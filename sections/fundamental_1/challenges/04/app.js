const billValue = 10; 
// 275 => 41.25
// 40 => 6
// 430 => 64.5
let tip; // global variable

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

// conditional operators
tip = (20 * billValue) / 100;

const sum = billValue > 50 && billValue < 300 ? `The bill was ${billValue}, the tip was ${tip}, and the total value
${tip + billValue} 🤑` : `The bill was ${billValue}, the tip was ${tip}, and the total value
${tip + billValue} 🤑`;

console.log(sum);