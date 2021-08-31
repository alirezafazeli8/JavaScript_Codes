const myObj = {
  name: "hello",
  lastName: "whatss up",
};

const mySet = new Set(["alireza", "ghasem", "reza"]);
const mySetTwo = new Set([myObj]);

console.log(mySet);
console.log(mySetTwo);

const names = ["alireza", "korosh", "dariush", "dariush", "alireza"];

console.log(names);

console.log(new Set(names));

console.log(new Set("ali"));

// SECTION set method
// STUB size = length

console.log(mySet.size);

// STUB has = include
console.log(mySet.has("korosh")); // false
console.log(mySet.has("alireza")); // true

// STUB add = push

mySet.add("im new");

console.log(mySet);

// STUB delete = pop
mySet.delete("im new");
console.log(mySet);

// STUB clear , can clear all the value in set
// mySet.clear();
console.log(mySet);

for (let item of mySet) {
  console.log(item);
}
