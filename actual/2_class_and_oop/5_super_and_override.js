class Player {
  name;
  age;
  health;
  attackPower;
  intelligence;

  constructor(name, age, health = 0, attackPower = 0, intelligence = 0) {
    this.name = name;
    this.age = age;
    this.health = health;
    this.attackPower = attackPower;
    this.intelligence = intelligence;
  }

  attack() {
    console.log(`${this.name} attacks with default power`);
  }

  sayHello() {
    return `Hello, my name is ${this.name}!`;
  }
}

class Wizard extends Player {
  spell;

  constructor(name, age, spell) {
    super(name, age, 70, 70, 100);
    this.spell = spell;
  }

  attack() {
    console.log(`${this.name} casts a spell`);
  }

  sayHello() {
    return `${super.sayHello()} ${this.spell} 마법을 할 수 있습니다.`;
  }
}

class Warrior extends Player {
  constructor(name, age) {
    super(name, age, 100, 90, 50);
  }
  attack() {
    console.log(`${this.name} attacks with a sword`);
  }
}

const jay = new Wizard("Jay", 26, "Fire");
console.log(jay);
jay.attack();

const alex = new Warrior("Alex", 24);
console.log(alex);
alex.attack();

console.log("---------------------");

console.log(jay instanceof Player); // true
console.log(jay instanceof Wizard); // true
console.log(jay instanceof Warrior); // false
