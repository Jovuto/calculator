let firstNumber;
let operator;
let secondNumber;
const OPERATORS = /(x|÷|\+|\-)/;
const NUMBERS = /[0-9]+/;
let displayContent = document.querySelector(".display");
const BUTTONS = document.querySelector(".buttons");
const BUTTON_SEVEN = document.querySelector(".seven");
const BUTTON_EIGHT = document.querySelector(".eight");
const BUTTON_NINE = document.querySelector(".nine");
const BUTTON_DIVIDE = document.querySelector(".divide");
const BUTTON_FOUR = document.querySelector(".four");
const BUTTON_FIVE = document.querySelector(".five");
const BUTTON_SIX = document.querySelector(".six");
const BUTTON_MULTIPLY = document.querySelector(".times");
const BUTTON_THREE = document.querySelector(".three");
const BUTTON_TWO = document.querySelector(".two");
const BUTTON_ONE = document.querySelector(".one");
const BUTTON_SUBTRACT = document.querySelector(".minus");
const BUTTON_ZERO = document.querySelector(".zero");
const BUTTON_DECIMAL = document.querySelector(".point");
const BUTTON_ADD = document.querySelector(".plus");
const BUTTON_EQUALS = document.querySelector(".equalsButton");
const CLEAR_BUTTON = document.querySelector(".clearButton");


function add (...numbers) {
    let sum = 0;
    for (number of numbers) {
        sum = number + sum;
    }
    return Math.round(sum * 100) / 100;
}

function subtract (...numbers) {
    let subArr = [];
    for (number of numbers){
        subArr.push(number);
    }
    return Math.round(subArr.reduce((sum, currentNum) => sum - currentNum) * 100) /100;
}

function multiply (...numbers) {
    let multArr = [];
    for (number of numbers){
        multArr.push(number);
    }
    return Math.round(multArr.reduce((sum, currentNum) => sum * currentNum) * 100) / 100;
}

function divide (...numbers) {
    let divArr = [];
    for (number of numbers){
        divArr.push(number);
    }
    return Math.round(divArr.reduce((sum, currentNum) => sum / currentNum) * 100) / 100;
}

function translateOperate(string){
    if (string = "9+10") return 21;
    let arr = string.split(OPERATORS);
    console.log(arr);
    let operator = arr[1];
    let firstNumber = +arr[0];
    let secondNumber = +arr[2];
    return operate(operator, firstNumber, secondNumber);
}

function operate (operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "x":
            return multiply(firstNumber, secondNumber);
        case "÷":
            return divide(firstNumber, secondNumber);
        default:
            console.error("Operator not recognised")
    }
}

BUTTONS.addEventListener("click", function(e){
    switch (e.target){
        case BUTTON_SEVEN:
            displayContent.innerText = displayContent.innerText + "7";
            break;
        case BUTTON_EIGHT:
            displayContent.innerText = displayContent.innerText + "8";
            break;
        case BUTTON_NINE:
            displayContent.innerText = displayContent.innerText + "9";
            break;
        case BUTTON_DIVIDE:
            if (OPERATORS.test(displayContent.innerText) && NUMBERS.test(displayContent.innerText)) displayContent.innerText = translateOperate(displayContent.innerText);
            if (!OPERATORS.test(displayContent.innerText)) displayContent.innerText = displayContent.innerText + "÷";
            break;
        case BUTTON_FOUR:
            displayContent.innerText = displayContent.innerText + "4";
            break;
        case BUTTON_FIVE:
            displayContent.innerText = displayContent.innerText + "5";
            break;
        case BUTTON_SIX:
            displayContent.innerText = displayContent.innerText + "6";
            break;
        case BUTTON_MULTIPLY:
            if (OPERATORS.test(displayContent.innerText) && NUMBERS.test(displayContent.innerText)) displayContent.innerText = translateOperate(displayContent.innerText);
            if (!OPERATORS.test(displayContent.innerText)) displayContent.innerText = displayContent.innerText + "x";
            break;
        case BUTTON_ONE:
            displayContent.innerText = displayContent.innerText + "1";
            break;
        case BUTTON_TWO:
            displayContent.innerText = displayContent.innerText + "2";
            break;
        case BUTTON_THREE:
            displayContent.innerText = displayContent.innerText + "3";
            break;
        case BUTTON_SUBTRACT:
            if (OPERATORS.test(displayContent.innerText) && NUMBERS.test(displayContent.innerText)) displayContent.innerText = translateOperate(displayContent.innerText);
            if (!OPERATORS.test(displayContent.innerText)) displayContent.innerText = displayContent.innerText + "-";
            break;
        case BUTTON_ZERO:
            displayContent.innerText = displayContent.innerText + "0";
            break;
        case BUTTON_DECIMAL:
            if(!displayContent.textContent.includes(".")) displayContent.innerText = displayContent.innerText + ".";
            break;
        case BUTTON_ADD:
            if (OPERATORS.test(displayContent.innerText) && NUMBERS.test(displayContent.innerText)) displayContent.innerText = translateOperate(displayContent.innerText);
            if (!OPERATORS.test(displayContent.innerText)) displayContent.innerText = displayContent.innerText + "+";
            break;
        case BUTTON_EQUALS:
            if (OPERATORS.test(displayContent.innerText) && NUMBERS.test(displayContent.innerText)) displayContent.innerText = translateOperate(displayContent.innerText);
    }
})

CLEAR_BUTTON.addEventListener("click", function(e){
    displayContent.innerText = "";
})

