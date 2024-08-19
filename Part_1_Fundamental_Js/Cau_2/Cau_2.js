
let markMass = 78;
let markHeight = 1.75; 
let johnMass = 92;
let johnHeight = 1.95;


let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);


if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI.toFixed(1)})!`);
}
