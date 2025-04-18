// script.js

let display = document.getElementById('display');
let currentInput = '';
let decimalUsed = false;

function appendNumber(num) {
  currentInput += num;
  display.innerText = currentInput;
}

function appendDot() {
  if (!decimalUsed) {
    currentInput += '.';
    decimalUsed = true;
    display.innerText = currentInput;
  }
}

function appendOperator(op) {
  if (currentInput !== '') {
    currentInput += ' ' + op + ' ';
    decimalUsed = false;
    display.innerText = currentInput;
  }
}

function clearDisplay() {
  currentInput = '';
  decimalUsed = false;
  display.innerText = '0';
}

function deleteLast() {
  if (currentInput.endsWith(' ')) {
    currentInput = currentInput.slice(0, -3);
  } else {
    currentInput = currentInput.slice(0, -1);
  }
  display.innerText = currentInput || '0';
}

function calculate() {
  try {
    const result = eval(currentInput.replace(/÷/g, '/').replace(/×/g, '*'));
    display.innerText = result;
    currentInput = result.toString();
  } catch {
    display.innerText = 'Error';
    currentInput = '';
  }
}
