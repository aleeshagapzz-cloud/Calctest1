const resultInput = document.getElementById('result');

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    if (resultInput.value === '' && operator === '-') {
        resultInput.value = '-';
        return;
    }
    if (resultInput.value !== '' && !isOperator(resultInput.value.slice(-1))) {
        resultInput.value += operator;
    }
}

function clearResult() {
    resultInput.value = '';
}

function deleteLastChar() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        const expression = resultInput.value;
        if (/[^-()\d/*+.]/.test(expression)) {
            resultInput.value = 'Error';
            return;
        }
        const result = eval(expression);
        resultInput.value = result;
    } catch (error) {
        resultInput.value = 'Error';
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}