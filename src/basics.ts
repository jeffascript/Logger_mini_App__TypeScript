const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  /**
     if (typeof n1 !== "number" || typeof n2 !== "number") {
         throw new Error("Incorrect Input!");
        }
  */ //JS version of the typeof check

  //console.log(typeof number1);
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
    // console.log(`${phrase} ${n1 + n2}`); //alternatively with template literals
  } else {
    return result; // n1 + n2
  }
};

const number1 = 5; // works perfectly fine since u cannot reassign a new value to the number1 variable

//const newNumber; // would not work since const must be initialised

let newNumber: number; //initialise plus the type that it would hold later on/ assignable

newNumber = 6;

const number2 = 2.9;

const printResult = true;

const resultPhrase = "Result is ";

const result = add(number1, number2, printResult, resultPhrase);

console.log(result);
