function getShamsiDayNunmber() {
  let today = new Date();
  let todayNumber = today.getDay();
  switch (todayNumber) {
    case 0:
      todayNumber = "یکشنبه";
      break;
    case 1:
      todayNumber = "دوشنبه";
      break;
    case 2:
      todayNumber = "سه شنبه";
      break;
    case 3:
      todayNumber = "چهارشنبه";
      break;
    case 4:
      todayNumber = "پنجشنبه";
      break;
    case 5:
      todayNumber = "جمعه";
      break;
    case 6:
      todayNumber = "شنبه";
      break;
    default:
      todayNumber = " عدد وارد شده نامعتبر است";
  }
  return todayNumber;
}
let todayName = getShamsiDayNunmber();
console.log(todayName);

// if (todayNumber == 0) {
//   console.log("یکشنبه");
// } else if (dayNumber == 1) {
//   console.log("دوشنبه");
// } else if (dayNumber == 2) {
//   console.log("سه شنبه");
// } else if (dayNumber == 3) {
//   console.log("چهارشنبه");
// } else if (dayNumber == 4) {
//   console.log("پنجشنبه");
// } else if (dayNumber == 5) {
//   console.log("جمعه");
// } else if (dayNumber == 6) {
//   console.log("شنبه");
// }

// switch (dayName) {
//   case "sat":
//     console.log("شنبه");
//     break;
// }

//for

for (let i = 0; i < 101; i++) {
  if (i == 33) {
    continue;
  }
  if (i == 50) {
    break;
  }
  //console.log(i);
}

let j = 0;
while (j <= 20) {
  if (j % 2 == 1) {
    console.log(j);
  }
  j++;
}
