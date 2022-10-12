function testClick() {
  console.log("test click");
  alert("done!");
}
function testKeyUp(event) {
  const result = event.target.value;
  document.getElementById("container").innerHTML = result;
}
const mouseOverHandler = () => {
  console.log("mouseOverHandler");
};
const mouseLeaveHandler = () => {
  console.log("mouseLeaveHandler");
};

const countUp = () => {
  const el = document.getElementById("counter");
  const prev_count = Number(el.innerText);
  const next_Count = prev_count + 1;
  el.innerText = next_Count;
};
const countDown = () => {
  const el = document.getElementById("counter");
  const prev_count = Number(el.innerText);
  const next_Count = prev_count - 1;
  el.innerText = next_Count;
};

//addEventListener

//counter
const upBtn = document.getElementById("countUp");
const downBtn = document.getElementById("countDown");
upBtn.addEventListener("click", countUp);
downBtn.addEventListener("click", countDown);

//input
const myInput = document.querySelector("#myInput");
myInput.addEventListener("keyup", testKeyUp);
myInput.addEventListener("mouseover", mouseOverHandler);
myInput.addEventListener("mouseleave", mouseLeaveHandler);

document.querySelector("#btn2").addEventListener("click", function (event) {
  console.log(event.target.innerText);
});

//console.log(document.querySelectorAll(".btn:first-child"));
