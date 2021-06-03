const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onCursorChange);

let cursorValue;
function onCursorChange(event) {
  cursorValue = Number(event.currentTarget.value);

  return (refs.text.style.fontSize = `${cursorValue}px`);
}
