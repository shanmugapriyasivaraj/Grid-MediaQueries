// setTimeout(function timer1() {
//   console.log("Hii..");
//   setTimeout(function timer2() {
//     console.log("Awesome");
//   }, 3000);
// }, 2000);

// Promise

// const drive = new Promise((resolve, reject) => {
//   let age = 19;
//   if (age >= 18) {
//     resolve("Eligible");
//   } else {
//     reject("Not Eligible");
//   }
// });

// drive
//   .then((msg) => "Awesome you are " + msg)
//   .then((newMsg) => console.log(newMsg))
//   .catch((errMsg) => console.log(errMsg));

console.log(
  [1, 2, 3, 4]
    .map((x) => x + 1)
    .filter((x) => x > 3)
    .map((y) => y * 2)
);
