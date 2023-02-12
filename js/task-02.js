const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

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