const numberButtons = document.querySelectorAll(".number-button");
const operationButtons = document.querySelectorAll(".operation-button");
const equalButton = document.querySelector("equal-button");
const decimalButton = document.querySelector(".decimal-button");
const screentext = document.querySelector(".screentext");
const upperscreen = document.querySelector(".upperscreen");
const deleteButton = document.querySelector("#deleteButton");

let value1 = 0;
let value2 = 0;
let operator = '';

function populateScreen() {
    screentext.textContent = this.textContent;
    console.log(`${this.textContent} clicked`);
}

numberButtons.forEach(pressNumber);

function pressNumber(button) {
    button.addEventListener("click", populateScreen);
    
}








const checkDecimal = function(number) {
    if (Number.isInteger(number) == false){
             stringNumber = number.toString();
             splitNumber = stringNumber.split(".");

        if (splitNumber[0].length >= 1){
            return parseFloat(Number.parseFloat(number).toFixed(1));
        } else {
        return parseFloat(number);
        }
}   else {
    return number;
}
    
}



const clearScreen = function() {
     displayedNumbers = '';
     displayedNumbers2 = '';
     upperDisplayedNumbers = '';
     displayResult = '';
     counter = 0;
     upperCounter = 0;
     val1 = 0;
     val2 = 0;
     symbol = '';
     result = 0;
screentext.textContent = val1;
upperscreen.textContent = upperDisplayedNumbers;
screentext.className = 'screentext';

};


const add = function(num1, num2) {
    let result = 0;
    result = num1 + num2;
    return result;
  
};
  
const substract = function(num1, num2) {
    let result = 0;
    result = num1 - num2;
    return result;
};
  

const multiply = function(num1, num2) {
    let result = 0;
    result = num1 * num2;
    return result;
};

const divide = function(num1, num2){
    let result = 0;
    result = num1 / num2;
    if (result == Infinity){
        return "Can't divide by zero."
    } else {
        return result;
    }
};



const operate = function(num1, operator, num2){
    if (operator == '+'){
        return add(num1, num2);
    } else if (operator == '-'){
        return subtract(num1, num2);
    } else if (operator == '*'){
        return multiply(num1, num2);
    } else if (operator == '÷'){
        return divide(num1, num2);
    } else {
        return 'Insert a valid operator!'
    }
}



deleteButton.addEventListener("click", clearScreen);
