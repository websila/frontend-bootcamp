// var a = 1577;
// var b = 3489;
// var c = a + b;

// let a = 1577;
// let b = 3489;
// let c = a + b;

// const ali = 54634;
// const mohamad = 546547;

//let
let a = 65;
a = 66;
a = 67;
a = 68;

//const
const B = 65;

let A = 67674;
let $a = 65;
let $b = 65;
let $c = 65;

//dataType => number
let z1 = 200;
let z2 = 99.764;
let y1 = "200";
let z3 = z1 == z2;
console.log("z1y1", z1 === y1);

//dataType => string
let my_company = "websila";
console.log(typeof my_company);

//dataType => boolean
let isMale = true;
let confirmation = false;
console.log(typeof confirmation);

//dataType => array
let myArray = [1, 2, 6, 7, 8];
let myArray2 = ["alireza", "maryam", "saeed", "zahra", 465, true];
console.log(myArray2);
console.log(typeof myArray2);

//dataType => Object (JSON)
// property : value
// name : alireza
// lastname : mohamadi
// age : 26
let person1 = {
  firstname: "mehdi",
  lastname: "rezaie",
  age: 35,
  isMale: true,
};
let car1 = {
  brand: "benz",
  maxSpeed: 300,
  color: "black",
};
let car2 = {
  brand: "bmw",
  maxSpeed: 290,
  colors: ["red", "white", "green"],
};
let carList = [car1, car2, { brand: "sipa", maxSpeed: 350, color: "white" }];
console.log(carList);

//dataType => null , undefined
let g = null;
let h = undefined;
let k;

//Operators

let i = 57;
let j = 55;
console.log(i + j);
console.log(i - j);
console.log(i * j);
console.log(i / j);
console.log(i % j);
console.log(2 ** 8);
let v = i++;
console.log("v", v);
console.log("i", i);
let o = i--;
console.log("o", o);
console.log("i", i);

let t = (46436 + 65756) * 4;
console.log("t", t);

let name1 = "ali";
let name2 = "reza";
console.log(name1 + name2); // => alireza
console.log(name1 - name2); // Not a Number => NaN
console.log(name1 * 2); // Not a Number => NaN
