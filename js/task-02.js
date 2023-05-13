const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector(`#ingredients`);

for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement(`li`);
  li.textContent = ingredients[i];
  li.classList.add(`item`);
  ulEl.appendChild(li);
}
