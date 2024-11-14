class Person {
  name;
  birthYear;

  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  /*
  Getter
  1. When processing data to return new data
  2. When returning private values

  - used to access a property value
  - allows you to define a function that acts like a property, without
    calling the function explicitly
  - useful for encapsulating logic that computes or processes a value
  */
  get nameAndBirthYear() {
    return `${this.name}-${this.birthYear}`;
  }

  set name(name) {
    this.name = name;
  }
}

const juho = new Person("Juho", 1998);
console.log(juho);
console.log(juho.nameAndBirthYear);
juho.name = "Juho Choi";
console.log(juho);

console.log("-------------------------");

class Person2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const juho2 = new Person2("Juho", 1998);
console.log(juho2); // Person2 { year: 1998 }
console.log(juho2.name); // Juho
juho2.name = "Juho Choi";
console.log(juho2.name); // Juho Choi
