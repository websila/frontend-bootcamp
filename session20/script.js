//class
class Person {
  constructor(firstname, lastname, birthYear) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthYear = birthYear;
  }
  walk() {
    return "i can walk";
  }
}
class Student extends Person {
  constructor(firstname, lastname, birthYear, shomareDaneshjooyi) {
    super(firstname, lastname, birthYear);
    this.shomareDaneshjooyi = shomareDaneshjooyi;
  }
  talk() {
    return "talk";
  }
}
const student1 = new Student("alireza", "mohamadi", "1991", 5265418129);
const person1 = new Person("mohamadi", undefined, "1949");
console.log(student1.walk());
student1.talk();
console.log(person1.walk());

//type conversion
const a = "hello world"; //string
const b = 3256; //Number
const c = "3256"; //string
const d = true; //boolean
console.log(Number(c));
console.log(b + Number(c));
console.log(String(b));
console.log(Boolean(a));

console.log(1 + 1);
console.log("1" + 1); // "1" + "1"
console.log("10" - 1);
console.log("ALI" + "REZA");
console.log("ALI" - "REZA");

//js falsy values
// undefined
// ""
// null
// NaN
// 0

//create DOM Elements
const app = document.getElementById("app");
const myh1 = document.createElement("h1"); // <h1></h1> (object)
myh1.innerHTML = "test"; //  => <h1>test</h1> (object)
const myh1_outerHTML = myh1.outerHTML; // <h1>test</h1> (string)
app.innerHTML = myh1_outerHTML;

const mysalam = document.getElementById("salam");
console.dir(mysalam);

const myh3 = document.createElement("h3");
myh3.innerHTML = "fnbhdfbndhfjkbnfjkd";
app.innerHTML = myh3.outerHTML;

//exercise : craete ul with 3 li
const ul = document.createElement("ul");

//method 1 :
// const li1 = document.createElement("li");
// li1.innerText = "a";
// const li2 = document.createElement("li");
// li2.innerText = "b";
// const li3 = document.createElement("li");
// li1.innerText = "c";
// ul.innerHTML = li1.outerHTML + li2.outerHTML + li3.outerHTML;

//method 2 :
const listItems = `
  <li>
    <a href="#">
      a
    </a>
  </li>
  <li>b</li>
  <li>c</li>
`;
ul.innerHTML = listItems;
document.getElementById("ulContainer").innerHTML = ul.outerHTML;

//method 3
const myul2 = document.createElement("ul");
const myli1 = document.createElement("li");
myli1.innerText = "a";
const myli2 = document.createElement("li");
myli2.innerText = "b";
const myli3 = document.createElement("li");
myli3.innerText = "c";
myul2.appendChild(myli1);
myul2.appendChild(myli2);
myul2.appendChild(myli3);
console.log(myul2);

//exercise : delete card on click
const cards = document.querySelectorAll(".card");
const kar = (e) => {
  e.target.remove();
};
// cards[0].addEventListener("click", kar);
// cards[1].addEventListener("click", kar);
// cards[2].addEventListener("click", kar);
// cards[3].addEventListener("click", kar);

cards.forEach(function (card) {
  card.addEventListener("click", kar);
});
//document.getElementById("card1").addEventListener("click", kar);
document.getElementById("btn").addEventListener("mouseover", (e) => {
  e.target.innerHTML = "salam";
});
document.getElementById("btn").addEventListener("mouseleave", function (event) {
  event.target.innerHTML = "<h1>khodafez</h1>";
});

//attr , classList , style
const mylink = document.createElement("a");
mylink.innerText = "google";

//href
mylink.setAttribute("href", "https://google.com");
mylink.href = "https://yahoo.com";

//id
mylink.id = "mylink";
mylink.setAttribute("id", "mylink2");

//custom attr
mylink.setAttribute("boogh", "boooooooogh");

//class
mylink.setAttribute("class", "mylinkclass linkBtn");
mylink.classList.add("testLink");
mylink.classList.remove("linkBtn");
console.log(mylink.classList);

//style
mylink.style.backgroundColor = "green";
mylink.style.border = "5px dashed #000";

//remove attr
mylink.removeAttribute("boogh");
document.body.appendChild(mylink);
console.dir(mylink);

console.dir(document.getElementById("btn"));
