const refs = {
  input: document.querySelector('#validation-input'),
};

const dataLength = Number(refs.input.dataset.length);
// console.log(typeof dataLength);

refs.input.addEventListener('input', onImputChange);

let currentInputLength = 0;
function onImputChange(event) {
  return (currentInputLength = event.currentTarget.value.length);
}

refs.input.addEventListener('blur', () => {
  if (currentInputLength === dataLength) {
    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.add('invalid');
  }
});
