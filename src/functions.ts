const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  //void-->  cos it is not returning sth ... i.e, returns nothing, hennce no need for empty return;
  console.log("result is " + num);
};

let someValue: undefined; //valid syntax, will forever be undefined.

// const printResult = (num: number): undefined => {
//     //void-->  cos it is not returning sth
//     console.log("result is " + num);
//     return;
//   };

// return without anything, with undefined instead of void.

printResult(add(5, 12));

let combineValues; // will still work, but will fail on runtime if it was reassigned a new value
combineValues = add;

combineValues = 5; // new value reassigned in place of add()

//console.log(combineValues(8, 8)); //crashes cos, combineValues is not a function... it has new value === 5, but not caught with TS  :X

//FUNCTION TYPES ---->

let reWorkedCombineValues: Function; // this works but could lead to another problem of being specific to what type of function it has to accept.

reWorkedCombineValues = add;
reWorkedCombineValues = printResult; // would be undefined since it does not accept (2 args and return sth like add function)
console.log(reWorkedCombineValues(7, 7));

//Fixes->

let newCombinedValues: (a: number, b: number) => number;
newCombinedValues = add; // assigned to add method

// newCombinedValues = printResult; // now unassignable due to the function type check

console.log(newCombinedValues(8, 7));

//With CB

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

addAndHandle(10, 20, (result) => {
  console.log(result);
});
