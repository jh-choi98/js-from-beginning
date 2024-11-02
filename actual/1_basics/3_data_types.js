/*
Static Typing
    - the type of a variable is determined at compile-time
    - variables need to be explicitly declared with a type
    - once declared, they cannot hold values of a different type
    - C, C++, Java, and TS

Dynamic Typing
    - the type of a variable is determined at runtime
    - No need to explicitly declares a type
    - variables' types can change dynamically as the code runs
    - JS, Python, Ruby and PHP
*/

/*
Data Types
: 7 primitive types + 1 object type

Primitive types: a basic data type provided by a programming 
language as a building block for more complex types
    1. Number
    2. String
    3. Boolean
    4. undefined: a variable that has been declared but not yet assigned a value. 
                  Initializing with this type should be avoided
    5. null: an intentional absence of any value
    6. Symbol: unique, immutable identifiers, mainly used for object properties
               This type is often used as keys for object properties to avoid naming conflicts
    7. BigInt: 이론적으로 크기 제한이 없다. BigInt 타입끼리만 연산 가능

Object type: a collection of properties and methods, 
where a property is an association between a key and a value, 
and a method is a function associated with an object.
This types are reference types, meaning they are stored by reference.
When you assign an object to a variable or pass it to a function,
JS assigns a reference to the object rather than a copy.
This behaviour contrasts with primitive types, which are copied by value

    1. Object
    2. Array
    3. Function
*/

// Object - Object
const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

console.log(person.name); // Alice
person.name = "Bob";
console.log(person.name); // Bob

person.greet();

// Object - Array
const fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // object

// Object - Function
function greet() {
  console.log("Hello!");
}

// Symbol
const sym1 = Symbol("a");
const sym2 = Symbol("a");
console.log(sym1 === sym2); // false, bc each symbol is unique

const myObj = {
  [sym1]: "This is a symbol property",
  name: "Regular property",
};

// Symbols are not enumerable in for ... in loops,
// making them useful for "hidden" or special-purpose properties
// that shouldn’t be exposed during iteration
for (const key in myObj) {
  console.log(key); // Output: "name"
}
