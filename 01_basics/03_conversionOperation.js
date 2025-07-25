let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score) // score of type string is converted to score of type number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0
// Null => 0
// aditya => NaN
//undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "aditya" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********************** Operations ************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " aditya"
let str3 = str1 + str2
// console.log(str3);


// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2);

// console.log((3+4)*5%3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion