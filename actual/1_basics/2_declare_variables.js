/*
1. var - no longer used, can change a value later
2. let - can change a value later
3. const - cannot change a value later
*/

var age1 = 31;
age1 = 41;

let age2 = 32;
age2 = 42;

const age3 = 33;
age3 = 43; // TypeError: Assignment to constant variable

let age4; // Declaration
console.log(age4); // undefined
age4 = 34; // Assignment

let age5 = 35; // Initialization (Declaration + Assignmnet)
