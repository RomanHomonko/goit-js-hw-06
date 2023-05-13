const counterEl = document.querySelector("#counter");
const valueEl = document.querySelector("#value");
let counterValue = 0;

counter.addEventListener("click", (press) => {
  if (press.target.dataset.action === "increment") {
    counterValue += 1;
  } else if (press.target.dataset.action === "decrement") {
    counterValue -= 1;
  }
  valueEl.textContent = counterValue;
});
