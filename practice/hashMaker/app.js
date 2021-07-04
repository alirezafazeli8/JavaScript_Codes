"use strict";

// get password
const userPassword = prompt("pleas Enter Your Password :");

// const saltOne = "jdalduasdjhasdagg34242kjjdkadahhjba4532k";
// const saltTwo = "534j35h3hh963131g3v13ljk1lkjdaiuds87adhbk";

const salty = [
  "jdalduasdjhasdagg34242kjjdkadahhjba4532k",
  "534j35h3hh963131g3v13ljk1lkjdaiuds87adhbk",
  "kiokio:UU:II:",
  userPassword,
];
const [saltOne, saltTwo, firstSalt, secret] = salty;
let newSaltyPassword =
  firstSalt + saltOne + secret + saltTwo + secret + firstSalt;
console.log(newSaltyPassword);

const showPassword = [
  newSaltyPassword.split(saltOne),
  newSaltyPassword.split(saltTwo),
  newSaltyPassword.split(firstSalt),
];
console.log(showPassword);
