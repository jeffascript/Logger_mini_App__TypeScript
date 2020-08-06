"use strict";
const myAr1 = [
    {
        uid: 10,
        resourceName: "person",
        data: { name: "Parker" },
    },
    {
        uid: 3,
        resourceName: "person1",
        data: { name: "Parker1" },
    },
];
const myAr2 = [
    {
        uid: 10,
        resourceName: "person",
        data: ["name:", "Parker"],
    },
    {
        uid: 3,
        resourceName: "person1",
        data: ["name:", "Parker"],
    },
];
console.log(myAr1);
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: "romeo", age: 35 });
console.log(doc1.name);
let doc2 = addUID({ name: "hello", age: 2020 });
