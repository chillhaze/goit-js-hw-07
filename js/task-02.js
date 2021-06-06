const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('ul');

const newArr = [];
ingredients.map(ingredient => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  newArr.push(newItem);
  return list.append(...newArr);
});
