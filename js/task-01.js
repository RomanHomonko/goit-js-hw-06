const categoriesUl = document.querySelector("#categories");
const categoriesLi = categoriesUl.children;
console.log(`Number of categories: ${categoriesLi.length}`);

for (let category of categoriesLi) {
  const categoryName = category.querySelector("h2").textContent;
  const categoriesLiCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoriesLiCount}`);
}
