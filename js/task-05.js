const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};
// console.dir(refs.input);
// console.dir(refs.output);

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.output.textContent = event.currentTarget.value;
}
