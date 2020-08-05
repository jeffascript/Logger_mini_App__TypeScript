// HTML body

const button1 = document.querySelector("button")! as HTMLButtonElement;

button1.addEventListener("click", () => {
  console.log("Clicked !!");
});

const button = document.querySelector("button");

button?.addEventListener("click", () => {
  console.log("Clicked 2 !!");
});

//Self-Playaround
type AllArray = string | number | boolean;
let tryMe: Array<AllArray>;

let zu: [string, number];
zu = ["hgjhb", 1];

tryMe = [5, "tzz", true];

zu.push("hello");
console.log(tryMe, zu);
