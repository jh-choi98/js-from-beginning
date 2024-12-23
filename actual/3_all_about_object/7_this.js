/*
JS는 lexical scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가된다.
하지만, this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
*/

/*
Regular function:
- has its own 'this' context
- 'this' depends on how the function called. In strict mode, standalone
calls give undefined; in non-strict mode, 'this' is the global object
*/

// regular function expression
const testFunction = function () {
  return this;
};

console.log(testFunction());
console.log(testFunction() === global); // true

const juho = {
  name: "Juho Choi",
  year: "1998",
  sayHello: function () {
    return `Hello I'm ${this.name}`;
  },
};
console.log(juho.sayHello());

function Person(name, year) {
  this.name = name;
  this.year = year;
  this.sayHello = function () {
    return `Hello I'm ${this.name}`;
  };
}

const juho2 = new Person("Juho Choi", 1998);
console.log(juho2.sayHello());

Person.prototype.dance = function () {
  function dance2() {
    return `${this.name} is dancing`;
  }
  return dance2();
};
console.log(juho2.dance()); // undefined is dancing
/*
Arrow function:
- does not have its own 'this'; it inherits 'this' from the parent scope
(lexical binding)
- typically in a top-level scope, that 'this' ends up being undefined (in strict mode)
or global (in non-strict, depending on environment)
*/

// arrow function
const testFunction2 = () => {
  return this;
};
// console.log(testFunction2());

console.log("******************************");

/*
this 키워드가 어떤걸 가리키냐는 3가지만 기억하면 됨
1. 일반 함수를 호출할 땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
2. 메서드로 호출할 땐 호출된 객체를 가리킨다.
3. new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.
*/

/*
원하는 값으로 this를 mapping하는 법
1. apply()
2. call()
3. bind()
*/

function returnName() {
  return this.name;
}
console.log(returnName()); // undefined

const juho3 = {
  name: "Juho Choi",
};

console.log(returnName.call(juho3)); // Juho Choi
console.log(returnName.apply(juho3)); // Juho Choi

/*
실행하는 순간 바로 실행
1. call: comma를 기반으로 argument를 순서대로 넘겨줌
2. apply: argument를 리스트로 입력해야함
*/

function mul(x, y, z) {
  return `${this.name} / ${x * y * z}`;
}

console.log(mul.call(juho3, 3, 4, 5)); // Juho Choi / 60
console.log(mul.apply(juho3, [3, 4, 5])); // Juho Choi / 60

/*
바인드를 한 뒤 나중에 실행 가능
bind()
*/
const laterFunc = mul.bind(juho3, 3, 4, 5);
console.log(laterFunc); // [Function: bound mul]
console.log(laterFunc()); // Juho Choi / 60
