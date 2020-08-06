interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

//ARAY of Objects With Generics and Interface

const myAr1: Resource<object>[] = [
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

//Array of Objects with Array in data

const myAr2: Resource<string[]>[] = [
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

//GENERICS WITH FUNCTION

const addUID = <T extends { name: string; age: number }>(obj: T) => {
  //2nd method
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc1 = addUID({ name: "romeo", age: 35 });

console.log(doc1.name); //works now cos of the T generic
// let doc2 = addUID("huzdgiu") // would not work now cos of the  T that extends object

let doc2 = addUID({ name: "hello", age: 2020 });
