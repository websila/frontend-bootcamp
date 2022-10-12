let myClass = ["alireza", "mehdi", "ehsan", "fateme", "mahsa", "mohamad"];
let numbers = [1, 5, 7, 3, 9, 44, 2, 777];
for (let i = 0; i < numbers.length; i++) {
  //console.log(numbers[i]);
}
for (let j = 0; j <= myClass.length; j++) {
  //console.log(myClass[j]);
}

// myClass.forEach(function (value, index) {
//   console.log(index);
// });
myClass.forEach((value, index) => {
  console.log(index + ":" + value);
});
// numbers.forEach((value, index) => {
//   numbers[index] = value * 2;
// });
let mapped_numbers = numbers.map((value, index) => {
  return value;
});

let filtered_number = numbers.filter((value, index) => {
  return value > 4 && value < 50;
});

console.log(filtered_number);
