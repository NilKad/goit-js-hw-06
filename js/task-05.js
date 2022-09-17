const refs = {
  inputRef: document.querySelector("#name-input"),
  outputRef: document.querySelector("#name-output"),
};

refs.inputRef.addEventListener("input", (item) => {
  if (item.currentTarget.value === "") {
    refs.outputRef.textContent = "Anonymous";
  } else {
    refs.outputRef.textContent = item.currentTarget.value;
  }
});
