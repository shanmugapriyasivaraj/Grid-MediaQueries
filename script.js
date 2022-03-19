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

// console.log(
//   [1, 2, 3, 4]
//     .map((x) => x + 1)
//     .filter((x) => x > 3)
//     .map((y) => y * 2)
// );

// fetch("https://restcountries.eu/rest/v2/all") //returns a promise
//   .then((data) => data.json())
//   .then((countries) => console.log(countries))
//   .catch((errMsg) => console.log(errMsg));

// callback hell

let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]}was selected`);
    call_production();
  }, 2000);
};
let production = () => {
  setTimeout(() => {
    console.log("Production has started");
    setTimeout(() => {
      console.log("the fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was addded`);
        setTimeout(() => {
          console.log(`The machine was started`);
          setTimeout(() => {
            console.log(`Icecream was placed on ${stocks.holder[0]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added`);
              setTimeout(() => {
                console.log(`serve Icecream`);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 3000);
    }, 2000);
  }, 0000);
};
order(0, production);
