"use strict";

// football bet app
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// task #1
const events = new Set([...gameEvents]);
// const eventsTwo = [...gameEvents];

// task #2
gameEvents.delete(64);

// task #3
// console.log(...eventsTwo[);
for (let [key, value] of events) {
  console.log(value);
}

console.log(gameEvents);

console.log(gameEvents.values());
