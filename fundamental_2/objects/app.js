"use strict";
/*
const userInfo = {
    firstName: "alireza",
    lastName: "fazeli",
    age: 16,
    job: "Developer",
    friends: ["mohammad", "ali", "ghasem", "sohrab"]
};

const Name = "Name";

console.log(userInfo.firstName);
console.log(userInfo["job"]);
console.log(userInfo["last" + Name]); // [ ] is expression and can produce value
console.log(userInfo.friends[userInfo.friends.length - 1]) // produce value

console.log(userInfo.friends.length);
*/
/*
// Object Methods
const alireza = {
    firstName: "alireza",
    lastName: "fazeli",
    birthYear: 2004,
    job: "Developer",
    friends: ["mohammad", "ali", "ghasem", "sohrab"],
    driverLicense: true,

    bestFriend: function (friends) {
        return friends;
    },

    age: function () {
        return 2021 - this.birthYear;
    },

    showResult: function () {
        const result  = `
            ${this.firstName}is a ${this.age()}-years old ${this.job}, and  ${this.driverLicense ? "he has a driver license" : "hes hasn't driverLicense"}
        `;
        return result
    },
};
console.log(alireza.showResult());
console.log(alireza.bestFriend(alireza.friends[0]))
*/

const person = {
    firstName: "Rostam",
    lastName: "Sohrab",
    birthYear: 1383,
    job: "Developer",
    friends: ["Sara", "Korosh", "dariush"],

    age: function (year) {
        return year - this.birthYear;
    },

    jobDetail: function () {
        return `${this.job} can develope everything from computer`;
    }
};

console.log(person.age(1400));
console.log(person.jobDetail());