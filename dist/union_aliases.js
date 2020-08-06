"use strict";
const combine = (input1, input2) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
const combinedAges = combine(30, 26);
const combinedNames = combine("Jeff", "Emerald");
console.log(combinedAges);
console.log(combinedNames);
const combineFirstMethod = (input1, input2, resultConversion) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
};
const combine1 = (input1, input2, resultConversion) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
};
const combinedStringAges = combine1("30", "26", "as-number");
const combinedNames1 = combine1("Jeff", "Emerald", "as-text");
console.log(combinedNames1);
const combineWithAliases = (input1, input2, resultConversion) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
};
const combinedStringAges1 = combineWithAliases("30", "26", "as-number");
const combinedNames11 = combineWithAliases("Jeff", "Emerald", "as-text");
console.log(combinedNames1);
