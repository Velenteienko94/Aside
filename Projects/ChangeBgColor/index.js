let colorBtn = document.querySelector(".colorBtn");
let body = document.querySelector("body");
let colors = ["yellow", "red", "green", "pink"];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  let random = Math.floor(Math.random() * colors.length);
  let newRandom = Math.floor(Math.random() * colors.length);

  if (body.style.backgroundColor === colors[random]) {
    body.style.backgroundColor = colors[newRandom];
    return;
  }

  body.style.backgroundColor = colors[random];
}
