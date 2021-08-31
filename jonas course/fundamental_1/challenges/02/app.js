// mark 
const markMass = 78;
const markHeight = 1.69;

// john
const johnMass = 76;
const johnHeight = 1.80;


// mark bmi
const markBmi = markMass / markHeight ** 2;
// john bmi
const johnBmi = johnMass / (johnHeight * johnHeight);

if (markBmi > johnBmi) {
    const output = `
        Mark Bmi (${markBmi}) is bigger than john Bmi(${johnBmi})
    `; 
    console.log(output);
} else {
    const output = `
        John BMI(${johnBmi}) is bigger than , Mark BMI(${markBmi}).
    `;
    console.log(output);
}

// like python i made new function name it print , can print something in console
print("Hello World")

 

