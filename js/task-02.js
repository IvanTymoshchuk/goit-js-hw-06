const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl);
console.log(ingredients);

const listRefs = ingredients.map((ingredient) => {
  const listRefs = document.createElement("li");
  listRefs.textContent = ingredient;
  listRefs.classList.add("item");
  return listRefs;
});
ingredientsEl.append(...listRefs);