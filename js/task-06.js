const validInput = (inputEl, length) => {
  if (inputEl.value.length === Number(length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};
const nameInput = document.querySelector("#validation-input");
const inputLength = nameInput.getAttribute("data-length");
nameInput.addEventListener("blur", () => {
  validInput(nameInput, inputLength);
});
