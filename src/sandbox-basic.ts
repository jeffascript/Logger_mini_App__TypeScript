const character = "mario";

console.log(character);

const inputs = document.querySelectorAll("input");

console.log(inputs);

inputs.forEach((input) => {
  console.log(input);
});

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(20));

type OurArray = string | boolean | number;

let mixed: OurArray[]; //
let mixed1: unknown[];

mixed = ["highidf", 1, 7867, true];

mixed1 = ["highidf", 1, 7867, true];
mixed1.push("reeperbahn");
console.log(mixed1);

let jeffPerson: {
  name: string;
  age: number;
  color: string;
} = {
  name: "Jeff",
  age: 30,
  color: "black",
};

type ArrayMatch = string | boolean | number;

enum Gender {
  MALE = "Male",
  FEMALE = "Female",
}
let jeff: {
  name: string;
  age: number;
  color?: string;
  skills: ArrayMatch[];
  gender?: Gender;
} = {
  name: "Jeff",
  age: 25,
  color: "black",
  skills: [],
};

jeff = {
  name: "Jeff0",
  age: 28,
  gender: Gender.MALE,
  skills: ["typeScript", 2, false],
};

console.log(jeff.age);

console.log((jeff.age = 30));

console.log(jeff.gender);
