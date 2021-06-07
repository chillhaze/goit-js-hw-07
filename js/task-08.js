const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-action="render"]'),
  btnClear: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
  box: document.querySelector('#box'),
};

refs.btnCreate.classList.add('createBtn');
refs.btnClear.classList.add('destroyBtn');

refs.input.addEventListener('input', onImputChange);
refs.btnCreate.addEventListener('click', createBoxes);
refs.btnClear.addEventListener('click', destroyBoxes);

let inputValue;
function onImputChange(event) {
  inputValue = Number(event.currentTarget.value);
  // console.log(typeof inputValue);
}

function createBoxes(amount) {
  amount = inputValue;
  console.log(amount);

  let newArr = [];
  for (let i = 1; i <= amount; i++) {
    let newBox = document.createElement('div');
    newBox.style.width = `${50 + Math.floor(Math.random() * 350)}px`;
    newBox.style.height = `${10 + Math.floor(Math.random() * 35)}px`;
    newBox.style.backgroundColor = `rgb(${
      1 + Math.floor(Math.random() * 290)
    },${1 + Math.floor(Math.random() * 55)},${
      1 + Math.floor(Math.random() * 111)
    })`;
    i = newArr.push(newBox);
  }
  return refs.boxes.append(...newArr);
}

function destroyBoxes() {
  return refs.boxes.remove('.box');
}
