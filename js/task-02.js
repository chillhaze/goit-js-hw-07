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
  const newLi = document.createElement('li');
  console.log(newLi);
  newLi.textContent = ingredient;
  list.appendChild(newLi);
});
