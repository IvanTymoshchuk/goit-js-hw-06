// 1. Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// 2. Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// 3. Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// 4. Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.



const newInput = document.querySelector("#validation-input");
newInput.addEventListener("blur", onBlur);
function onBlur(event) {
  const inputColor = event.currentTarget;
  const inputLength = Number(inputColor.dataset.length);
  if (inputColor.value.length === inputLength) {
    inputColor.classList.remove('valid');
    inputColor.classList.add('invalid');
  } else {
    inputColor.classList.remove('invalid');
      inputColor.classList.add('valid');
  }
}


// #data-атрибути
// Дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript. Цю можливість використовують для того, щоб спростити написання коду, наприклад, зв'язати дані і розмітку за унікальним ідентифікатором, вказати тип дії кнопки тощо.