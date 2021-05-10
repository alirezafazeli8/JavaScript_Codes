// first task
const dolphins  = (96 + 108 + 89) / 3 ;
const koalas = (88 + 91 + 110) / 3;

if (dolphins > koalas) {
    console.log(`dolphins is ${dolphins} , koalas is ${koalas}. winner is dolphins`);
} else if (dolphins == koalas) {
    console.log(`dolphins is ${dolphins} , koalas is ${koalas}. they are equal`);
} else {
    console.log(`dolphins is ${dolphins} , koalas is ${koalas}. winner is koalas`);
}

//bonus 1
const dolphinBonusOne = (97 + 112 + 101) / 3;
const koalasBonusOne = (109 + 95 + 123) / 3;

if (dolphins > koalas && dolphinBonusOne >= 100) {
    console.log(`hey dolphin you win it 🏆`);
} else if (koalas > dolphins && koalasBonusOne >= 100) {
    console.log('hey koalas you win it 🏆');
} else if (dolphinBonusOne === koalasBonusOne) {
    console.log('fuck they are equal 🙃');
} else {
    console.log('no team wins the trophy 😱');
}