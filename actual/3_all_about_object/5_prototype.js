/*
Prototype
- an internal (hidden) property that every obj holds
- it references another obj (or null) from which the current obj
  inherits properties and methods
- we can interact with it through the __proto__ property or the standardized
  methods Object.getPrototypeOf() and Object.setPrototypeOf()

In JS, every obj internally has a hidden reference called [[Prototype]].
The property [obj].__proto__ is an accessor property that provides 
a way to get or set this internal prototype. In simpler terms, by using
[obj].__proto__, you can see which prototype the object inherits from,
or you can change its prototype

Prototype-Based Inheritance
- is JS's core inheritance model, where objects can directly inherit properties
and methods from other objects
- unlike class-based inheritance seen in many other languages, JS doesn't need
a blueprint or class to create new objects. Instead:

1. Objects have prototypes: every object has a hidden reference to another
object called its prototype
2. Prototype chain: if an obj doesn't have a  requested property, JS looks up the chain of
prototypes to find it. If it reaches the end of the chain without finding the property,
it returns undefined -> ??? an example of the requested property,
3. Inheritance via linking: by setting one object as the prototype of another, you can share
properties or methods without duplicating them. Essentially, when you access a property on
a child obj, JS first looks at the child's own properties; if it's not there, it chekcs the 
parent's properties, and so on up the chain or reaches null
4. ES6 classes are syntactic sugar: even though JS allows you to use class syntax, it is still
built on top of the same prototype-based system. Under the hood, class definitions manage prototypes
for you but do not change how inheritance fundamentally works in JS 
*/

/* ************ Prototype-Based approach (JS) ************ */
const animal = {
  type: "animal",
  sound: "generic sound",
  makeSound() {
    console.log(`The ${this.type} says: ${this.sound}`);
  },
};

// Create a new obj that has "animal" as its prototype
const dog = Object.create(animal);
dog.type = "dog";
dog.sound = "woof";

// Call the inherited method
dog.makeSound(); // The dog says: woof

console.log(Object.keys(animal)); // [ 'type', 'sound', 'makeSound' ]
console.log(Object.keys(dog)); // [ 'type', 'sound' ]
/* 
=> Since makeSound() is not defined on the "dog" object and 
defined on the prototype (animal), when dog.makeSound() is called,
it is accessed through the prototype chain
*/

//Check the prototype of "dog"
console.log(Object.getPrototypeOf(dog) === animal); // true

/* ************ Class-Based approach (JS) ************ */
class Animal {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.type} says: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor() {
    super("dog", "woof");
  }
}

const dog2 = new Dog();
dog2.makeSound(); // The dog says: woof
/* ************************ */

const testObj = {};
console.log(testObj.__proto__);
