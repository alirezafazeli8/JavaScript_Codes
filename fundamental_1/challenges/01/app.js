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

const bmiResult = `
    john BMI > mark BMI = ${johnBmi > markBmi}
`;
console.log('Mark :', markBmi, 'John :', johnBmi);
console.log(bmiResult);



