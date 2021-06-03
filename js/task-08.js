const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button'),
  btnClear: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
  box: document.querySelector('#box'),
};

refs.btnCreate.classList.add('createBtn');
refs.btnClear.classList.add('destroyBtn');

refs.input.addEventListener('input', onImputChange);
refs.btnCreate.addEventListener('click', onCreateBtnClick);

let amount;
function onImputChange(event) {
  amount = event.currentTarget.value;
  // console.log(event.target.value);
  createBoxes(amount);
}

let markup = '<div id="box" class="random"></div>';
function createBoxes(amount) {
  for (let i = 1; i < amount; i++) {
    i = `<div id="box" class="random"></div>`;
    markup += i;
  }
}

function onCreateBtnClick() {
  if (amount >= 1) {
    return refs.boxes.insertAdjacentHTML('beforeend', markup);
  }
}

const styles = document.querySelector('style');
console.log(styles);

const boxStyles = {
  width: 55 + Math.floor(Math.random() * 256),
  height: 40 + Math.floor(Math.random() * 86),
  color: `rgb(${155 + Math.floor(Math.random() * 26)},${
    5 + Math.floor(Math.random() * 146)
  },${1 + Math.floor(Math.random() * 69)})`,
};

const newStyle = `.random {background-color: ${boxStyles.color}; width: ${boxStyles.width}px; height: ${boxStyles.height}px}`;

styles.insertAdjacentHTML('afterbegin', newStyle);
