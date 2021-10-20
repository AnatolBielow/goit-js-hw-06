const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementsList = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const elementItem = document.createElement('li');
  elementItem.classList.add('item');
  elementItem.textContent = element;
  return elementItem;
});

elementsList.append(...elements);