// ! destructing arrays
/* const numbers = [1, 5, 6];
const a = numbers[0];
const b = numbers[1];
const c = numbers[2];
const [a, , c] = numbers;
console.log(c); */

// ! destructing objects
/* const post1 = {
  id: "1",
  title: "esse laborum culpa",
  content:
    "Quasi eaque quas soluta molestiae. Sunt quod necessitatibus. Aut molestias delectus officiis deserunt voluptates. Dolorum quia qui quisquam enim temporibus consequatur est.",
  author: "Reva",
  tags: ["iusto", "dolorem", "et", "vel"],
}; */
/* console.log(post1);
const id = post1.id;
const title = post1.title;
const tags = post1.tags; */
/* const { id, title, tags } = post1;
console.log(id);
console.log(title);
console.log(tags);
 */

// ! speard operator (...)
/* const users1 = ["Brant", "Thaddeus", "Edison", "Effie"];
console.log(users1);
console.log(...users1);
const new_user = prompt("add user");
const users2 = [...users1, new_user];
console.log(users2); */

/* function logger(a, b, c) {
  console.log(a, b, c);
}
logger(1, 6, 4);
const numbers = [1, 6, 4];
logger(...numbers); */

// ! DOM Traversing
// ? DOM Traversing : Downwards
// * querySelectorAll , children

// ? DOM Traversing : Upwards
// * parentElement , closet

// ? DOM Traversing : Sideways
// * nextElementSibling , previousElementSibling , Combining parentElement, children

// ! apply() , bind() , call()
/* const car1 = {
  model: "Mercedes-Benz E-Class",
  maxSpeed: "250 kmph",
};
const logger = function (a, b) {
  console.log(a, b);
  console.log(this);
};
logger("text1", "text2");

// * apply()
logger.apply(car1, ["text1", "text2"]);

// * call()
logger.call(car1, "text1", "text2");

// * bind()
logger.bind(car1, "text1", "text2")(); */

// ! setTimeOut()

// ! setInterval()
/* setInterval(function () {
  const secondsEL = document.getElementById("seconds");
  const minutesEL = document.getElementById("minutes");
  const current_second = Number(secondsEL.innerHTML);
  const current_minute = Number(minutesEL.innerHTML);
  let next_second;
  let next_minute;
  if (current_second === 59) {
    next_second = 0;
    next_minute = current_minute + 1;
  } else {
    next_second = current_second + 1;
    next_minute = current_minute;
  }
  next_second =
    String(next_second).length === 1 ? `0${next_second}` : next_second;
  next_minute =
    String(next_minute).length === 1 ? `0${next_minute}` : next_minute;
  secondsEL.innerHTML = next_second;
  minutesEL.innerHTML = next_minute;
}, 1000); */

// ! debugger
/* for (let i = 1; i < 100; i++) {
  // debugger;
  const current_i = i;
  let a = current_i / 7;
  if (a > 5) {
    console.log(i);
  }
} */

// ! asynchronous - synchronous
/* console.log("test1");
alert("test2");
console.log("test3"); */

/* function job1() {
  console.log("I am job 1");
}
function job3() {
  console.log("I am job 3");
}
function job2() {
  console.log("I am job 2");
}
job1();
job2();
job3(); */

// ! asynchronous - synchronous : working with data
// * local
/* const members = ["John Doe", "Sam Smith", "Allie Cartel"];
function addMember(newUser) {
  console.log("Member Added");
  members.push(newUser);
}
function getMembers() {
  console.log(members);
}
addMember("Alpha");
getMembers(); */

// * remote (real world)
/* const members = ["John Doe", "Sam Smith", "Allie Cartel"];
function addMember(newUser) {
  setTimeout(function () {
    members.push(newUser);
    console.log("Member Added");
  }, 2000);
}
function getMembers() {
  setTimeout(function () {
    console.log(members);
  }, 1000);
}
addMember("Alpha");
getMembers(); */

// ! working with data issue => solution 1 (callback)
/* const members = ["John Doe", "Sam Smith", "Allie Cartel"];
function addMember(newUser, callback) {
  setTimeout(function () {
    members.push(newUser);
    console.log("Member Added");
    callback();
  }, 2000);
}
function getMembers() {
  setTimeout(function () {
    console.log(members);
  }, 1000);
}
addMember("Alpha", getMembers); */

// ! working with data issue => solution 1 (Promise)
let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("job1");
    resolve();
  }, 1000);
});
myPromise.then(function (res) {
  setTimeout(function () {
    console.log("job2");
    return Promise.resolve();
  }, 1000);
});

// ! async - await

// ! module import / export

// ! other stuff
/* setTimeout(function () {
  console.log("1 second passed");
  setTimeout(function () {
    console.log("2 seconds passed");
    setTimeout(function () {
      console.log("3 seconds passed");
    }, 1000);
  }, 1000);
}, 1000); */

/* const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("1 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 second passed");
    return wait(1);
  })
  .then(() => console.log("4 second passed"));
 */
