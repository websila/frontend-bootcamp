//DOM Selectors
const element1 = document.getElementById("box"); //important
const element2 = document.getElementsByClassName("box2");
const element3 = document.getElementsByTagName("div");
const element4 = document.querySelector(".box2");
const element5 = document.querySelector(".box2:last-child");
const element6 = document.querySelectorAll(".box2"); //important

element1.innerHTML = "<div><h1>element 1 - hello world</h1></div>";
element4.innerText = "<div><h1>element 4 - hello world</h1></div>";
element2[2].innerText = "<div><h1>element 2 - hello world</h1></div>";

const element_box3 = document.getElementById("box3");
const element_box3_text = element_box3.innerHTML;
const element_box3_uptext = element_box3_text.toUpperCase();
element_box3.innerHTML = element_box3_uptext;
