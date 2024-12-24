// function waitAndRun() {
//   setTimeout(() => {
//     console.log("Complete");
//   }, 2000);
// }

// waitAndRun();

// Callback hell -> Bad style
// function waitAndRun2() {
//   setTimeout(() => {
//     console.log("Complete 1");
//     setTimeout(() => {
//       console.log("Complete 2");
//       setTimeout(() => {
//         console.log("Complete 3");
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }

// waitAndRun2();

/* Promise */
/*
A Promise is an object that represents the eventual completion (or failure)
of an asynchronous operation and its resulting value. It is a way to handle
asynchronous code, avoiding issues like callback hell and making code easier
to manage
*/

// const timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Complete");
//   }, 2000);
// });

// timeoutPromise.then((res) => {
//   console.log("---then---");
//   console.log(res);
// });

/* ******** creating a Promise ******** */
const getPromise = (sec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (/* success condition*/ 1) {
        resolve("Complete"); // fullfill the promise
      } else {
        reject("ERROR"); // reject the promise
      }
    }, sec * 1000);
  });

// better way to handle the callback hell
// getPromise(1)
//   .then((res) => {
//     console.log("--- first then ---");
//     console.log(res);
//     return getPromise(1);
//   })
//   .then((res) => {
//     console.log("--- second then ---");
//     console.log(res);
//     return getPromise(1);
//   })
//   .then((res) => {
//     console.log("--- third then ---");
//     console.log(res);
//   });

/* ******** handling a Promise ******** */
getPromise(1)
  .then((res) => {
    console.log("--- first then ---");
    console.log(res);
  }) // for resolve
  .catch((res) => {
    console.log("--- first error ---");
    console.log(res);
  }) // for reject
  .finally(() => {
    console.log("--- finally ---");
  });

// Another example with chaining Promises
const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });

const processData = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${data} processed`), 1000);
  });

fetchData().then((data) =>
  processData(data)
    .then((result) => console.log(result)) // Data fetched processed
    .catch((error) => console.log(error))
);

Promise.all([getPromise(1), getPromise(1), getPromise(1)]).then((res) => {
  console.log(res);
});
