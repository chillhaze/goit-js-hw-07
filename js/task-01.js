const categoryMarkup = document.querySelector('#categories');

const allElementItems = document.querySelectorAll('li.item');
console.log('В списке ', allElementItems.length, ' категории.');

const elementItem = categoryMarkup.querySelectorAll('.item');

// for (const key of elementItem) {
//   console.log('Категория:', key.querySelector('h2').textContent);
//   console.log('Количество элементов:', key.querySelectorAll('ul li').length);
// }

elementItem.forEach(item => {
  console.log('Категория:', item.querySelector('h2').textContent);
  console.log('Количество элементов:', item.querySelectorAll('ul li').length);
});
