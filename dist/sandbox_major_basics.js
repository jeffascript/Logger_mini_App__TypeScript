"use strict";
let age = 20;
age = 50;
console.log(age);
let arrNames = [];
arrNames.push(...arrNames, "new add");
console.log(arrNames);
let newMixed = [];
newMixed = [167, "uhgug", true];
newMixed.splice(2, 0, "lilac");
console.log(newMixed);
let jeffObj;
jeffObj = {
    name: "!Jeff",
    age: 50,
    coder: true,
};
let jeffObj1 = [
    {
        name: "!Jeff",
        age: 50,
        coder: true,
    },
];
jeffObj1 = [
    {
        name: "!Jeff",
        age: 50,
        coder: true,
    },
    {
        name: "!Jeff2",
        age: 20,
        coder: true,
    },
];
let age1 = 25;
age1 = true;
console.log(age1);
age1 = "hello";
console.log(age1);
age1 = { name: "luigi", uuid: 209863 };
console.log(age1);
let arrWithAny = [];
arrWithAny.push("mario", 2, false);
console.log(arrWithAny);
let greet;
greet = () => {
    console.log("hello, again");
};
const letsAdd = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
letsAdd("1", 7, " now");
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetNow = (user) => {
    console.log(`${user.name} says hello`);
};
let greetJ;
let greet2;
greet2 = (name, greetings) => {
    console.log(name + " says " + greetings);
};
greet2("Jeff", "Cool coding day!");
let calc;
calc = (num1, num2, action) => {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
console.log(calc(2, 5, "add"));
let logger;
logger = (person) => {
    console.log(`${person.name} is ${person.age} years old`);
};
logger({ name: "Jeff", age: 30 });
