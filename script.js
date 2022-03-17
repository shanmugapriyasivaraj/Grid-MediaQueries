setTimeout(function timer1() {
  console.log("Hii..");
  setTimeout(function timer2() {
    console.log("Awesome");
  }, 3000);
}, 2000);
