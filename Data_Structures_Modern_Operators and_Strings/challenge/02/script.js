"use strict";

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

// STUB section 1
for (let [number, name] of game.scored.entries()) {
  console.log(`Goal : ${number + 1} | Name: ${name}`);
}

console.log("------------------------------------------");

// STUB section 2
let oddValue = Object.values(game.odds);
let oddNumbers;
for (let item of oddValue) {
  //   let oddNum = [...item];
  //   console.log(oddNum);
  oddNumbers = (item += item) / oddValue.length;
}

console.log("Average :", Math.trunc(oddNumbers));

console.log("------------------------------------------");

// STUB section 3

// NOTE solution 1
let {
  team1,
  team2,
  odds: { team1: teamOneOdd, team2: teamTwoOdd, x: draw },
} = game;

console.log(`
    Odd of ${team1}: ${teamOneOdd} 
    Odd of ${draw}
    Odd of ${team2}: ${teamTwoOdd} 
`);
