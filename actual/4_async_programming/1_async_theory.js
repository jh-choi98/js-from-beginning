function longWork() {
  const now = new Date();
  /*
    milliseconds since epoch
    : 1970년 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
    밀리초로 반환한다.
  */
  const milliseconds = now.getTime();
  const afterTwoSeconds = milliseconds + 2000;
  while (new Date().getTime() < afterTwoSeconds) {}
  console.log("Complete");
}

console.log("Hello");
longWork();
console.log("World");

// Hello -> Complete -> World 출력

console.log("*********************************");

function asyncLongWork() {
  setTimeout(() => {
    console.log("Complete");
  }, 2000);
  // async function by default
}

console.log("Hello");
asyncLongWork();
console.log("World");

// Hello -> World -> Complete 출력
