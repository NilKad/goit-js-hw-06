const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const makeLiOptions = (options) => {
  return options.map((item) => {
    const liRef = document.createElement("li");
    liRef.textContent = item;
    return liRef;
  });
};

console.log(makeLiOptions(ingredients));

ingredientsEl.append(...makeLiOptions(ingredients));
