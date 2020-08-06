"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
const printResult = (num) => {
    console.log("result is " + num);
};
let someValue;
printResult(add(5, 12));
let combineValues;
combineValues = add;
combineValues = 5;
let reWorkedCombineValues;
reWorkedCombineValues = add;
reWorkedCombineValues = printResult;
console.log(reWorkedCombineValues(7, 7));
let newCombinedValues;
newCombinedValues = add;
console.log(newCombinedValues(8, 7));
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
addAndHandle(10, 20, (result) => {
    console.log(result);
});
