// ! 1- basic import (without variables)
import "./shoppingCart.js";

// ! 2- default import
import test from "./shoppingCart.js";
test("sib", 2);

// ! 3- named import
import { cart, addToCart, totalPrice } from "./shoppingCart.js";
console.log(cart[0].count);
console.log(totalPrice);
addToCart("golabi", 5);
console.log(cart);
console.log("Importing module");

// ! 4 - classic (server side Javascript)
//const logger = require("./shoppingCart.js");
//logger();
