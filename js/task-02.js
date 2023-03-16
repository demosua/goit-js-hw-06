const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrElements = [];
const ingredientsEl = document.querySelector("#ingredients");
  ingredients.forEach(el => {
    const element = document.createElement("li");
    element.textContent = el;
    element.classList.add("item");
    arrElements.push(element);
  });  

ingredientsEl.append(...arrElements);