//Exporting module
console.log("Exporting module");
const logger = () => {
  console.log("log some data");
};
const cart = [];
const addToCart = (product, count) => {
  cart.push({
    product: product,
    count: count,
  });
  console.log(`${count} ${product} added to cart`);
};
const totalPrice = 430000;

// ! 1 - default export
export default addToCart;
//logger();

// ! 2- named export
export { cart, addToCart, totalPrice };

// ! 3 - classic (server side javascript)
//module.exports = { logger };
