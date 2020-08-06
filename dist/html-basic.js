"use strict";
const button1 = document.querySelector("button");
button1.addEventListener("click", () => {
    console.log("Clicked !!");
});
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("Clicked 2 !!");
});
let tryMe;
let zu;
zu = ["hgjhb", 1];
tryMe = [5, "tzz", true];
zu.push("hello");
console.log(tryMe, zu);
