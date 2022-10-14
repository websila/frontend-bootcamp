// ! destructing arrays
/*const numbers = [1, 5, 6, "et", "dsgs"];
const a = numbers[0];
const b = numbers[1];
const c = numbers[2];
const d = numbers[3];
const e = numbers[4];  */
//const [a, b, , d, e] = numbers;

// ! destructing objects
/* const post1 = {
  id: "1",
  title: "esse laborum culpa",
  content:
    "Quasi eaque quas soluta molestiae. Sunt quod necessitatibus. Aut molestias delectus officiis deserunt voluptates. Dolorum quia qui quisquam enim temporibus consequatur est.",
  author: "Reva",
  tags: ["iusto", "dolorem", "et", "vel"],
}; */
/* const id = post1.id;
const title = post1.title;
const content = post1.content;
const author = post1.title;
const tags = post1.tags;
console.log(id, title, content, author, tags); */
// const { id: x, tags: barchasb } = post1;

// ! speard operator (...)
/* const users1 = ["Brant", "Thaddeus", "Edison", "Effie"];
console.log(users1);
console.log(...users1);
const newUser = prompt("نام کاربر را وارد نمایید");
const users2 = [...users1, newUser];
console.log(users2);
const logger = function (a, b, c) {
  console.log(a, b, c);
};
const inputs = ["test1", "test2", "test3"];
logger(...inputs); */

// ! DOM Traversing
// ? DOM Traversing : Downwards
// * querySelectorAll , children
/* const select1 = document.querySelectorAll("li");
const select2 = document.getElementById("inner-list").querySelectorAll("li");
const select3 = document.getElementById("inner-list").children;
console.log(select1);
console.log(select2);
console.log(select3); */

// ? DOM Traversing : Upwards
// * parentElement , closest
/* const select1 = document.getElementById("inner-list").parentElement;
const select2 = document.querySelector("#inner-list li");
const select3 = select2.closest("ul"); */

// ? DOM Traversing : Sideways
// * nextElementSibling , previousElementSibling , Combining parentElement, children
/* let select1 = document.querySelector("#inner-list li");
const select2 = select1.nextElementSibling;
const select3 = select1.previousElementSibling;
const select4 = [];
while (select1.nextElementSibling) {
  select4.push(select1.nextElementSibling);
  select1 = select1.nextElementSibling;
}
console.log(select4); */

// ! apply() , bind() , call()

const car1 = {
  model: "Mercedes-Benz E-Class",
  maxSpeed: "250 kmph",
};
const logger = function (a, b) {
  console.log("ab", a, b);
  console.log("this", this);
};
//logger("text1", "text2");

// * apply()
logger.apply(car1, ["text1", "text2"]);

// * call()
logger.call(car1, "text1", "text2");

// * bind()
logger.bind("testsss", "text1", "text2")();
