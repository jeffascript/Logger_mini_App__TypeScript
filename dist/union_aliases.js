"use strict";
var combine = function (input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedAges = combine(30, 26);
var combinedNames = combine("Jeff", "Emerald");
console.log(combinedAges);
console.log(combinedNames);
var combineFirstMethod = function (input1, input2, resultConversion) {
    var result;
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
var combine1 = function (input1, input2, resultConversion) {
    var result;
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
var combinedStringAges = combine1("30", "26", "as-number");
var combinedNames1 = combine1("Jeff", "Emerald", "as-text");
console.log(combinedNames1);
var combineWithAliases = function (input1, input2, resultConversion) {
    var result;
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
var combinedStringAges1 = combineWithAliases("30", "26", "as-number");
var combinedNames11 = combineWithAliases("Jeff", "Emerald", "as-text");
console.log(combinedNames1);
