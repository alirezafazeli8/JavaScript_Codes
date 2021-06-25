// SECTION web service
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// all players
let players1 = game.players[0];
let players2 = game.players[1];

// set value gor goal keeper and field players
let [gkPlayerOne, ...fieldPlayerOne] = players1;
let [gkPlayerTwo, ...fieldPlayerTwo] = players2;

// team object
const team1 = {
  gk: gkPlayerOne,
  fieldPlayer: fieldPlayerOne,
  allPlayers: 22,
  playersOneFinal: ["Thiago", "Coutinho", "Perisic"],
  odds: game.odds.team1,
  draw: game.odds.x,
};

const team2 = {
  gk: gkPlayerTwo,
  fieldPlayer: fieldPlayerTwo,
  allPlayers: 22,
  odds: game.odds.team2,
  draw: game.odds.x,
};

function printGoals(teamNumber, numbers) {
  let playerName = game.players[teamNumber][numbers];
  console.log(
    `Name : ${playerName} | Goals : ${game.players[teamNumber].indexOf(
      playerName
    )}`
  );
}

printGoals(0, 5);

// -----------------------------------------------
const teamOneWin = team1.odds < team2.odds;
const teamTwoWin = team2.odds < team1;

console.log(`team one win? ${teamOneWin}`);
console.log(`team two win? ${teamTwoWin}`);
