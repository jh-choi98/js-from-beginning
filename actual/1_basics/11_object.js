let juho = {
  name: "Juho",
  age: 26,
  sayHello: function () {
    console.log(`hello I'm ${this.name}`);
  },
};

juho.sayHello();
console.log(juho.name);
console.log(juho["name"]);

console.log("-------------------");

const nameKey = "name";
const nameValue = "Juho";
const ageKey = "age";
const ageValue = 26;

const juho2 = {
  [nameKey]: nameValue,
  [ageKey]: ageValue,
};

console.log(juho2);

// Adding a field
juho2.korName = "최주호";
console.log(juho2);

// Deleting a field
delete juho2.korName;
console.log(juho2);

/*
const로 선언한 객체의 특징
1. const로 선언할 경우 객체 자체를 변경할 수 없다
2. 객체 안의 property나 메서드는 변경 할 수 있다
*/

/*
Getting all keys as an array
*/
console.log(Object.keys(juho));

/*
Getting all values as an array
*/
console.log(Object.values(juho));

/* shortcut*/
const name = "Juho";
const age = 26;
const juho3 = {
  name,
  age,
};

console.log(juho3);
