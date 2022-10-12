//classic Functions
//classic 1
function sum1(a, b) {
  let c = a + b;
  console.log("classic", c);
}

//classic 2
let zarb1 = function (a, b) {
  let c = a * b;
  console.log("classic", c);
};

// sum1(1, 2);
// sum1(4674, 43632);
// sum1(4, 6);
// zarb1(5, 8);
// zarb1(66, 452);

//Arrow Functions (ES6)
let sum2 = (a, b) => {
  let c = parseInt(a) + parseInt(b);
  console.log("حاصل جمع دو عدد :", c);
};
let zarb2 = (a, b) => {
  let c = a * b;
  console.log("arrow", c);
};
let number1 = window.prompt("لطفا عدد اول را وارد نمایید");
let number2 = window.prompt("لطفا عدد دوم را وارد نمایید");
sum2(number1, number2);
//zarb2(6, 10);

//if-else
let currentClock = parseInt(window.prompt("ساعت چنده؟"));
if (currentClock >= 6 && currentClock < 12) {
  console.log("صبح بخیر");
} else if (currentClock >= 12 && currentClock < 16) {
  console.log("ظهر بخیر");
} else if (currentClock >= 16 && currentClock < 20) {
  console.log("عصر بخیر");
} else {
  console.log("شب بخیر");
}
//console.log(currentClock);
