"use strict";

//ternary condition syntax
const a = true;
if (a) {
  console.log(true);
} else {
  console.log(false);
}
a ? console.log(true) : console.log(false);

//string methods
const text1 = "Alireza Mohamadi";
const text2 = "lorem,impsum,test,salam,khubi";
const text3 = "    lorem,impsum,test,salam,khubik       ";
console.log(text1);
console.log("length", text1.length);
console.log("charAt", text1.charAt(4));
console.log("text1[0]", text1[0]);
console.log("", text1 + " " + "kordkheili");
console.log("concat", text1.concat(" kordkheili"));
console.log("toUpperCase", text1.toUpperCase());
console.log("toLowerCase", text1.toLowerCase());
console.log("substring", text1.substring(0, 5));
console.log("text2", text2);
console.log("split", text2.split(","));
console.log("text3", text3);
console.log("trim", text3.trim());
console.log("indexOf", text3.indexOf("k"));
console.log("replace", text3.replace(",", "-"));
console.log("replaceAll", text3.replaceAll(",", "-"));
