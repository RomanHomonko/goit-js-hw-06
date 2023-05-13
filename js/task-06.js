const nameInput = document.querySelector("#validation-input");
const inputLength = nameInput.getAttribute("data-length");
nameInput.addEventListener("blur", () => {
  if (nameInput.value.length === Number(inputLength)) {
    nameInput.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    nameInput.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
