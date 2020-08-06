import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplates.js";
let docOne;
let docTwo;
docOne = new Invoice("Gazelle", "blog design", 4000);
docTwo = new Payment("Simon", "phone repair", 80);
let docs = [];
docs.push(docOne, docTwo);
console.log(docs);
const me = {
    name: "Jeff",
    age: 30,
    speak(text) {
        console.log(text);
        return;
    },
    spend: (amount) => {
        console.log("I spent ", amount);
        return amount;
    },
};
console.log(me, "me");
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
class Invoice1 {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.format = () => {
            return `${this.client} owes €${this.amount} for ${this.details}`;
        };
    }
}
const invOne = new Invoice("John", "built an AI platform", 300);
const invTwo = new Invoice("Maryline", "work on the new apartment", 600);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.amount = 170;
console.log(invOne, invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form1 = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const fromTo = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form1.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(fromTo.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(fromTo.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: "romeo", age: 35 });
console.log(doc1.name);
let doc2 = addUID({ name: "hello", age: 2020 });
const doc3 = {
    uid: 10,
    resourceName: "person",
    data: "Parker",
};
const doc4 = {
    uid: 10,
    resourceName: "person",
    data: { name: "Parker" },
};
const doc5 = {
    uid: 10,
    resourceName: "shoppingList",
    data: ["Milk", "bread"],
};
console.log(doc3, doc4, doc5);
