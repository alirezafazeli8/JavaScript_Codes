// falsy => 0 , " ", null, NaN, undefined

// falsy
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// truthy
console.log(Boolean(1));
console.log(Boolean("hello"));
console.log(Boolean({}));
console.log(Boolean([]));

// money checker
let money = 0; // => False

if (money) {
    console.log(`hey buddy your money is ${money}$ enjoy it 😀`);
} else {
    console.log('buddy you dont have money , be careful 🤨');
}

