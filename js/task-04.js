let counterValue = 0;
const countValueRef = document.querySelector("#value");
// const counter = document.querySelectorAll("#counter button");
const decrementBtnRef = document.querySelector('[data-action = "decrement"]');
const incrementBtnRef = document.querySelector('[data-action = "increment"]');

decrementBtnRef.addEventListener("click", () =>
  changeValue((counterValue -= 1))
);
incrementBtnRef.addEventListener("click", () =>
  changeValue((counterValue += 1))
);

const changeValue = (value) => (countValueRef.textContent = value);
