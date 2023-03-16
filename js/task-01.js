const listOfCatecories = document.querySelectorAll('.item');
console.log(`Number of categories: ${listOfCatecories.length}`);

listOfCatecories.forEach(el => {
    const category = el.querySelector("h2");
    const listOfElements = el.querySelectorAll("li");
        console.log('');
        console.log(`Category: ${category.textContent}`);
        console.log(`Elements: ${listOfElements.length}`);
});