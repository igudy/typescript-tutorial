// interfaces
interface IsPerson {
  name: string
  age: number
  speak(a: string): void
  speak(a: number): number
}

import { Invoice } from "./classes/Invoice.js"

const invOne = new Invoice("mario", "work on the mario website", 250)
const invTwo = new Invoice("luigi", "work on the luigi website", 300)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)
// lesson 11 - The DOM and Type Casting
// The ! means that ! must return something
const anchor = document.querySelector("a")!

console.log(anchor.href)

const form = document.querySelector("form")!

// The below is an example of typecasting
const form2 = document.querySelector(".new-item-form") as HTMLFormElement

// console.log(form)
// console.log(form.children)

const type = document.querySelector("#type") as HTMLSelectElement
const toFrom = document.querySelector("#toFrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener("submit", (e: Event) => {
  e.preventDefault()

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)
})
