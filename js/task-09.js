const bodyEl = document.querySelector("body");
const spanEl = document.querySelector("span.color");
const btnEl = document.querySelector(".change-color");

const handleClick = (event) => {
  const colorVal = getRandomHexColor();
  bodyEl.style.backgroundColor = colorVal;
  spanEl.textContent = colorVal;
}

btnEl.addEventListener('click', handleClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
