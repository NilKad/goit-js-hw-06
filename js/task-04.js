// *************** v1 *******************//
let counterValue = 0;
const countValueRef = document.querySelector("#value");
const decrementBtnRef = document.querySelector('[data-action = "decrement"]');
const incrementBtnRef = document.querySelector('[data-action = "increment"]');

decrementBtnRef.addEventListener("click", () =>
  changeValue((counterValue -= 1))
);
incrementBtnRef.addEventListener("click", () =>
  changeValue((counterValue += 1))
);

const changeValue = (value) => (countValueRef.textContent = value);

// *************** v2 *******************//
// const countValueRef = document.querySelector("#value");
// const decrementBtnRef = document.querySelector('[data-action = "decrement"]');
// const incrementBtnRef = document.querySelector('[data-action = "increment"]');

// const changeValue = (item) =>
//   (countValueRef.textContent =
//     Number(item.target.textContent) + Number(countValueRef.textContent));

// decrementBtnRef.addEventListener("click", changeValue);
// incrementBtnRef.addEventListener("click", changeValue);

// *************** v3 *******************//

// const refs = {
//   countValueRef: document.querySelector("#value"),
//   onBtnRef: document.querySelectorAll("[data-action]"),
// };

// const changeValue = (item) =>
//   (refs.countValueRef.textContent =
//     Number(item.target.textContent) + Number(refs.countValueRef.textContent));

// refs.onBtnRef.forEach((btn) => btn.addEventListener("click", changeValue));
