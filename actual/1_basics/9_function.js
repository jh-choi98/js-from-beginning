/*
DRY
D -> Don't
R -> Repeat
Y -> Yourself
*/

/*
- Parameter: a variable listed as part of the function's definition
- Argument: the actual value that is passed to the function 
when it is called
*/
function mul(x, y = 10) {
  return x * y;
}

// A function is an object
console.log(typeof mul); // function
console.log(mul instanceof Object); // true

/*
Arrow function
*/
const mul2 = (x, y = 10) => {
  return x * y;
};

const mul3 = (x, y = 10) => x * y;

// x를 받는 함수는 y를 받는 함수를 실행
// y를 받는 함수는 z를 받는 함수를 실행
// z를 받는 함수는 작업을 수행
const mul4 = (x) => (y) => (z) => `x: ${x}, y: ${y}, z: ${z}`;
console.log(mul4(2)(3)(4));

function mul5(x) {
  return function (y) {
    return function (z) {
      return `x: ${x}, y: ${y}, z: ${z}`;
    };
  };
}

const mul6 = function (x, y) {
  return x * y;
};

const mul7 = function (x, y, z) {
  console.log(arguments); // [Arguments] { '0': 4, '1': 5, '2': 6 }
  return x * y * z;
};

// To use an indeterminate number of arguments
const mulAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(mulAll(2, 3, 4, 5, 6, 7));

/* 
Immediately Invoked Function Expression (IIFE)
- a function that runs as soon as it is defined.
- This pattern is used to execute a function immediately after
defining it, creating a scope that helps prevent variables from
polluting the global namespace
- ensures that JS treats it as an expression rather than a function
declaration
- is invoked right after it's defined, so it runs only once and doesn't
need to be called elsewhere in your code
*/
(function (x, y) {
  console.log(x * y);
})();
