/*
JS -> Lexical Scope

Lexical scope
: the idea that a variable's scope is determined by its position
in the source code. In other words, where you write your function
in the code decides which variables it has access to, not where or how
you call that function at runtime

Dynamic scope
: a function's accessible variables depend on how/where the function 
is called at runtime

*/

const num = 3;

function fOne() {
  const num = 100;

  fTwo(); // 3
}

function fTwo() {
  console.log(num);
}

fOne();

/* **************************** */
var i = 999;

// block level scope
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`[var] i in the global var: ${i}`); // 10

/* **************************** */

i = 999;
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`[let] i in the global var: ${i}`); // 999

/*
- var 키워드는 함수 레벨 스코프만 만들어낸다 => 사용 x
- let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다
*/
