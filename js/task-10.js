const boxesTarget = document.querySelector("#boxes");

const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyRef = document.querySelector("[data-destroy]");
const inputNumberRef = document.querySelector('#controls [type="number"]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createDiv = (amount) => {
  let sizeBlock = 30;
  const arrayDiv = [];

  for (let i = 0; i < amount; i++, sizeBlock += 10) {
    const divEl = document.createElement("div");
    const divStyleEl = divEl.style;
    divStyleEl.width = `${sizeBlock}px`;
    divStyleEl.height = `${sizeBlock}px`;
    divStyleEl.backgroundColor = getRandomHexColor();
    arrayDiv.push(divEl);
    boxesTarget.append(...arrayDiv);
  }
};

const readInputAndCreate = () => {
  const amount = Number(inputNumberRef.value);
  createDiv(amount);
};

btnCreateRef.addEventListener("click", readInputAndCreate);

btnDestroyRef.addEventListener("click", () => (boxesTarget.innerHTML = ""));
