/*
객체를 선언할 때 사용할 수 있는 방법
1. object를 생성해서 객체 생성
2. class를 인스턴스화해서 생성
3. function을 사용해서 객체 생성 - 생성자 함수
*/

// 1. object를 생성해서 객체 생성
const juho = {
  name: "Juho",
  year: 1998,
};

// 2. class를 인스턴스화해서 생성
class Person {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const juho2 = new Person("Juho", 1998);

// 3. function을 사용해서 객체 생성 - 생성자 함수
function PersonFunction(name, year) {
  this.name = name;
  this.year = year;

  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I was born in ${this.year}`
    );
  };
}

// new 없이 호출하면 this가 전역 객체를 참조하게 된다.
const juho3 = new PersonFunction("juho", 1998);
juho3.greet();
