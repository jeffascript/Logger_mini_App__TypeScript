"use strict";
var person2 = {
    name: " Jeff",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
person2.role.push("admin");
person2.role[1] = 10;
var person = {
    name: " Jeff",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
person.role[1] = "visitor";
person.role.push("admin");
var favoriteActivities;
favoriteActivities = ["soccer", "BasketBall"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
    Role["MANAGER"] = "Open position";
})(Role || (Role = {}));
var personNew = {
    name: "Jeff",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
};
console.log(personNew);
var newArray;
newArray = [2, "stringingggg", true, 70971];
