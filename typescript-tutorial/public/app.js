import { Invoice } from "./classes/Invoice.js";
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
