/*
Immutable Object
*/

const juho = {
  name: "Juho Choi",
  birthYear: 1998,

  get age() {
    return new Date().getFullYear() - this.birthYear;
  },

  set age(age) {
    this.year = new Date().getFullYear - age;
  },
};

/*
Extensible: a method that stops an object from having new properties
added to it. ONce an object has been marked as non-extensible using
this method, you cannot add any new properties to it. However,
it does not prevent the deletion or modification of existing properties

1. No new properties
2. Deleting an existing properties allowed
3. Modifying existing properties allowed
*/

console.log(Object.isExtensible(juho)); // true
juho["major"] = "CS/BBA";

Object.preventExtensions(juho);

console.log(Object.isExtensible(juho)); // false
juho["gender"] = "Male"; // Does not work

delete juho["major"]; // Works
console.log(juho);

juho.name = "Juho"; // Does not work
console.log(juho);

console.log("-------------------------");

/*
Seal: a method that seals an object, meaning it fixes the object's
structure while still allowing changes to the existing property values.
After sealing, the object cannot be extended with new properties,
nor can existing properties be removed.

1. No new properties
2. No property deletion
3. Modifying existing values is allowed
4. Limited use of Object.defineProperty()
*/

const juho2 = {
  name: "Juho Choi",
  birthYear: 1998,

  get age() {
    return new Date().getFullYear() - this.birthYear;
  },

  set age(age) {
    this.year = new Date().getFullYear - age;
  },
};

console.log(Object.isSealed(juho2)); // false
Object.seal(juho2);
console.log(Object.isSealed(juho2)); // true

console.log("-------------------------");

/*
Freeze: a method that takes an object and makes it completely immutable,
meaning you cannot add new properties, remove existing properties, or
change the values of existing properties. 

1. No new properties
2. No property removal
3. No modification
4. No re-configuration of properties
*/

const juho3 = {
  name: "Juho Choi",
  birthYear: 1998,

  get age() {
    return new Date().getFullYear() - this.birthYear;
  },

  set age(age) {
    this.year = new Date().getFullYear - age;
  },
};

console.log(Object.isFrozen(juho3)); // false
Object.freeze(juho3);
console.log(Object.isFrozen(juho3)); // true

/*
Non-Extensible vs Sealed vs Frozen

1. Non-Extensible:    Object.preventExtensions([obj]);
    - Addition x 
    - Deletion o
    - Modification o

2. Sealed:    Object.seal([obj]);
    - Addition x
    - Deletion x
    - Modification o

3. Frozen:
    - Addition x
    - Deletion x
    - Modification x

** 이 메소드들 모두 하위 오브젝트에는 영향을 미치지 않음
*/

console.log("-------------------------");

const juho4 = {
  name: "Juho Choi",
  birthYear: 1998,
  major: {
    first: "CS",
    second: "BBA",
  },

  get age() {
    return new Date().getFullYear() - this.birthYear;
  },

  set age(age) {
    this.year = new Date().getFullYear - age;
  },
};

console.log(Object.isFrozen(juho4)); // false
Object.freeze(juho4);
console.log(Object.isFrozen(juho4)); // true

console.log(Object.isFrozen(juho4.major)); // false
