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
}

class Wizard extends Player {
  constructor(name, age) {
    super(name, age, 70, 70, 100);
  }

  attack() {
    console.log(`${this.name} casts a spell`);
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

const jay = new Wizard("Jay", 26);
console.log(jay);
jay.attack();

const alex = new Warrior("Alex", 24);
console.log(alex);
alex.attack();

console.log("---------------------");

console.log(jay instanceof Player); // true
console.log(jay instanceof Wizard); // true
console.log(jay instanceof Warrior); // false
