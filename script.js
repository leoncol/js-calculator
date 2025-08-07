const numberButtons = document.querySelectorAll(".number-button");
const operationButtons = document.querySelectorAll(".operation-button");
const equalButton = document.querySelector("#equal");
const decimalButton = document.querySelector(".decimal-button");
const screentext = document.querySelector(".screentext");
const upperscreen = document.querySelector(".upperscreen");
const deleteButton = document.querySelector("#deleteButton");


let value1 = '0';
let value2 = '0';
let operator = '';


screentext.textContent = value1; 

function populateScreen(value) { // this function works with the numbers that populate the main screen.
    screentext.textContent = '';
    screentext.textContent += parseFloat(value);
   
}

function populateUpperScreen(value) { // this functions works with the inputs from value1, valu2, and value3 to display the operation process.
    if (value == value1 || value == operator) { // this condition makes sure that we add value1 and the operator symbol to the upper display
    let upperScreenvalue1 = parseFloat(value1);
    upperscreen.textContent += (upperScreenvalue1 + value);
    } else if (value == value2) {
    let upperScreenvalue2 = parseFloat(value2);
    upperscreen.textContent += (upperScreenvalue2 + ' = ')
    }
    
    
}

function getValue() {
    if (this.textContent == 0 && operator == ''){ // this is a safeguard if the user tries to start his operation with a zero.
        value1 = 0;
        populateScreen(value1);
    } else if (operator == ''){ // if the operator is empty, it means it's the first value
        let value = '';
        value += this.textContent;
        value1 += value;
        populateScreen(value1);
        console.log(`${this.textContent} value1 clicked`);
    } else if (operator != ''){ // if the operator is not empty, it means we should introduce the second value.
        let value = '';
        value += this.textContent;
        value2 += value;
        populateScreen(value2)
        console.log(`${this.textContent} value2 clicked`);
    }
   
    
}



function saveOperator() {
    let value = '';
    value += this.textContent;
    if (operator == ''){
         operator += value;
         populateUpperScreen(value);
          console.log(`${this.textContent} clicked`);
    }
}

function equalOperate(){
    let result = operate(value1, operator, value2);
    populateScreen(result);
    populateUpperScreen(value2); // sends the second value to be appended to the upper screen
}

numberButtons.forEach(pressNumber);

operationButtons.forEach(pressOperator);

function pressNumber(button) {
    button.addEventListener("click", getValue);
    
    
}

function pressOperator(button) {
    button.addEventListener("click", saveOperator);
}

equalButton.addEventListener("click", equalOperate);





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
    num1 = parseFloat(value1);
    num2 = parseFloat(value2);
    if (operator == ' + '){
        return add(num1, num2);
    } else if (operator == ' - '){
        return substract(num1, num2);
    } else if (operator == ' × '){
        return multiply(num1, num2);
    } else if (operator == ' ÷ '){
        return divide(num1, num2);
    } else {
        return 'Insert a valid operator!'
    }
}



deleteButton.addEventListener("click", clearScreen);
