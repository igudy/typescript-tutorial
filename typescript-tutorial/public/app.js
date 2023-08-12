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
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
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
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
