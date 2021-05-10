let z;

z = 12 == '12'; // check value
console.log(z); // true

// ----------------------------------------
// Check for value type
z = '12' === 12; // check type
console.log(z); // false

// ----------------------------------------
//Check for value inequality

z = '12' != 12;
console.log(z); // false

z = 12 != 13;
console.log(z); // true

// ----------------------------------------
//Check for  (in)equality

z = 12 !== 12; // false
console.log(z);

z = '12' !== 12; // true
console.log(z);

// -----------------------------------------
// Check for value being greater / smaller
z = 12 > 13; // false
console.log(z);

z = 13 < 15; // true
console.log(z);

// -------------------------------------------
// <= . >=
// Check for value being greater or equal / smaller or equal

z = 12 >= 13; // false
console.log(z);

z = 12 <= 12; // true
console.log(z);

z = 13 >= '13'; // true
console.log(z);

// -----------------------------------------------
// { ! } Check if NOT true
