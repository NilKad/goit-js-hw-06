const btnRef = document.querySelector(".widget button");
const colorValue = document.querySelector(".widget .color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onButton = () => {
  const newColor = getRandomHexColor();
  colorValue.textContent = newColor;
  document.body.style.backgroundColor = newColor;
};

btnRef.addEventListener("click", onButton);
