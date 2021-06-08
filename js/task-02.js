const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('ul');

const items = ingredients.map(item => {
  const newItem = document.createElement('li');
  newItem.textContent = item;
  return newItem;
});

list.append(...items);

// ----------------------------прошлый варинт решения
// const newArr = [];
// ingredients.map(ingredient => {
//   const newItem = document.createElement('li');
//   newItem.textContent = ingredient;
//   newArr.push(newItem);
//   return list.append(...newArr);
// });
