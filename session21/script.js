//click
//mouseenter
//mouseleave
//change
//submit
//keyup
//dblclick
//mousemove
//scroll
//load

const rulesCheckbox = document.getElementById("rules");

rulesCheckbox.addEventListener("change", function (event) {
  const checkbox_value = event.target.checked;
  if (checkbox_value) {
    document.querySelector(".blackbox").style.display = "block";
  }
});

document.querySelector(".closeBtn").addEventListener("click", () => {
  document.querySelector(".blackbox").style.display = "none";
});

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const checkbox_value = rulesCheckbox.checked;
    if (checkbox_value) {
      document.querySelector(".blackbox").style.display = "block";
    }
  });

document.getElementById("mylink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("registerForm").submit();
});

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});

document.addEventListener("mousemove", function (e) {
  console.log(e);
});

window.addEventListener("load", function () {
  console.log("page loaded");
});
