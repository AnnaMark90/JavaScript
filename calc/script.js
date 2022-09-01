/* Доработать:
 - множественный набор операций подряд
 - 0.1 + 0.2 
*/

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingSecOper: false,
    operator: null,
};

const allCalculation = {
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '%': (firstOperand, secondOperand) => firstOperand * (secondOperand / 100),
    '=': (firstOperand, secondOperand) => secondOperand,
    '+/-': (firstOperand, secondOperand) => secondOperand >= 0 ? -secondOperand : +secondOperand,
};

const handleOperator = (nextOperator) => {
    const {
        firstOperand,
        displayValue,
        operator,
        waitingSecOper,
    } = calculator;

    const inputValue = parseFloat(displayValue);

    if(operator && waitingSecOper){
        calculator.operator = nextOperator;
    };

    if (firstOperand === null) {
        calculator.firstOperand = inputValue;
    }else if(operator){
        let result = 0;
        const currentValue = firstOperand || 0;

        if (operator === '/' && inputValue === '0') {
            result = 'Деление на ноль';
        }else{
            result = allCalculation[operator](currentValue, inputValue);
            // checkRes(result);
        };

        calculator.displayValue = result;
        calculator.firstOperand = result;
    };

    // if (nextOperator) clear();

    if (nextOperator === '+/-') {
        let result = '0';
        result = allCalculation[nextOperator](0, inputValue);
        calculator.displayValue = result;
        calculator.firstOperand = result;
        updateDisplay();
    }else{
        calculator.waitingSecOper = true;
        calculator.operator = nextOperator;
    };
};

const inputOperand = (operand) => {
    const{
        displayValue,
        waitingSecOper,
    } = calculator;

    if (waitingSecOper) {
        calculator.displayValue = operand;
        calculator.waitingSecOper = false;
    }else{
        calculator.displayValue = displayValue === '0' ? operand : displayValue + operand;
    };
};

// const checkRes = (result, precision = 12) => {
//     return +parseFloat(result.toPrecision(precision));
// };

const updateDisplay = () => {
    const display = document.querySelector('.input').children[0];
    display.value = calculator.displayValue;
};

const clear = () => {
    calculator.displayValue = '0';
    calculator.waitingSecOper= false;
    calculator.firstOperand = null;
    calculator.operator = null;
};

const addDot = (value) => {
    const {displayValue} = calculator;
    let first = displayValue.indexOf(value);

    if (first === -1) calculator.displayValue += value;
    return;
};

let keys = document.querySelector('.buttons');
keys.addEventListener('click', e => {
    const {target} = e;

    if(!target.matches('button')) return;

    if(target.classList.contains('operation')){
        if(target.dataset.value !== 'C'){
            handleOperator(target.dataset.value);
            updateDisplay();
            return;
        }else{
            clear();
            updateDisplay();
            return;
        };
    };

    if (target.classList.contains('dot')) {
      addDot(target.dataset.value) ;
      updateDisplay();
      return;
    };

    inputOperand(target.dataset.value);
    updateDisplay();
});

updateDisplay();
