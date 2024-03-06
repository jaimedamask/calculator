let num1;
let num2;
let operator;

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
    if (operator === addition) {
        return add(num1, num2);
    };

    if (operator === subtraction) {
        return subtract(num1, num2);
    };

    if (operator === multiplication) {
        return multiply(num1, num2);
    };

    if (operator === division) {
        return divide(num1, num2);
    };
}