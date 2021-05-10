const countryName = prompt("insert your country name:");
const CountryCountPeople = prompt("plean insert your country people count:");

if (CountryCountPeople >= 33) {
    console.log(`your country name is ${countryName} population is ${CountryCountPeople} `);
} else if (CountryCountPeople <= 0 ) {
    console.log("pleas enter real number");
} else {
    console.log(`${countryName} population is not enough. you should get ${33 - CountryCountPeople} more than.`);
}

