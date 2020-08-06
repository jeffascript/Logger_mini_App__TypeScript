"use strict";
const character = "mario";
console.log(character);
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((input) => {
    console.log(input);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(20));
let mixed;
let mixed1;
mixed = ["highidf", 1, 7867, true];
mixed1 = ["highidf", 1, 7867, true];
mixed1.push("reeperbahn");
console.log(mixed1);
let jeffPerson = {
    name: "Jeff",
    age: 30,
    color: "black",
};
var Gender;
(function (Gender) {
    Gender["MALE"] = "Male";
    Gender["FEMALE"] = "Female";
})(Gender || (Gender = {}));
let jeff = {
    name: "Jeff",
    age: 25,
    color: "black",
    skills: [],
};
jeff = {
    name: "Jeff0",
    age: 28,
    gender: Gender.MALE,
    skills: ["typeScript", 2, false],
};
console.log(jeff.age);
console.log((jeff.age = 30));
console.log(jeff.gender);
