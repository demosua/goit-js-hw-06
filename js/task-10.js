const controlsEl = document.querySelector("#controls");
const parentDivEl = document.querySelector("#boxes");
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');

const createBoxes = (amount) => {
  const elentsArr = [];
  let elementSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const elementColor = getRandomHexColor();
    elentsArr.push(`<div style="height: ${elementSize}px;width: ${elementSize}px;background-color: ${elementColor}"></div>`);
    elementSize += 10;
  }
  parentDivEl.insertAdjacentHTML("afterbegin", elentsArr.join(""));
}

const destroyBoxes = () => {
  parentDivEl.innerHTML = "";
  controlsEl.firstElementChild.value = '';
}

btnCreateEl.addEventListener('click', () => {
  createBoxes(controlsEl.firstElementChild.value);
});

btnDestroyEl.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
