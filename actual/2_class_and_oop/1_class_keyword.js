// class명은 대문자
class Person {
  // Its type is function
  // defining properties explicitly is optional
  name;
  birthYear;

  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getName() {
    return this.name;
  }
}

const juho = new Person("Juho", 1998); // Its type is object
console.log(juho);

const john = new Person("John", 1990);
console.log(john);

console.log(juho.sayName());
