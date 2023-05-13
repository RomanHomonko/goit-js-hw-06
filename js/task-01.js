let categoriesUl = document.querySelector(`#categories`);
let categoriesLi = categoriesUl.querySelectorAll(`.item`);
console.log(`Number of categories: ${categoriesLi.length}`);
categoriesLi.forEach((category) => {
  let categoryName = category.querySelector(`h2`).textContent;
  let categoriesLiCount = category.querySelectorAll(`li`).length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoriesLiCount}`);
});
