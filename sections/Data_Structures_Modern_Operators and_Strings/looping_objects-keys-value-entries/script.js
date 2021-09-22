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

for (let item of Object.keys(game)) {
  //   console.log(item);
  //   console.log(`Fuck You ${item}`);
  //   console.log("😎😎😎");
}

// STUB get keys from object
console.log(Object.keys(game)[2]);

// STUB get value from object
console.log(Object.values(game));

for (let item of [
  ...Object.values(game.players[0]),
  ...Object.values(game.players[1]),
]) {
  //   console.log(`hey ${item} . whats up?`);
}

const oneEntries = game.players[0].entries();

console.log(oneEntries);

// for (let item of oneEntries) {
//   console.log(`${item[0]} | ${item[1]}`);
// }

// for (let item of game.players[0].entries()) {
//   console.log(`${item[0]} | ${item[1]}`);
// }

console.log(Object.entries(game.score));
