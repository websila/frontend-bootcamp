//array
const array1 = ["ahmad", "ahmadi", 1370, 60];

//object (JSON Format)
const person1 = {
  firstname: "ahmad",
  lastname: "ahmadi",
  birth: 1370,
  vazn: 60,
  walk: function () {
    console.log("i can walk");
  },
  talk: function () {
    console.log("i can talk");
  },
  printFullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
  calcAge: function (a, b) {
    const result = 1401 - this.birth;
    console.log(a, b);
    return result;
  },
};
console.log("person1.firstname", person1.firstname);
console.log("person1FullName", person1.firstname + " " + person1.lastname);
console.log(1401 - person1.birth);
person1.walk();
person1.talk();
person1.printFullName();
const person1Age = person1.calcAge("justTest", "justTest2");
console.log("person1Age", person1Age);

//add or modify properties
person1.firstname = "akbar";
person1.speak = function () {
  console.log("i can speak");
};
console.log(person1);

//constructor function
function Person(firstname, lastname, birth, vazn) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.birth = birth;
  this.vanz = vazn;
  this.walk = function () {
    console.log("i can walk");
  };
  this.talk = function () {
    console.log("i can talk");
  };
  this.printFullName = function () {
    return this.firstname + " " + this.lastname;
  };
  this.calcAge = function (a, b) {
    const result = 1401 - this.birth;
    console.log(a, b);
    return result;
  };
  this.speak = function () {
    console.log("i can speak");
  };
}
const person2 = new Person("ahmad", "ahmadi", 1370, 60);
const person3 = new Person("reza", "rezaie", 1380, 70);
console.log(person2);
console.log(person2.printFullName());
console.log(person3);
console.log(person3.printFullName());
