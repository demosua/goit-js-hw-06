const inputEl = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) => {
    event.currentTarget.value == '' ? userName.textContent = 'Anonymous' : userName.textContent  = event.currentTarget.value;
})