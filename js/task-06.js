const inputEl = document.querySelector("#validation-input");
const lettersQuantity = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length == lettersQuantity) {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");
        return;
    }
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
});