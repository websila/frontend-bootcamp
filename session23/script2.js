// ! Math
/* console.log(Math.PI);
console.log(Math.E);
console.log(Math.ceil(4.9));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));
console.log(Math.round(4.1));
console.log(Math.round(4.9));
console.log(Math.max(1, 7, 200, -12, 650));
console.log(Math.min(1, 7, 200, -12, 650));
const numbers = [6, 4, 44, 26, -100, -15];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));
const a = -5;
const b = 100;
const c = 0;
const result1 = Math.sign(a);
const result2 = Math.sign(b);
const result3 = Math.sign(c);

console.log(result3);
console.log(Math.abs(-12));
console.log(Math.pow(2, 10));
console.log(Math.sqrt(169));
console.log(Math.random());

// ? code challenge
function randBetween(min, max) {}
randBetween(1000, 2000); */

// ! setTimeOut()
/* setTimeout(function () {
  console.log("hello");
}, 1000); */

// ! setInterval()
/* setInterval(function () {
  console.log("goodbye");
}, 100); */
/* setInterval(function () {
  const last_second = Number(document.getElementById("seconds").innerText);
  const next_second = last_second + 1;
  document.getElementById("seconds").innerText = next_second;
}, 1000); */
/* setInterval(function () {
  const last_second = Number(document.getElementById("seconds").innerText);
  const next_second = last_second - 1;
  document.getElementById("seconds").innerText = next_second;
}, 1000); */

// ! debugger
/* const test = "hello";
for (let i = 1; i < 100; i++) {
  const current_i = i;
  let a = current_i / 7;
  if (a > 5) {
    console.log(i);
  }
  if (i === 50) {
    debugger;
  }
} */

// ! asynchronous (khanuma) - synchronous (aghayoon)

/* const a = "hello";
console.log(a);
alert("salam");
console.log("khodafez"); */

job3();
job2();
job1();

function job1() {
  console.log("job1");
}
function job2() {
  console.log("job3");
}
function job3() {
  console.log("job2");
}

/* const test2 = fetch(
  "https://geocode.xyz/35.699633637290916,51.33787136490469?geoit=json&auth=288620523340197485312x69304"
); */
//console.log("LOG");

// ! starter
/* const members = ["John Doe", "Sam Smith", "Allie Cartel"];
function addNewMember(newUser) {
  setTimeout(function () {
    members.push(newUser);
    console.log("new user added");
  }, 2000);
}
function getMembers() {
  console.log(members);
}
getMembers();
addNewMember("alireza");
getMembers(); */

// ! callback
/* const members = ["John Doe", "Sam Smith", "Allie Cartel"];
function addNewMember(newUser, callback) {
  setTimeout(function () {
    members.push(newUser);
    console.log("new user added");
    callback();
  }, 2000);
}
function getMembers() {
  console.log(members);
}
getMembers();
addNewMember("alireza", getMembers); */

//! Promise
/* const myPromise = new Promise(function (resolve, reject) {
  const condition = false;
  if (condition) {
    console.log("به قولم عمل کردم");
    resolve();
  } else {
    console.log("به قولم عمل نکردم");
    reject("واقعا نتونستم انجامش بدم");
  }
});
myPromise
  .then(function () {
    console.log("کار بعدی");
  })
  .catch(function (error) {
    console.log(error);
    console.log("ارور 1");
  });
 */
/* const members = ["John Doe", "Sam Smith", "Allie Cartel"];
function addNewMember(newUser) {
  const myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      members.push(newUser);
      console.log("new user added");
      resolve();
    }, 2000);
  });
  return myPromise;
}
function getMembers() {
  setTimeout(function () {
    console.log(members);
  }, 1000);
}
const a = addNewMember("alireza");
a.then(function () {
  getMembers();
  return addNewMember("mohamad");
})
  .then(function () {
    getMembers();
    return addNewMember("sara");
  })
  .then(function () {
    getMembers();
  }); */

//! async / await
const members = ["John Doe", "Sam Smith", "Allie Cartel"];
function addNewMember(newUser) {
  const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("new user added");
      if (newUser === "alireza") {
        reject(new Error("با علیرضا حال نمی کنم"));
      } else {
        members.push(newUser);
        resolve();
      }
    }, 2000);
  })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log("finally");
    });
  return myPromise;
}
function getMembers() {
  setTimeout(function () {
    console.log(members);
  }, 1000);
}

async function test() {
  await addNewMember("mohamad");
  await getMembers();
  await addNewMember("alireza");
  await getMembers();
  await addNewMember("sara");
  await getMembers();
}
test();
