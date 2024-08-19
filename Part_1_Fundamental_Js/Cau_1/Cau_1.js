let markMass = 78
let markHeight = 1.69
let johnMass = 92
let johnHeight = 1.95

let markBMI = markMass / (markHeight ** 2);

let johnBMI = johnMass / (johnHeight ** 2);

let markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI:", markBMI);
console.log("John's BMI:", johnBMI);
console.log("Does Mark have a higher BMI than John?", markHigherBMI);
