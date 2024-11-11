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
let number = [1, 4, 3, 6, 7, 5, 9];

console.log("-----------------");
// reverse(): reverses the order of the elements in an array in place, meaning
// modifies the original array
// It is often used after sort() to get a descending order of elements
daysInWeek.reverse();
console.log(daysInWeek); // ['Wed', 'Tue', 'Thu', 'Sun', 'Sat', 'Mon', 'Fri']
