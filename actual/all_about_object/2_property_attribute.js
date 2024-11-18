/*
Property Attribute

1. 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
2. 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
                설정할 때 호출되는 함수로 구성된 프로퍼티
                ex. getter and setter
*/

const juho = {
  name: "Juho",
  year: 1998,
};

console.log(Object.getOwnPropertyDescriptor(juho, "year"));
// { value: 1998, writable: true, enumerable: true, configurable: true }

/*
1. value: 실제 프로퍼티의 값
2. writable: 값을 수정할 수 있는지 여부. false로 설정하면 프로터피 값을
수정할 수 없다.
3. enumerable: 열거가 가능한지 여부. for...in 룹 등을 사용할 수 있으면
true를 반환한다.
4. configurable: property attribute의 재정의가 가능한지 여부를 판단한다.
false일 경우 프로퍼티 삭제나 attribute 변경이 금지된다.
단, writable이 true인 경우 값 변경과 writable을 변경하는건
가능하다.
*/

console.log(Object.getOwnPropertyDescriptor(juho, "name"));
// { value: 'Juho', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptors(juho));
/*
{
  name: {
    value: 'Juho',
    writable: true,
    enumerable: true,
    configurable: true
  },
  year: { value: 1998, writable: true, enumerable: true, configurable: true }
}*/

// Accessor Property - Getter and setter
const juho2 = {
  name: "Juho",
  year: 1998,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(juho2.age);
juho2.age = 35;
console.log(juho2.age);
console.log(juho2.year);

console.log(Object.getOwnPropertyDescriptor(juho2, "age"));

console.log("-------------------------");

/*
{
  get: [Function: get age],
  set: [Function: set age],
  enumerable: true,
  configurable: true
}

Accessor property는 value property attribute가 존재하지 않음
*/

Object.defineProperty(juho2, "height", {
  value: 169,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(juho2); // { name: 'Juho', year: 1989, age: [Getter/Setter], height: 169 }
console.log(Object.getOwnPropertyDescriptor(juho2, "height"));
// { value: 169, writable: true, enumerable: true, configurable: true }

console.log("-------------------------");

/*
Writable
*/

Object.defineProperty(juho2, "height", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(juho2, "height"));
// { value: 169, writable: false, enumerable: true, configurable: true }

juho2.height = 170;
console.log(juho2); // { name: 'Juho', year: 1989, age: [Getter/Setter], height: 169 }

console.log("-------------------------");

/*
Enumerable
*/
console.log(Object.keys(juho2)); // [ 'name', 'year', 'age', 'height' ]

// name year age height
for (let key in juho2) {
  console.log(key);
}

Object.defineProperty(juho2, "height", {
  enumerable: false,
});

console.log(Object.keys(juho2)); // [ 'name', 'year', 'age' ]

// name year age
for (let key in juho2) {
  console.log(key);
}

console.log(juho2); // { name: 'Juho', year: 1989, age: [Getter/Setter] }
console.log(juho2.height); // 169

console.log("-------------------------");

/*
Configurable
*/

Object.defineProperty(juho2, "height", {
  writable: true,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(juho2, "height"));
// { value: 169, writable: false, enumerable: false, configurable: false }

// TypeError: Cannot redefine property: height
// Object.defineProperty(juho2, "height", {
//   enumerable: true,
// });

Object.defineProperty(juho2, "height", {
  value: 170,
});

console.log(Object.getOwnPropertyDescriptor(juho2, "height"));
// { value: 170, writable: true, enumerable: false, configurable: false }

Object.defineProperty(juho2, "height", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(juho2, "height"));
// { value: 170, writable: false, enumerable: false, configurable: false }

/*
configurable을 false로 만들면 default로 property attribute는 변경이 불가능
다만, writable이 true일 때, value 값을 변경이 가능
또, writable을 true에서 false로 바꿀 수 있음. 반대는 불가능
*/
