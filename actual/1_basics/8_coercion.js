/*
JS type coercion is the process where JS automatically convert values
from one data type to another. This can happen implicitly or explicitly.
Coercion is common in JS due to its weak typing, allowing flexibility
but also introducing potential for unexpected behaviours.

Types of Coercion
- Implicit Coercion: JavaScript automatically converts types when 
performing operations
- Explicit Coercion: The developer explicitly converts a value using 
JavaScript functions or operators
*/

/* Implicit Coercion */
// FUNCTIONALLY POSSIBLE BUT NOT RECOMMENDED

// Number to string
let result = "5" + 3;
console.log(result); // 53
console.log(typeof result); // string

result = 32 + "";
console.log(result); // 32
console.log(typeof result); // string

// String to number
result = "10" - 2;
console.log(result); // 8
console.log(typeof result); // number

// Boolean Coercion
if ("") {
  console.log("This won't run"); // Empty string is false
}
if ("hello") {
  console.log("This will run"); // Non-empty string is true
}

/* Explicit Coercion */
// Converting to a Number
let num = Number("42"); // 42
let num2 = parseInt("42"); // 42
let num3 = parseFloat("42.5"); // 42.5

// Converting to a String
let str = String(42); // "42"
let str2 = (42).toString(); // "42"

// Converting to a Boolean
let bool = Boolean(1); // true
let bool2 = Boolean(3); // true
let bool3 = Boolean(0); // false
