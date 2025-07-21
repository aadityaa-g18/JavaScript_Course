//  Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 345656324682723n  // BigInt


// Reference Type (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"] // array
let myObj = {  // object
    name: "aditya",
        age:22
}

const myFunction = function () {
    console.log("hello world");
}

console.log(typeof heros);

// undefined --> undefined
// null      --> object
// Boolean   --> boolean
// String    --> string
// function  --> function object
// arrays    --> object
// symbol    --> symbol



