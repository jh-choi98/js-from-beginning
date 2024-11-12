let daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// push(): 배열 제일 마지막에 추가한 뒤, 길이를 반환
console.log(daysInWeek.push("8th Day")); // 8
console.log(daysInWeek); // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '8th Day']

console.log("-----------------");

// pop(): 배열 마지막 요소를 반환한 뒤, 제외
console.log(daysInWeek.pop()); // 8th Day

console.log("-----------------");

// shift(): 배열 제일 앞 요소를 반환한 뒤, 제외
console.log(daysInWeek.shift()); // Mon

console.log("-----------------");

// unshift(): 배열 제일 앞에 요소 추가한 뒤, 길이를 반환
console.log(daysInWeek.unshift("Mon")); // 7

console.log("-----------------");

// splice(): allows you to add or remove elements in an array and modifies
// the orginal array
console.log(daysInWeek.splice(1, 2)); // [ 'Tue', 'Wed' ]
console.log(daysInWeek); // [ 'Mon', 'Thu', 'Fri', 'Sat', 'Sun' ]

console.log("-----------------");

// Previous methods change the originals
/* ********************************** */
// Some of the following methods don't change the originals

daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// slice([start], [end]): create a shallow copy of a portion of an array or string,
// without modifying the original array
console.log(daysInWeek.slice(1, 4)); // [ 'Tue', 'Wed', 'Thu' ]
console.log(daysInWeek.slice(1)); // [ 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]

console.log("-----------------");

// concat(): merges two or more arrays (or strings) and returns a new array or string,
// without modifying the originals
console.log(daysInWeek.concat("Hello")); //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Hello']
console.log(daysInWeek); // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

console.log("-----------------");
// spread operator: creates a shallow copy of the array
// so changes made to daysInWeeks2 will not affect daysInWeek, and vice versa
let daysInWeek2 = [...daysInWeek];
console.log(daysInWeek2); //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// The line below assigns daysInWeek3 to reference the array as daysInWeek, not a copy
// so both daysInWeek3 and daysInWeek point to the same array in memory
// therefore, any changes made to daysInWeek3 will also affect daysInWeek, and vice versa
let daysInWeek3 = daysInWeek;
console.log(daysInWeek3); // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

console.log(daysInWeek2 === daysInWeek); // false
console.log(daysInWeek3 === daysInWeek); // true

console.log("-----------------");
// join(): combines all elements of an array into a single string.
// You can specify a separator to insert between each element.
console.log(daysInWeek.join()); // Mon,Tue,Wed,Thu,Fri,Sat,Sun
console.log(daysInWeek.join(" ")); // Mon Tue Wed Thu Fri Sat Sun

console.log("-----------------");
// sort([compareFunc: optional])
daysInWeek.sort();
console.log(daysInWeek); // ['Fri', 'Mon', 'Sat', 'Sun', 'Thu', 'Tue', 'Wed']

/*
When comparing a and b, the compare function (a, b) => a - b works as follows:
- If a - b < 0, a is smaller than b, so a should come
  before b in the sorted order
- If a - b > 0, a is larger than b, so b should come
  before a
- If a - b == 0, a and b are equal, so their relative order
  doesn't change
*/
let nums = [1, 4, 3, 6, 5, 9];
nums.sort((a, b) => (a > b ? 1 : -1)); // ascending
nums.sort((a, b) => (a > b ? -1 : 1)); // descending

console.log("-----------------");

// reverse(): reverses the order of the elements in an array in place, meaning
// modifies the original array
// It is often used after sort() to get a descending order of elements
daysInWeek.reverse();
console.log(daysInWeek); // ['Wed', 'Tue', 'Thu', 'Sun', 'Sat', 'Mon', 'Fri']

console.log("-----------------");

// map(): creates a new array populated with the results of
// calling a provided function on every element in the calling array.
// It does not modify the original array
console.log(nums); // [ 9, 6, 5, 4, 3, 1 ]
console.log(nums.map((num) => num * 2)); // [ 18, 12, 10, 8, 6, 2 ]

console.log("-----------------");

// filter(): creates a new array with all elements that pass a test
// without modifying the orginal array
console.log(nums.filter((x) => x % 2 === 0)); // [ 6, 4 ]

// find(): searches for a specific element in an array that meets
// a certain condition. It returns the first element that satisfies
// the condition; returns undefined otherwise
console.log(nums.find((x) => x % 2 === 0)); // 6

// findIndex: searches for a specific element in an array that meets
// a certain condition, and returns its index; -1 otherwise.
console.log(nums.findIndex((x) => x % 2 === 0)); // 1

console.log("-----------------");

/*
reduce(): processes elements in an array and reduce them to
a single accumulated value.

array.reduce(callback(acc, curValue, index: opt, array: opt), initValue: opt) => acc

- When initialValue is provided:
  reduce uses initialValue as the starting accumulator value.
  The index for currentValue starts from 0 because the reduction process 
  begins with the first element of the array.

- When initialValue is not provided:
  reduce takes the first element of the array as the initial accumulator value.
  The index for currentValue starts from 1 because the reduction skips 
  the first element, treating it as the accumulator directly.
*/

// Summing Numbers
let sum = nums.reduce((acc, curVal) => acc + curVal, 0);
console.log(sum); // 28

sum = nums.reduce((acc, curVal) => acc + curVal);
console.log(sum); // 28

console.log("-----------------");

nums = [5, 10, 15, 20];

const sumWithInitVal = nums.reduce((acc, curVal, index) => {
  console.log(`Index: ${index}, Accumulator: ${acc}, Current Value: ${curVal}`);
  return acc + curVal;
}, 0);

console.log(`Total Sum: ${sumWithInitVal}`);

/*
Index: 0, Accumulator: 0, Current Value: 5
Index: 1, Accumulator: 5, Current Value: 10
Index: 2, Accumulator: 15, Current Value: 15
Index: 3, Accumulator: 30, Current Value: 20
Total Sum: 50
*/

const sumWithoutInitVal = nums.reduce((acc, curVal, index) => {
  console.log(`Index: ${index}, Accumulator: ${acc}, Current Value: ${curVal}`);
  return acc + curVal;
});

console.log(`Total Sum: ${sumWithoutInitVal}`);

/*
Index: 1, Accumulator: 5, Current Value: 10
Index: 2, Accumulator: 15, Current Value: 15
Index: 3, Accumulator: 30, Current Value: 20
Total Sum: 50
*/

console.log("-----------------");

nums = [1, 8, 3, 5, 9];
const max = nums.reduce((acc, curVal) => Math.max(acc, curVal));
console.log(max);
