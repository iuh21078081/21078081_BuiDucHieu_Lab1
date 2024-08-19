
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];


const dolphinsAvg = (dolphinsScores[0] + dolphinsScores[1] + dolphinsScores[2]) / 3;
const koalasAvg = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;

console.log(`Dolphins' Average Score: ${dolphinsAvg}`);
console.log(`Koalas' Average Score: ${koalasAvg}`);


if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("Dolphins win the trophy!");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log("Koalas win the trophy!");
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log("It's a draw!");
} else {
    console.log("No team wins the trophy.");
}
