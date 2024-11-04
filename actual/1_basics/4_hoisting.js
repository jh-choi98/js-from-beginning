/* 
Hoisting
: JS's default behaviour of moving declarations to the top of their
containing scope during the compilation phase. This means that
variables and function declarations are proccessed before any code is
executed, allowing them to be referenced even before their actual
declaration in the code

JS Code Execution
1. Compilation Phase
    - Creation of Execution Context:
        - For each scope (global or function), an execution context
        is created
        - During this phase, the JS engine scans through the code to find
        all variable and function declarations
    - Hoisting Declarations:
        - Variable Declarations (var): the engine hoists the declaration to 
        the top and sets it to undefined
        - Variable Declarations (let / const): the engine hoists the declarations
        to the top, but they are not initialized  (TDZ starts)
        - Function Declarations: entire function bodies are hoisted, allowing
        them to be called before their definitions
2. Execution Phase
    - The code is executed line by line
    - Variables are assigned their values during this phase
    - Variables with let/const are initialized (TDZ ends)
*/

/*
Variable Decalrations
- var Declarations:
    - Function-scoped
    - Hoisted to the top of their scope and initialized to undefined
    - Can be accessed before their declaration without causing an error
    (though the value will be undefined)
- let and const Declarations:
    - Block-scoped
    - Hoisted to the top of their block but not initialized until their
    declaration is evaluated
    - Cannot be accessed before their declaration -- doing so triggers
    a ReferenceError

Temporal Dead Zone (TDZ)
- a concept in JS that applies to variables declared with let and const
- the period btw the beginning of a scope (like a block or function) and
the point where a variable declared with let or const is initialized.
During this time period:
    - the variable exists in the scope but is uninitialized
    - any attempt to read or write to the variable results in a ReferenceError

Advantages of TDZ
- preventing undesirable behaviours: avoids issues caused by accessing variables 
before they are properly initialized
- encouraging explicit declarations: developers are prompted to declare variables 
at the beginning of their scope
*/

// The typeof operator returns undefined for variables that have not
// been declared, and no error is thrown in this case
// console.log(typeof a); // Outputs: 'undefined'

// b is declared after you attempting to access.
// In this case, b is hoisted within its scope but remains uninitialized,
// placing it in the TDZ. Accessing a variable in the TDZ results in a ReferenceError
// console.log(typeof b); // ReferenceError: Cannot access 'b' before initialization
// let b = 3;

let z = z + 1; // ReferenceError

var x = x + 1;
console.log(x); // NaN (no error)

console.log(name); // undefined (no error)
var name = "Juho";

console.log(name2); // ReferenceError
let name2 = "Juho";
