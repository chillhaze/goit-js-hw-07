const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button'),
  btnClear: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

refs.btnCreate.classList.add('createBtn');
refs.btnClear.classList.add('destroyBtn');

refs.input.addEventListener('input', onImputChange);
refs.btnCreate.addEventListener('click', onCreateBtnClick);

let amount;
function onImputChange(event) {
  amount = event.currentTarget.value;
  createBoxes(amount);
}

let markup;
const createMarkup = function () {
  markup = '<div id="box"></div>';

  return refs.boxes.insertAdjacentHTML('afterbegin', markup).join('');
};

function onCreateBtnClick() {
  return amount * createMarkup;
}
