function IdolModel(name, year) {
  if (!new.target) {
    return new IdolModel(name, year);
  } // new keyword를 안 붙인 실수를 대비

  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name} is dancing`;
  };
}

const yuJin = new IdolModel("안유진", 2003);
/* this => IdolModel {}*/

const yuJin2 = IdolModel("안유진", 2003); // undefined
/* this => Object [global]*/
/* new를 붙이지 않으면 this 키워드는 global을 기리킴*/

const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};

const yuJin3 = new IdolModelArrow("안유진", 2003);
// TypeError: IdolModelArrow is not a constructor
// new keyword는 일반 함수에서만 사용가능하다.
