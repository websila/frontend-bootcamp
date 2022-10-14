//Exporting module
console.log("Exporting Module");
const cart = [];
const addToCart = (product, count) => {
  cart.push({ product, count });
  console.log(`${count} ${product} added to cart`);
};
const totalPrice = 430000;

// ! named export
//export { addToCart, cart, totalPrice as sum };

export default function () {
  console.log("test");
}
// ! default export
//export default addToCart;
