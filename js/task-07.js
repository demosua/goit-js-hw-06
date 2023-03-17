const rangeControlEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

rangeControlEl.addEventListener('input', (event) => {
    spanTextEl.style.fontSize = `${event.currentTarget.value}px`
});