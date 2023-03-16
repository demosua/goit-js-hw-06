const counterValue = document.querySelector("#counter #value");
let val = 0;
counterValue.textContent = val;

const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

decBtn.addEventListener('click', () => {
    val -= 1;
    counterValue.textContent = val;
});

incBtn.addEventListener('click', () => {
    val += 1;
    counterValue.textContent = val;
});
console.log(counterValue.textContent);