// ! Math
/* console.log(Math.E);
console.log(Math.PI);
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.1));
console.log(Math.floor(4.9));
console.log(Math.round(4.1));
console.log(Math.round(4.9));
console.log("min", Math.min(0, 150, 5, 3, -200));
const numbers = [1, 2, 5, -200, 900];
console.log("max", Math.max(...numbers));
console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(4));
console.log(Math.abs(-3.6));
console.log(Math.pow(2, 8));
console.log(Math.sqrt(64));
console.log(Math.random()); */

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
}, 100); */

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
/* let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("job1");
    resolve();
  }, 1000);
});
myPromise.then(function (res) {
  setTimeout(function () {
    console.log("job2");
  }, 1000);
}); */
/* const members = ["John Doe", "Sam Smith", "Allie Cartel"];
function addMember(newUser) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      members.push(newUser);
      console.log("Member Added");
      resolve();
    }, 1000);
  });
}
function getMembers() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(members);
      resolve();
    }, 1000);
  });
}
addMember("alireza")
  .then(function (result) {
    return getMembers();
  })
  .then(function (result) {
    return addMember("reza");
  })
  .then(function (result) {
    return getMembers();
  }); */

// ! async - await
/* const members = ["John Doe", "Sam Smith", "Allie Cartel"];
function addMember(newUser) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      members.push(newUser);
      console.log("Member Added");
      resolve();
    }, 2000);
  });
}
function getMembers() {
  return new Promise(function (resolve, reject) {
    const condition = false;
    if (condition) {
      setTimeout(function () {
        console.log(members);
        resolve();
      }, 1000);
    } else {
      reject(new Error("custom message"));
    }
  }).catch(function (error) {
    console.log(error.message);
  });
}
async function addAndGet() {
  await addMember("alireza");
  await getMembers();
  await addMember("reza");
  await getMembers();
}
addAndGet(); */

// ! try{} catch(){} finally{}
/* try {
  const a = 3;
  a = 5;
  addAndGet();
} catch (error) {
  alert(error.message);
} */

// ! module import / export
// * go to main.js & shoppingCart.js file

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

/* const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("job 1");
    resolve("bache");
  }, 1000);
});
myPromise
  .then(function (result) {
    const myPromise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("job 2");
        resolve(result);
      }, 1000);
    });
    return myPromise2;
  })
  .then(function (result) {
    const myPromise3 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("job 3");
        console.log(result);
        reject(Error("this is a custom error"));
      }, 1000);
    });
    return myPromise3;
  })
  .then(function (result) {
    setTimeout(function () {
      console.log("job 4");
      console.log(result);
    }, 1000);
  })
  .catch(function (err) {
    console.log(err.message);
  });
 */
