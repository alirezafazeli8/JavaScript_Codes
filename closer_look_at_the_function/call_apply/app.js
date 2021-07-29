"use strict";

/*
const mahanAirlane = {
  airLane: "mehrabad",
  airPlaneName: "Mahan_AriBus",
  code: "FHPOL",
  booking: [],
  book(flightNumber, name) {
    console.log(`
            Parvaz ${flightNumber} Havapeyma ${this.airPlaneName}-${this.code}, Air Lane : ${this.airLane}, Be Nam Agha/khanoom ${name} Book Shod.
        `);
    this.booking.push({
      flightName: `${this.airPlaneName}-${this.code}`,
      name,
    });
  },
};

mahanAirlane.book(34, "alirezafazeli");
console.log(mahanAirlane);



const restaurant = {
  rName: "ali_baba",
  rCity: "Tehran",

  rCustomerInfo: [],

  bookRest(code, name) {
    console.log(`
            Restaurant ${this.rName} - Code ${code}, ${this.rCity} City - Is booking For Mr.Ms / ${name}.
        `);
    this.rCustomerInfo.push({
      code,
      name,
    });
  },
};

restaurant.bookRest(1, "alirezafazeli");
restaurant.bookRest(5, "kakashi");

console.log(restaurant);

// const snapFood = restaurant.bookRest;

// amooSohrab.snapFood();

// STUB call method || get argument

const amooSohrab = {
  rName: "Amoo Sohrab",
  rCity: "Sari",

  rCustomerInfo: [],
};

restaurant.bookRest.call(amooSohrab, 67, "ghasem nozari");

// STUB apply || get array

const akabarJooje = {
  rName: "Akbar Jooje",
  rCity: "gloogah",

  rCustomerInfo: [],
};

console.log(amooSohrab);

const newInfo = [24, "kashani"];

restaurant.bookRest.apply(akabarJooje, newInfo);

restaurant.bookRest.call(amooSohrab, ...newInfo);

*/
const restaurant = {
  rName: "ali_baba",
  rCity: "Tehran",

  rCustomerInfo: [],

  bookRest(code, name) {
    console.log(`
              Restaurant ${this.rName} - Code ${code}, ${this.rCity} City - Is booking For Mr.Ms / ${name}.
          `);
    this.rCustomerInfo.push({
      code,
      name,
    });
  },
};

const amooSohrab = {
  rName: "Amoo Sohrab",
  rCity: "Sari",

  rCustomerInfo: [],
};

const madarBozorg = {
  rName: "madar bozorg",
  rCity: "Tehran",

  rCustomerInfo: [],
};

const bookRest = restaurant.bookRest;

const bookAmoo = bookRest.bind(amooSohrab);
const bookMadar = bookRest.bind(madarBozorg);

bookAmoo(23, "alireza");
bookAmoo(4, "ghasem");
bookAmoo(67, "reza");

bookMadar(1, "sara");
bookMadar(4, "locas");
bookMadar(8, "jein");
