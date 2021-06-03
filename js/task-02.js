const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// console.log(ingredients);

const list = document.querySelector('ul');
console.log(list);

ingredients.forEach(ingredient => {
  const newItem = document.createElement('li');
  console.log(newItem);
  newItem.textContent = ingredient;
  list.appendChild(newItem);
});
