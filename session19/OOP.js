//1 -> static JSON Format
const static_person1 = {
  firstname: "alireza",
  lastname: "ahmadi",
  birth: 1373,
  friends: [
    {
      firstname: "reza",
      lastname: "rezaie",
      alayegh: ["computer science"],
    },
  ],
  alayegh: ["football", "music"],
  talk: function () {
    console.log("i am talking");
  },
  walk: function () {
    console.log("i am walking");
  },
  sayHello: function () {
    console.log("hello i am" + this.firstname);
  },
  printThis: function () {
    return this;
  },
};
const static_person2 = {
  firstname: "sara",
  lastname: "ahmadi",
  birth: 1369,
  friends: [
    {
      firstname: "reza",
      lastname: "rezaie",
      alayegh: ["computer science"],
    },
  ],
  alayegh: ["football", "music"],
  talk: function () {
    console.log("i am talking");
  },
  walk: function () {
    console.log("i am walking");
  },
  sayHello: function () {
    console.log("hello i am" + this.firstname);
  },
  printThis: function () {
    return this;
  },
};
console.log("static_person1", static_person1.printThis());
console.log("static_person2", static_person2.printThis());

//2 -> constructor function
const Person = function (firstname, lastname, birth, friends, alayegh) {
  //property
  //   this.constructor = "salam";
  this.firstname = firstname;
  this.lastname = lastname;
  this.birth = birth;
  this.friends = friends;
  this.alayegh = alayegh;
};
Person.prototype.talk = function () {
  console.log("i am talking");
};
Person.prototype.walk = function () {
  console.log("i am walk");
};
Person.prototype.sayHello = function () {
  console.log("hello i am" + this.firstname);
};
Person.prototype.printThis = function () {
  return this;
};
const constructor_person1 = new Person(
  "niloufar",
  "ahmadi",
  1399,
  ["garsha", "sepehr"],
  ["music", "shir khordan"]
);
const constructor_person2 = new Person(
  "navid",
  "ahmadi",
  1346,
  ["garsha", "sepehr"],
  ["tv", "volleyball"]
);
const constructor_person3 = new Person(
  "reza",
  "ahmadi",
  1375,
  ["garsha", "navid"],
  ["music"]
);
constructor_person3.walk = function () {
  console.log("i cant walk");
};
console.log("constructor_person1", constructor_person1);
console.log("constructor_person2", constructor_person2);
console.log("constructor_person3", constructor_person3);

//3 -> ES6 class
class PersonClass {
  constructor(firstname, lastname, birth, friends, alayegh) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birth = birth;
    this.friends = friends;
    this.alayegh = alayegh;
  }
  //methods will add to PersonClass.prototype
  talk() {
    console.log("i am talking");
  }
  walk() {
    console.log("i am walk");
  }
  sayHello() {
    console.log("hello i am" + this.firstname);
  }
  printThis() {
    return this;
  }
}
class StudentClass extends PersonClass {
  constructor(
    firstname,
    lastname,
    birth,
    friends,
    alayegh,
    shomareDaneshjooyi
  ) {
    super(firstname, lastname, birth, friends, alayegh);
    this.shomareDaneshjooyi = shomareDaneshjooyi;
  }
  isTopStudent() {
    const result = this.shomareDaneshjooyi > 100000 ? true : false;
    return result;
  }
}
const class_person1 = new PersonClass(
  "mina",
  "salehi",
  1375,
  ["garsha", "navid"],
  ["music"]
);
const class_student1 = new StudentClass(
  "milad",
  "shahi",
  1344,
  ["garsha", "navid"],
  ["music"],
  56789
);
console.log("class_student1", class_student1);
console.log("class_person1", class_person1);
console.log(class_student1.isTopStudent());
