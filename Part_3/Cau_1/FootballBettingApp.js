const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnabry',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
};
console.log("Football Betting App")
console.log("==============================================================================");
console.log("Challenge 1");

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, draw, team2 } = game.odds;

const printGoals = (...players) => {
    console.log(`${players.length} goals were scored`);
    players.forEach(player => console.log(player));
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
console.log("==============================================================================");
console.log("Challenge 2");
for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
}


let totalOdd = 0;
for (const odd of Object.values(game.odds)) {
    totalOdd += odd;
}
const averageOdd = totalOdd / Object.values(game.odds).length;
console.log(`Average odd: ${averageOdd}`);


for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'draw' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}


const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
console.log("==============================================================================");
console.log("Challenge 3");
const gameEvents = new Map([
    [17, 'GOAL'],
    [23, 'YELLOW CARD'],
    [30, 'HALF TIME'],
    [60, 'SUBSTITUTE'],
    [64, 'YELLOW CARD'],
    [75, 'GOAL'],
    [85, 'FULL TIME']
  ]);

  const events = [...new Set(gameEvents.values())];
  console.log(events);
  gameEvents.delete(64);
  const minutes = [...gameEvents.keys()].sort((a, b) => a - b);
  const totalMinutes = minutes.length - 1;
  const totalTimeBetweenEvents = minutes[totalMinutes] - minutes[0];
  const averageTimeBetweenEvents = totalTimeBetweenEvents / (totalMinutes || 1);
  console.log(`An event happened, on average, every ${Math.round(averageTimeBetweenEvents)} minutes`);
  
  for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
  }

