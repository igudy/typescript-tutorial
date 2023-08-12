// lesson 15 - interfaces
// interface IsPerson {
//   name: string
//   age: number
//   speak(a: string): void
//   spend(a: number): number
// }
// const me: IsPerson = {
//   name: "grace",
//   age: 5,
//   speak(text: string): void {
//     console.log(text)
//   },
//   spend(amount: number): number {
//     console.log(`I spent`, amount)
//     return amount
//   },
// }
// const greetPerson = (person: IsPerson) => {
//   console.log(`Hello`, person.name)
// }
// greetPerson(me)
// console.log(me.spend)
// lesson 16 - Interfaces with classes
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter
// let docTwo: HasFormatter
// docOne = new Invoice("yoshi", "web work", 250)
// docTwo = new Payment("mario", "plumbing work", 300)
// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// lesson 11 - The DOM and Type Casting
// The ! means that ! must return something
const anchor = document.querySelector("a");
console.log(anchor.href);
const form = document.querySelector("form");
// The below is an example of typecasting
const form2 = document.querySelector(".new-item-form");
// console.log(form)
// console.log(form.children)
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
// // lesson 18 - Generics
// const addUID = <T extends { name: string }>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100)
//   return { ...obj, uid }
// }
// let docOne = addUID({ name: "yoshi", age: 40 })
// console.log(docOne)
// // Generics with interface
// interface Resource<T> {
//   uid: number
//   resourceName: string
//   data: T
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: "person",
//   data: { name: "string" },
// }
// const docFour: Resource<string[]> = {
//   uid: 3,
//   resourceName: "shoppingList",
//   data: ["bread", "milk", "toilet roll"],
// }
// console.log(docThree, docFour)
// lesson 19 - Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: { name: "string" },
};
const docFour = {
    uid: 3,
    resourceName: ResourceType.FILM,
    data: ["bread", "milk", "toilet roll"],
};
console.log(docThree, docFour);
// lesson 20 - tuples
// let arr = ["ryu", 25, true] //based on inference
// arr[0] = false
// arr[1] = "yoshi"
// arr = [30, false, "yoshi"]
// let tup: [string, number, boolean] = ["ryu", 25, true]
// tup[0] = "ken"
// tup[1] = 30
// let student: [string, number]
// // student = [23234, 'ken']
// student = ["ken", 353]
