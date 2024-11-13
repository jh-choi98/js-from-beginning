/*
- Copy by value
- Copy by reference

1. 기본적으로 모든 primitive 값은 copy by value다
2. 객체는 copy by reference다
*/

// copy by value
let origin = "hello";
let clone = origin;

console.log(origin);
console.log(clone);

console.log("------------------");

clone += " world";
console.log(origin);
console.log(clone);

console.log("------------------");

// copy by reference
let originObj = {
  name: "Juho",
  age: 26,
};

let cloneObj = originObj;

console.log(originObj);
console.log(cloneObj);

console.log("------------------");

originObj.age += 1;
console.log(originObj);
console.log(cloneObj);

console.log("------------------");

// Spread Operator
const originObj2 = {
  ...originObj,
};

console.log(originObj === originObj2); // false
