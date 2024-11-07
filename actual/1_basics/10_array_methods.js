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
