let numbers = [5, 6, 3, 55, 22, 74];
console.log(numbers);

//push
numbers.push(76, 54);
console.log(numbers);

//pop
numbers.pop();
console.log(numbers);

//unshift
numbers.unshift(1, 2, 3);
console.log(numbers);

//shift
numbers.shift();
console.log(numbers);

//splice
let monthes = ["farvardin", "tir", "mordad", "shahrivar"];
console.log(monthes);
monthes.splice(1, 0, "ordibehesht", "khordad"); //index , delete , value1 , value2 , ...
console.log(monthes);

//slice
let sliced_monthes = monthes.slice(-2, -1);
console.log(sliced_monthes);

//concat
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];
const numbers3 = numbers1.concat(numbers2);
console.log("numbers1", numbers1);
console.log("numbers2", numbers2);
console.log("numbers3", numbers3);

//join
const cars = ["pride", "benz", "bmw"];
console.log(cars);
const joined_cars = cars.join();
console.log(joined_cars);

//sort & reverse
let mynumbers = [5, 6, 3, 55, 22, 74, 22];
let sorted_numbers = mynumbers.sort((a, b) => {
  return a - b;
});
console.log(sorted_numbers);
sorted_numbers.reverse();
console.log(sorted_numbers);

//includes
const result = mynumbers.includes(65);
const result2 = mynumbers.includes("22");
console.log("result2", result2);
const finder = (myarray, query) => {
  let search_result = false;
  //   myarray.forEach((value, index) => {
  //     if (value === query) {
  //       search_result = true;
  //     }
  //   });
  if (myarray.indexOf(query) != -1) {
    search_result = true;
  }
  return search_result;
};
let finder_result = finder(mynumbers, 74);
console.log("finder_result", finder_result);

//indexOf & lastIndexOf
console.log(mynumbers);
let indexOfResult = mynumbers.indexOf(22);
let lastIndexOfResult = mynumbers.lastIndexOf(22);
console.log(lastIndexOfResult);

//find & findIndex
let find_result = mynumbers.find((value, index) => {
  return value < 30;
});
let findIndex_result = mynumbers.findIndex((value, index) => {
  return value < 30;
});
console.log(find_result);
console.log(findIndex_result);
