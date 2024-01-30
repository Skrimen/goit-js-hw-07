function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  const colorSpan = document.querySelector(".color");

  colorSpan.textContent = randomColor;
}
