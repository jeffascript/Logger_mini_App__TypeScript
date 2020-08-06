//ARRAY Cont'd

let age: number = 20;

age = 50;

console.log(age);

let arrNames: string[] = [];
arrNames.push(...arrNames, "new add");

console.log(arrNames);

//UNION Types

let newMixed: (string | boolean | number)[] = [];

newMixed = [167, "uhgug", true];
newMixed.splice(2, 0, "lilac");
console.log(newMixed);

// OBJECTS

let jeffObj: Object; // 1 way

jeffObj = {
  name: "!Jeff",
  age: 50,
  coder: true,
};

//2nd way
let jeffObj1: {
  name: string;
  age: number;
  coder: boolean;
}[] = [
  {
    name: "!Jeff",
    age: 50,
    coder: true,
  },
];

jeffObj1 = [
  {
    name: "!Jeff",
    age: 50,
    coder: true,
  },
  {
    name: "!Jeff2",
    age: 20,
    coder: true,
  },
];

// Any Types (Use with caution)

let age1: any = 25; // better left as in Js so that it does inference than declaring it

age1 = true;

console.log(age1);

age1 = "hello";

console.log(age1);

age1 = { name: "luigi", uuid: 209863 };

console.log(age1);

let arrWithAny: any[] = [];

arrWithAny.push("mario", 2, false);

console.log(arrWithAny);

//FUNCTION BASICS

let greet: Function;

greet = () => {
  console.log("hello, again");
};

const letsAdd = (a: string, b: number, c?: number | string): void => {
  //you can use the ? Optional or give it a default = sth; not both
  //eg: c:number = 10 OR c?: number| string
  console.log(a + b);
  console.log(c);
};

letsAdd("1", 7, " now");

//TYPE ALIASES

type StringOrNum = string | number;
type ObjectWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

// const greetNow = (user: { name: string; uid: StringOrNum }): void => {
//   console.log(`${user.name} says hello`);
// };
const greetNow = (user: ObjectWithName): void => {
  console.log(`${user.name} says hello`);
};

//FUNCTION SIGNATURES

let greetJ: Function; //1st signature

let greet2: (a: string, b: string) => void; //2nd signature

greet2 = (name: string, greetings: string) => {
  console.log(name + " says " + greetings);
};

greet2("Jeff", "Cool coding day!");

let calc: (a: number, b: number, c: string) => number; //3rd signature

calc = (num1: number, num2: number, action: string) => {
  if (action === "add") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};

console.log(calc(2, 5, "add"));

let logger: (obj: { name: string; age: number }) => void; //4th signature

type Person = {
  name: string;
  age: number;
};
// logger = (person: { name: string; age: number }) => {
//   console.log(`${name} is ${age} years old`);
// };

logger = (person: Person) => {
  console.log(`${person.name} is ${person.age} years old`);
};

logger({ name: "Jeff", age: 30 });
