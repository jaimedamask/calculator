let prevNum = '';
let currentNum = '';
let operation = null;
let displayedOperator = '';

const display = document.querySelector('#display');
const prevNumDisplay = document.getElementById('prev-num');
const currentNumDisplay = document.getElementById('current-num');
//const buttons = document.querySelector('#buttons');
const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operator');
const decimalButton = document.getElementById('decimal');
const negativeButton = document.getElementById('negative');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('equals');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayedOperator = button.innerText;
        setOperator(button.dataset.action);
        updateDisplay();
        console.log(button.dataset.action);
    });
});

decimalButton.addEventListener('click', addDecimal);
negativeButton.addEventListener('click', makeNegPos);
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteLast);
equalsButton.addEventListener('click', operate);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function addDecimal() {
    if (currentNum.includes('.')) return;
    if (currentNum === '') currentNum = '0';

    currentNum += '.';
    updateDisplay();
}

function makeNegPos() {
    currentNum = parseFloat(currentNum) * -1;
    updateDisplay();
}

function clear() {
    currentNum = '';
    prevNum = '';
    operation = null;
    displayedOperator = null;
    updateDisplay();
}

function deleteLast() {
    currentNum = currentNum.toString().slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    if (number !== '.' && !number.includes('.')) {
        currentNum = currentNum.toString() + number.toString();
    } else return;
}

function setOperator(selectedOperator) {
    if (currentNum === '') return;
    if (prevNum !== '') {
        operate();
    }
    operation = selectedOperator;
    prevNum = currentNum;
    currentNum = '';
}

function operate() {
    let result;
    const prev = parseFloat(prevNum);
    const current = parseFloat(currentNum);

    if (isNaN(prev) || isNaN(current)) return;
    if (current === 0 && operation === 'division') {
        alert("Try again. You can't divide by 0.");
        clear();
    } 

    switch (operation) {
        case 'addition':
            result = add(prev, current);
            break;
        case 'subtraction':
            result = subtract(prev, current);
            break;
        case 'multiplication':
            result = multiply(prev, current);
            break;
        case 'division':
            result = divide(prev, current);
            break;
        default:
            return;
    }

    currentNum = result;
    operation = undefined;
    displayedOperator = null;
    prevNum = '';
    result = 0;
    updateDisplay();
}

function updateDisplay() {
    currentNumDisplay.innerText = currentNum;

    if (displayedOperator) {
        prevNumDisplay.innerText = prevNum + ' ' + displayedOperator;
    } else {
        prevNumDisplay.innerText = prevNum;
    }
}