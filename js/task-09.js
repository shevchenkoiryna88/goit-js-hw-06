const body = document.querySelector("body")

const btn = document.querySelector(".change-color");

const span = document.querySelector(".color")


btn.addEventListener("click", changeColor);

function changeColor () {
    let newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
    span.textContent = newColor;

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// console.log(body);
// console.log(span);
// console.log(btn);

