"use strict";
// lesson 2
// const character = "mario"
// console.log(character)
// const inputs = document.querySelectorAll("input")
// console.log(inputs)
// lesson 3
// typescript uses inference, because the values below is string, number or boolean, it automatically makes the variable name of that data type
// let character = "mario"
// let age = 30
// let isBlackBelt = false
// character = "grace"
// isBlackBelt = true
// age = 4
// // assigning type and not using inference
// const circ = (diameter: number) => {
//   return diameter * Math.PI
// }
// console.log(circ(4))
// lesson 4 - arrays
// let names = ["luigi", "mario", "yoshi"]
// names.push("toad")
// names.push("rice")
// names[1] = "grace"
// console.log(names)
// // objects
// let ninja = {
//   name: "mario",
//   belt: "black",
//   age: 30,
// }
// ninja.age = 40
// ninja.name = "ryu"
// ninja.age = "30"
// lesson 5 - explicit types
// let character: string
// let age: number
// let isLoggedIn: boolean
// isLoggedIn = false
// age = 12
// character = "gamer"
// // arrays
// let ninjas: string[]
// ninjas = ["grace", "esther", "mario"]
// ninjas.push("shaun")
// console.log(ninjas)
// union types
// You use parantheses for the union types if its in front of an array
// let mixed: (string | number | boolean)[] = []
// mixed.push("hello")
// mixed = ["grace", "philip", false, 54]
// console.log(mixed)
// let uid: string | number
// // objects
// let ninjaOne: object
// ninjaOne = { name: "yoshi", age: 30 }
// let ninjaTwo: {
//   name: string | boolean
//   age: number
//   beltColor: string
// }
// ninjaTwo = {
//   name: false,
//   age: 34,
//   beltColor: "black",
// }
// console.log(ninjaTwo)
// lesson 6 - any
// let age: any = 25
// age = true
// console.log(age)
// age = "hello"
// console.log(age)
// age = true
// console.log(age)
// age = 4
// console.log(age)
// age = { name: "grace" }
// console.log(age)
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false)
// let ninja: { name: any; age: any }
// ninja = { name: "grace", age: 5 }
// console.log(ninja)
// console.log("testing")
// let greet: Function
// greet = () => {
//   console.log("Hello, again")
// }
// // Always put the optional parameter at the end
// const add = (a: number, b: number, c: number | string = 10) => {
//   // we dont use the question mark and the = together
//   // c? - optional parameter
//   console.log(a + b)
//   console.log(c)
// }
// add(5, 10, 20)
// // This function above return number
// const minus = (a: number, b: number): number => {
//   return a * b
// }
// // This function returns void. By default a function returns void if it those not have a value that it is returning
// const minusVoid = (a: number, b: number): void => {
//   console.log(a)
// }
// let result = minus(10, 7)
// lesson 9 - Aliases
// type StringOrNum = string | number
// type objWithName = { name: string; uid: StringOrNum }
// const logDetails = (uid: StringOrNum, item: String) => {
//   console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`)
// }
// const greetAgain = (user: objWithName) => {
//   console.log(
//     `${user.uid} is the user id and ${user.name} have that particular id`
//   )
// }
// console.log(greetAgain({ name: "Goodness", uid: 3 }))
// lesson 10 - function signature
// let greet: Function
// // example 1
// let gree: (a: string, b: string) => void
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`)
// }
// // example 2
// let calc: (a: number, b: number, c: string) => number
// let add: number
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === "add") {
//     add = numOne + numTwo
//     console.log(add)
//     return add
//   } else {
//     return numOne - numTwo
//   }
// }
// // example 3
// let logDetails: (obj: { name: string; age: number }) => void
// type person = { name: string; age: number }
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`)
// }
