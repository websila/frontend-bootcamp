const accordion = document.querySelector(".accordion");
const accordion_items = document.querySelectorAll(".accordion-item");
const accordion_headers = document.querySelectorAll(".accordion-header");
/* accordion_headers[0].addEventListener("click", () => {
  console.log("click");
});
accordion_headers[1].addEventListener("click", () => {
  console.log("click");
}); */
accordion_headers.forEach(function (question) {
  const accordion_item_init = question.parentElement;
  if (accordion_item_init.classList.contains("open")) {
    const inner_height =
      accordion_item_init.querySelector(".body-inner").offsetHeight;
    accordion_item_init.querySelector(".accordion-body").style.height =
      inner_height + "px";
  }
  question.addEventListener("click", function (event) {
    const accordion_item = event.target.parentElement;
    console.log(accordion_item);
    const isOpen = accordion_item.classList.contains("open");
    console.log(isOpen);
    accordion_items.forEach(function (question) {
      question.classList.remove("open");
      question.querySelector(".accordion-body").style.height = 0;
    });
    if (!isOpen) {
      accordion_item.classList.add("open");
      const inner_height =
        accordion_item.querySelector(".body-inner").offsetHeight;
      accordion_item.querySelector(".accordion-body").style.height =
        inner_height + "px";
    }
  });
});
