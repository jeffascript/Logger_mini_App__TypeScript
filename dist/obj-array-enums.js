"use strict";
const person2 = {
    name: " Jeff",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
person2.role.push("admin");
person2.role[1] = 10;
const person = {
    name: " Jeff",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
person.role[1] = "visitor";
person.role.push("admin");
let favoriteActivities;
favoriteActivities = ["soccer", "BasketBall"];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
    Role["MANAGER"] = "Open position";
})(Role || (Role = {}));
const personNew = {
    name: "Jeff",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
};
console.log(personNew);
let newArray;
newArray = [2, "stringingggg", true, 70971];
