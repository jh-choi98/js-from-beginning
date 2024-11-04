let number = 1;
let result = 1;

/*
Post-Increment (variable++)
: the variable is used in the expression first, and then it is 
incremented
*/
result = number++;
console.log(result, number); // 1, 2

/*
Pre-Increment (++variable)
: the variable is incremented first, and then the new value is
used in the expression
*/
result = ++number;
console.log(result, number); // 3, 3

console.log("-----------------");
/*
Unary Plus Conversion
*/
// string
let sample = "99";
console.log(typeof sample); // string

console.log(typeof +sample); // number

console.log(+"abc"); // NaN
console.log(typeof +"abc"); // number

console.log("-----------------");
// bool
sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0

/*
Unary Minus Conversion
*/
console.log("-----------------");
sample = "99";

console.log(-sample); // -99
console.log(typeof -sample); // number

sample = true;
console.log(-sample); // -1
console.log(typeof -sample); // number

/*
Comparison Operator
*/
console.log("-----------------");
// Comparing value only (should be avoided) -- the same goes for !=
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(0 == ""); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true == "1"); // true

console.log("-----------------");
// Comparing both value and type -- the same goes for !==
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(0 === ""); // false
console.log(true === 1); // false
console.log(false === 0); // false
console.log(true === "1"); // false

console.log("-----------------");
console.log(5 <= "10"); // true
console.log(5 >= "10"); // false
console.log(5 >= "abc"); // false
console.log(5 <= "abc"); // false

console.log("-----------------");
/*
Ternary Operator
*/
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

console.log("-----------------");
/*
Short Circuit Evaluation

&&
- 좌측이 true면 우측 값 반환
- 좌측이 false면 false 반환

||
- 좌측이 true면 true 반환
- 좌측이 false면 우측 값 반환
*/
console.log(true && "Juho"); // Juho
console.log(false && "Juho"); // false
console.log("Juho" && true); //  true
console.log("Juho" && false); // false

console.log("-----------------");
console.log(true || "Juho"); // true
console.log(false || "Juho"); // Juho
console.log("Juho" || true); //  Juho
console.log("Juho" || false); // Juho

console.log("-----------------");
/*
Exponent Operator
*/
console.log(2 ** 3); // 8

console.log("-----------------");
/*
Null Operator
: 좌측 값이 null or undefined일 경우 우측 값을 반환해라
*/
let name;
console.log(name); // undefined
name = name ?? "Juho"; // name ??= "Juho"
console.log(name); // Juho

name = name ?? "Jay";
console.log(name); // Juho
