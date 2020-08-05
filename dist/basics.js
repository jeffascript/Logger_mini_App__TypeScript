"use strict";
var add = function (n1, n2, showResult, phrase) {
    /**
       if (typeof n1 !== "number" || typeof n2 !== "number") {
           throw new Error("Incorrect Input!");
          }
    */ //JS version of the typeof check
    //console.log(typeof number1);
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
        // console.log(`${phrase} ${n1 + n2}`); //alternatively with template literals
    }
    else {
        return result; // n1 + n2
    }
};
var number1 = 5; // works perfectly fine since u cannot reassign a new value to the number1 variable
//const newNumber; // would not work since const must be initialised
var newNumber; //initialise plus the type that it would hold later on/ assignable
newNumber = 6;
var number2 = 2.9;
var printResult = true;
var resultPhrase = "Result is ";
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
