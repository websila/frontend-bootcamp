// ! global scope
const a = 10;

// ! function scope
function logger() {
  console.log(a);
}
// ! block scope
if (true) {
  const a = 20;
  console.log(a);
}
