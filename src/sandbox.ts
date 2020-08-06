import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplates.js";

let docOne: HasFormatter;

let docTwo: HasFormatter;

docOne = new Invoice("Gazelle", "blog design", 4000);

docTwo = new Payment("Simon", "phone repair", 80);

let docs: HasFormatter[] = [];

docs.push(docOne, docTwo);

console.log(docs);

//INTERFACES

interface IsPerson {
  name: string;
  age: number;
  speak: (a: string) => void; //Alternative way of setting a method in the interface
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Jeff",
  age: 30,
  speak(text: string) {
    //invoking  method in the object
    console.log(text);
    return; //optional
  },
  spend: (amount: number): number => {
    //alternative for method in the object
    console.log("I spent ", amount);
    return amount;
  },
};

console.log(me, "me");

const greetPerson = (person: IsPerson) => {
  console.log("hello ", person.name);
};

greetPerson(me);

//CLASSES

class Invoice1 {
  //  method 1:
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  //   constructor(c: string, d: string, a: number) {
  //     this.client = c;
  //     this.details = d;
  //     this.amount = a;
  //   }

  //Alternatively, method 2: include the public| private | readonly for below method to work

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format = () => {
    return `${this.client} owes €${this.amount} for ${this.details}`;
  };
}

const invOne = new Invoice("John", "built an AI platform", 300);
const invTwo = new Invoice("Maryline", "work on the new apartment", 600);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invOne.amount = 170;

//invTwo.client = "Tobia"; // doesnt work cos it is a readonly

console.log(invOne, invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format()); // cannot access inv.details cos it is private
});

// const anchor = document.querySelector("a")!; //! showing that it is a valid syntax annd not empty

// // if (anchor) {
// //   console.log(anchor.href);
// // }

// console.log(anchor.href);

const form1 = document.querySelector(".new-item-form") as HTMLFormElement;

//console.log(form1.children);

//inputs

const type = document.querySelector("#type") as HTMLSelectElement;

const fromTo = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;

//List template Instance

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form1.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(fromTo.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(fromTo.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);

  list.render(doc, type.value, "end");

  // console.log(type.value, fromTo.value, details.value, amount.valueAsNumber);
}); //payment Jeff Money for  30000

//GENERICS

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

//FIXES
// const addUID = <T extends object>(obj: T) => { //first method
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

const addUID = <T extends { name: string; age: number }>(obj: T) => {
  //2nd method
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc1 = addUID({ name: "romeo", age: 35 });

console.log(doc1.name); //works now cos of the T generic
// let doc2 = addUID("huzdgiu") // would not work now cos of the  T that extends object

let doc2 = addUID({ name: "hello", age: 2020 });

//console.log(doc1.name); // error saying that name does not exist on the doc1 type

//GENERICS WITH INTERFACES

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const doc3: Resource<string> = {
  uid: 10,
  resourceName: "person",
  // data: { name: "Parker" },
  data: "Parker",
};

const doc4: Resource<object> = {
  uid: 10,
  resourceName: "person",
  data: { name: "Parker" },
};

const doc5: Resource<string[]> = {
  uid: 10,
  resourceName: "shoppingList",
  data: ["Milk", "bread"],
};

console.log(doc3, doc4, doc5);
