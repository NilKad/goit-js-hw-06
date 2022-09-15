const categoriesEl = document.querySelectorAll("#categories .item");
// console.log(categoriesEl);
// categoriesEl.forEach((item) => console.log(item.textContent));
console.log(`Number of categories: ${categoriesEl.length}`);
for (const iterator of categoriesEl) {
  console.log(`\nCategory: ${iterator.querySelector("h2").textContent}`);
  console.log(`Elements: ${iterator.querySelectorAll("li").length}`);
}
