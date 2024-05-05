let firstNumber;
let operator;
let secondNumber;

function add (...numbers) {
    let sum = 0;
    for (number of numbers) {
        sum = number + sum;
    }
    return sum;
}

function subtract (...numbers) {
    let subArr = [];
    for (number of numbers){
        subArr.push(number);
    }
    return subArr.reduce((sum, currentNum) => sum - currentNum);
}

function multiply (...numbers) {
    let multArr = [];
    for (number of numbers){
        multArr.push(number);
    }
    return multArr.reduce((sum, currentNum) => sum * currentNum);
}

function divide (...numbers) {
    let divArr = [];
    for (number of numbers){
        divArr.push(number);
    }
    return divArr.reduce((sum, currentNum) => sum / currentNum);
}

function operate (operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            console.error("Operator not recognised")
    }
}