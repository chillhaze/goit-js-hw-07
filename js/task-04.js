const refs = {
  counter: document.querySelector('#counter'),
  value: document.querySelector('#value'),
  decrement: document.querySelector('.dencrementBtn'),
  increment: document.querySelector('.incrementBtn'),
};

refs.counter.firstElementChild.classList.add('dencrementBtn');
refs.counter.lastElementChild.classList.add('incrementBtn');

refs.decrement = document.querySelector('.dencrementBtn');
refs.increment = document.querySelector('.incrementBtn');

let counterValue = Number(refs.value.textContent);

refs.decrement.addEventListener('click', decrement);
function decrement(event) {
  counterValue -= 1;
  console.log(counterValue);
  refs.value.textContent = counterValue;
}

refs.increment.addEventListener('click', increment);
function increment(event) {
  counterValue += 1;
  console.log(counterValue);
  refs.value.textContent = counterValue;
}
