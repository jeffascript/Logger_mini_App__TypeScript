// const person1: {
//   name: string;
//   age: number;
// } = {
//   // :{} same as :object
//   name: " Jeff",
//   age: 30,
// };

const person2 = {
  // same as :object
  name: " Jeff",
  age: 30,
  hobbies: ["Sports", "Cooking"],

  role: [2, "author"],
};
person2.role.push("admin"); // will work since we are not specifically telling TS to have only number in n0, and string in n1th positions.
person2.role[1] = 10;

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: " Jeff",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  //tupple at play ==> fixed-length array
  role: [2, "author"], // tuple needed if we are to enforce n0th = number, n1th = string
};

// person.role[1] = 10; // fails due to tupple
person.role[1] = "visitor";
//person.role = [] // cannot be empty, has to adhere to the tupple rule above
//person.role = [20, "hr", 2, "manager" ]  // cannot be assignable due to its initialisation above
person.role.push("admin"); // push works with or without tupples

let favoriteActivities: string[];

favoriteActivities = ["soccer", "BasketBall"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()) // cannot work, type checked
}

// ENUMS: automatically  enumerated global constant identifiers

enum Role {
  ADMIN = "Admin",
  READ_ONLY = 100,
  AUTHOR,
  MANAGER = "Open position",
}

//enums could be numbers or strings, but when left alone, they will automatically be assigned the enum variable name and the index as number

const personNew = {
  name: "Jeff",
  age: 30,
  hobbies: ["Sports", "Cooking"],

  role: Role.AUTHOR,
};

console.log(personNew);

//any property can store anything, when you do not knnow what should be there
//try to explicitly define types, or fall back for js to infer it than stating it

let newArray: any[];

newArray = [2, "stringingggg", true, 70971];
