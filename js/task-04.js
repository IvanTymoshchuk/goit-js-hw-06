const CounterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};


// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.

const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const valueEl = document.querySelector("#value");

decr.addEventListener('click', function () {
    CounterValue.decrement();
    valueEl.textContent = CounterValue.value;
})

incr.addEventListener('click', function () {
    CounterValue.increment();
        valueEl.textContent = CounterValue.value;

})


// А МОЖНА І ТАКИМ СПОСОБОМ 


// let counterValue = 0;
// const decr = document.querySelector("button[data-action='decrement']");
// const incr = document.querySelector("button[data-action='increment']");
// const myValue = document.querySelector("#value");

// const countDecr = function() {
//   counterValue -= 1;
//   myValue.textContent = counterValue;
// };

// const countIncr = function() {
//   counterValue += 1;
//   myValue.textContent = counterValue;
// };

// decr.addEventListener("click", countDecr);
// incr.addEventListener("click", countIncr);