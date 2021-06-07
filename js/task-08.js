const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-action="render"]'),
  btnClear: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
  box: document.querySelector('#box'),
};

refs.input.addEventListener('input', onImputChange);
refs.btnCreate.addEventListener('click', createBoxes);
refs.btnClear.addEventListener('click', destroyBoxes);

let inputValue;
function onImputChange(event) {
  return (inputValue = Number(event.currentTarget.value));
}

function createBoxes(amount) {
  amount = inputValue;
  let itemSize = 10;
  let newArr = [];
  for (let i = 1; i <= amount; i++) {
    let newBox = document.createElement('div');
    itemSize += 10;

    newBox.style.width = itemSize + 'px';
    newBox.style.height = itemSize + 'px';
    // newBox.style.margin = '5px';
    newBox.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 330,
    )},${Math.floor(Math.random() * 150)},${Math.floor(Math.random() * 350)})`;
    i = newArr.push(newBox);
  }
  return refs.boxes.append(...newArr);
}

// function destroyBoxes() {
//   // window.location.reload();
//   return;
// }

function destroyBoxes() {
  refs.input.value = '';
  while (refs.boxes.firstChild) {
    refs.boxes.firstChild.remove();
  }
}
