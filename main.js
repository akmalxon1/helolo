let body = document.querySelector('body');
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

body.style.backgroundColor = 'red';
body.style.color = 'white';

counterElement.style.fontSize = '3rem';
counterElement.style.fontWeight = 'bold';
counterElement.style.textAlign = 'center'; 
counterElement.style.padding = '2rem'; 


incrementButton.style. backgroundColor = 'green';
incrementButton.style. color = 'white';
incrementButton.style. fontWeight = 'bold';
incrementButton.style. fontSize = '1.5rem';
incrementButton.style. padding = '0.5rem';
incrementButton.style. border = 'none';

decrementButton.style. backgroundColor = 'blue';
decrementButton.style. color = 'white';
decrementButton.style. fontWeight = 'bold';
decrementButton.style. fontSize = '1.5rem';

resetButton.style. backgroundColor = 'yellow';
resetButton.style. color = 'black';
resetButton.style. fontWeight = 'bold';
resetButton.style. fontSize = '1.5rem';
 


let count = 0;

function updateCounter() {
  counterElement.textContent = count;
}

incrementButton.addEventListener('click', () => {
  count++;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetButton.addEventListener('click', () => {
  count = 0;
  updateCounter();
});



updateCounter();

