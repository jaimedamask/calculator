let num1;
let num2;
let operator;
const display = document.getElementById('display');

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(num1, num2, operator) {
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);

    if (operator === 'addition') {
        return add(n1, n2);
    };

    if (operator === 'subtraction') {
        return subtract(n1, n2);
    };

    if (operator === 'multiplication') {
        return multiply(n1, n2);
    };

    if (operator === 'division') {
        if (n2 === 0) {
            return 'You can\'t divide by 0.';
        } else {
            return divide(n1, n2);
        }
    };
}

const calculator = document.querySelector('#calculator');
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const button = e.target; 
        const operation = button.dataset.action;
        const buttonContent = button.textContent;
        let displayedNum = display.textContent;

        if (!operation) {
            if (displayedNum === '0') {
                display.textContent = buttonContent;
            } else {
                display.textContent = displayedNum += buttonContent;
            }
        }

        if (
            operation === 'addition' ||
            operation === 'subtraction' ||
            operation === 'multiplication' ||
            operation === 'division'
        ) {
            calculator.dataset.num1 = displayedNum;
            calculator.dataset.operator = operation;
            
            display.textContent = 0;
        }

        if (operation === 'decimal') {
            if (displayedNum.includes('.') === false) {
                display.textContent = displayedNum + '.';
            }
        }

        if (operation === 'negative') {
            display.textContent = displayedNum *= -1;
        }

        if (operation === 'clear') {
            display.textContent = 0;
        }

        if (operation === 'calculate') {
            num1 = calculator.dataset.num1;
            num2 = displayedNum;
            
            operator = calculator.dataset.operator;
            let result = operate(num1, num2, operator);
            display.textContent = result;
        }
    }
})