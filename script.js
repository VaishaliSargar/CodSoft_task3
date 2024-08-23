function inputNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function inputDoubleZero() {
    const display = document.getElementById('display');
    // Prevent "00" from being added as the first character
    if (display.value.length > 0) {
        display.value += '00';
    }
}

function inputOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    if ('+-*/'.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function inputDecimal() {
    const display = document.getElementById('display');
    // Check if the current value already has a dot in the last number block
    if (!display.value.includes('.')) {
        display.value += '.';
    } else {
        // Check if the last entered character is an operator
        const lastChar = display.value[display.value.length - 1];
        if ('+-*/'.includes(lastChar)) {
            display.value += '0.'; // Start a new decimal number
        }
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || '0';
    } catch {
        display.value = 'Error';
    }
}

function setTheme(theme) {
    document.body.className = ''; // Reset any existing theme classes
    document.body.classList.add(`${theme}-theme`);
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        inputNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        inputOperator(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '.') {
        inputDecimal();
    } else if (key === '0' && event.shiftKey) {
        inputDoubleZero();
    }
});
