"use strict";
var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log("result is " + num);
};
var someValue;
printResult(add(5, 12));
var combineValues;
combineValues = add;
combineValues = 5;
var reWorkedCombineValues;
reWorkedCombineValues = add;
reWorkedCombineValues = printResult;
console.log(reWorkedCombineValues(7, 7));
var newCombinedValues;
newCombinedValues = add;
console.log(newCombinedValues(8, 7));
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
addAndHandle(10, 20, function (result) {
    console.log(result);
});
