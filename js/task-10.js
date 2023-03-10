
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// 1. Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// 2. Розміри найпершого <div> - 30px на 30px.
// 3. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 4. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// 5. Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// 1. Вирішення 

// const controls = document.querySelector('controls');
// const inputNumberEl = document.querySelector('[type="number"]');
// const createBtnEl = document.querySelector('button[data-create]');
// const destroyBtnEl = document.querySelector('button[data-destroy]');
// const divBoxesEl = document.getElementById('boxes');
// divBoxesEl.style.display = 'flex';
// divBoxesEl.style.flexWrap = 'wrap';
// divBoxesEl.style.alignItems = 'center';
// divBoxesEl.style.marginTop = '30px';

// createBtnEl.addEventListener('click', () => {
//   if (
//     Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
//     Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
//   ) {
//     alert('Please enter number from 1 to 100');
//   } else {
//     createBoxes(inputNumberEl.value.trim());
//   }
//   inputNumberEl.value = '';
// });

// destroyBtnEl.addEventListener('click', destroyBoxes);

// function destroyBoxes() {
//   inputNumberEl.value = '';
//   divBoxesEl.innerHTML = '';
// }

// function createBoxes(amount) {
//   let size = 20;
//   const boxesArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     size += 10 ;
//     const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
//     boxesArr.push(div);
//   }
//   divBoxesEl.insertAdjacentHTML('beforeend', boxesArr.join(''));
// }

// 2.Вирішення

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("[type='number']");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesEl = document.getElementById('boxes');
boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';
boxesEl.style.alignItems = 'center';
boxesEl.style.marginTop = '30px';

const createBoxes = () =>{
  let size = 20;
  const boxArr =[];
  const error = `<div style ='color: red'>Enter a number from ${input.min} to ${input.max}</div>`;
  if (Number(input.value) >= Number(input.min) && Number(input.value) <= Number(input.max)) {
    for(let i = 0; i < input.value; i += 1) {
      size += 10;
      boxArr.push(`<div class ='elem' style='height: ${size}px; background-color: ${getRandomHexColor()}; width: ${size}px'></div>`);
    }
    boxesEl.insertAdjacentHTML("beforebegin", boxArr.join(''));
  }else {
    boxesEl.insertAdjacentHTML("beforebegin", error);
  }
}
const destroyBoxes = () => {
  location.reload();
}
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

// Цю задачку я вирішив не сам ! Варто розібратися !