const colorsArray = [
  "red",
  "green",
  "yellow",
  "pink",
  "purple",
  "blue",
  "aqua",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const randomNumber = getRandomNumber();
  document.body.style.background = colorsArray[randomNumber];
  color.innerHTML = colorsArray[randomNumber];
}

function getRandomNumber() {
  return Math.floor(Math.random() * colorsArray.length);
}
