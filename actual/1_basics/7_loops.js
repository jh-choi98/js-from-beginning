// for loop - 6x6 square
let square = "";
const side = 6;
for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}
console.log(square);

console.log("--------------");

// for ... in
const person = {
  name: "Juho",
  birth: 1998,
};

for (let key in person) {
  console.log(key); // name, birth
}

const daysInWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (let index in daysInWeek) {
  console.log(index); // 0, 1, 2, 3, 4, 5, 6
}

console.log("--------------");

// for ... of: iterable type에만 사용 가능
for (let value of daysInWeek) {
  console.log(value); // mon, tue, wed, thu, fri, sat, sun
}

// do ... while
let number = 0;

do {
  number++;
} while (number < 10);

// break & continue
