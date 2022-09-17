const inputRef = document.querySelector("#validation-input");
const dataLengthRef = Number(inputRef.dataset.length);

const validateInput = (event) =>
  event.currentTarget.value.length === dataLengthRef
    ? (inputRef.classList = "valid")
    : (inputRef.classList = "invalid");

inputRef.addEventListener("blur", validateInput);
