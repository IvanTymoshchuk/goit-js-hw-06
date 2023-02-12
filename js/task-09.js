function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// 1. Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// 2. Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const bodyEl = document.querySelector('body');
const changeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

bodyEl.addEventListener('click', changeBodyColorRandom);

function changeBodyColorRandom() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorEl.textContent = `${getRandomHexColor()}`;
}

