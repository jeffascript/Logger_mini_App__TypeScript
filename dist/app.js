"use strict";
var button1 = document.querySelector("button");
button1.addEventListener("click", function () {
    console.log("Clicked !!");
});
var button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log("Clicked 2 !!");
});
var tryMe;
var zu;
zu = ["hgjhb", 1];
tryMe = [5, "tzz", true];
zu.push("hello");
console.log(tryMe, zu);
