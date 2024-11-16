/*
static methods or properties belong to the class itself
rather than to instances of the class. This means you can
call a static method or access a static property without
creating an instance of the class
*/

// class Person {
//   name;
//   year;
//   static region = "Waterloo";

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   static returnGroupName() {
//     return this.region;
//   }
// }

// const juho = new Person("Juho", 1998);
// console.log(juho); // Person { name: 'Juho', year: 1998 }
// console.log(Person.region); // Waterloo => class 자체에 귀속
// console.log(Person.returnGroupName()); // Waterloo => class 자체에 귀속

/*
Factory Constructor
*/

class Person {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(object) {
    return new Person(object.name, object.year);
  }

  static fromList(list) {
    return new Person(list[0], list[1]);
  }
}

const juho = Person.fromObject({
  name: "Juho",
  year: 1998,
});
console.log(juho);

const juho2 = Person.fromList(["Juho2", 1998]);
console.log(juho2);
