/*
Closure:
- a function that remembers the variables and scope it had access to
when it was created, even after the outer function that defined those
variables has returned
- it allows functions to access variables from their lexical scope,
no matter where the function is executed
=> the combination of a function and the lexical environment within 
which that function was declared.
=> roughly speaking, 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 말한다.


How does a closure work
: when a function is defined inside another function, the inner function
has access to ->
1. Its own scope
2. The scope of the outer function
3. The global scope
Even after the outer function has finished executing, the inner function retuains
a reference to the outer function's variables
*/

// getNum이 getNumInner보다 오래 살아있음 => Closure x
function getNum() {
  var num = 5;

  function getNumInner() {
    return num;
  }

  return getNumInner();
}

console.log(getNum());

/* ************************* */

// getNum보다 getNumInner이 더 오래 살아있음 => Closure o
function getNum2() {
  var num = 5;

  function getNumInner() {
    return num;
  }

  return getNumInner;
}

const runner = getNum2();

console.log(runner());

/* ************************* */
/*어디에 Closure가 쓰이는가? */
/*
1. Data caching
*/

// 오래 걸리는 연산을 불필요하게 반복해야할 때
function cacheFunc() {
  // Assume the calcualtion below takes a long time
  var num = 10 * 10;

  function innerCacheFunc(newNum) {
    return num * newNum;
  }
  return innerCacheFunc;
}

const runner2 = cacheFunc(); // 계산된 num이 저장돼 있음
console.log(runner2(10));

// 반복적으로 특정 값을 변경해야할 때

// 외부에서는 num의 값을 변경할 방법이 없는데 Closure가 이를 제공
function cacheFunc2() {
  var num = 99;

  function inc() {
    num++;
    return num;
  }
  return inc;
}

const runner3 = cacheFunc2();
console.log(runner3()); // 100
console.log(runner3()); // 101

/* 
2. 정보은닉
*/
/*
Why is it a Closure?
1. _year is decalred as a local variable inside the Idol function. This
means it is part of the lexical environment of Idol and cannot be accessed
directly outside the function. 
2. The function assigned to this.greeting forms a closure because it
remembers and retains access to _year, even after the Idol function has
finsiehd executing
*/
function Idol(name, year) {
  this.name = name;
  var _year = year;
  this.greeting = function () {
    return `Hello, I'm ${this.name} and was born in ${_year}`;
  };
}

const yuJin = new Idol("YuJin", 2003);
console.log(yuJin.greeting());
console.log(yuJin._year); // undefined
// there is no way to access to _year from outside
