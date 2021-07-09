"use strict";

let db;

// SECTION set default value for function
function SetUserInformation(
  firstName = "ANONYMOUS",
  lastName = "ANONYMOUS",
  //   expression in default value
  age = lastName + 2,
  city = "NOTHING"
) {
  // es5
  //  age = age || 18;
  db = {
    firstName,
    lastName,
    age,
    city,
  };
  console.log(db);
}

SetUserInformation("alireza", "fazeli", 32, "IR, TH");
SetUserInformation("alireza", "fazeli");
SetUserInformation(undefined, undefined, 545454, undefined);
