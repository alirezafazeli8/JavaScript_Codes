const aliDriveLicense = true;
const aliHealthyLicense = true;

if (aliDriveLicense && aliHealthyLicense) {
    console.log("Sure You Can Drive With Your Car 🤑");
} else {
    console.log("fuck, You cant drive with your car bro 😖");
}



const aliAge = 18;
const aliCity = "TokYo";

// AND 
if (aliAge >= 18 && aliCity != "Tehran") {
    console.log("Go to drink your Wine 🍷");
} else {
    console.log("go drink your coca 🥤");
}

// OR
if (aliAge < 18 || aliCity == "TokYo") {
    console.log("you can play warzone");
} else {
    console.log("you can play pubg");
}

// NOT
if (!aliDriveLicense) {
    console.log("Hey Where Are your drive license");
} else {
    console.log("Have Good Luck");
}