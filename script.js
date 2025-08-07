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
let result = '';



screentext.textContent = value1; 

function populateScreen(value) { // this function works with the numbers that populate the main screen.
    screentext.textContent = '';
    screentext.textContent += parseFloat(value);
   
}

function populateUpperScreen(value) { // this functions works with the inputs from value1, valu2, and value3 to display the operation process.
   upperscreen.textContent = value;
    
}

function operationProcess(value) {
    let process = '';
    if (operator != '' && value2 == '0' && result == ''){
    process += (parseFloat(value1) + value);
    populateUpperScreen(process);
    } else if (value2 != '0'){
        process += (parseFloat(value1) + operator + parseFloat(value2) + ' = ');
        populateUpperScreen(process);
    } else if (value1 == '0' && operator == ''){
        process += (parseFloat(value1) + ' = ');
        populateUpperScreen(process);
    } else if (value1 != '0' && value2 == '0' ){
        process += (parseFloat(value1) + ' = ');
        populateUpperScreen(process); 
    } else {
        process += (parseFloat(value1) + operator);
        populateUpperScreen(process);
    }
    

}

function getValue() {
    resetValues();
    if (this.textContent == 0 && operator == '' && value1 == '0'){ // this is a safeguard if the user tries to start his operation with a zero.
        value1 = 0;
        populateScreen(value1);
    } else if (value2 == '0' && operator == ''){ // if the operator is empty, it means it's the first value
        let value = '';
        value += this.textContent;
        value1 += value;
        populateScreen(value1);
        console.log(`${this.textContent} value1 clicked`);
    } else if (value2 != ''){ // if the operator is not empty, it means we should introduce the second value.
        let value = '';
        value += this.textContent;
        value2 += value;
        populateScreen(value2)
        console.log(`${this.textContent} value2 clicked`);
    } 

   
    
}



function getOperator() {
    let value = '';
    value += this.textContent;
    if (operator == ''){
         operator += value;
        operationProcess(value);
        console.log(`${this.textContent} clicked`);
    } else if (operator != '' && value2 != '0'){
        symbolOperate();
        operator = value;
        operationProcess(value); // this updates the upperscreen with the new entered operator
    } else if (operator != ''){
        operator = this.textContent;
        operationProcess(operator);
    }

}

function equalOperate(){
    if (value1 != '0' && value2 != '0'){
    result = operate(value1, operator, value2);
    populateScreen(result);
    operationProcess(value2); // sends the second value to be appended to the upper screen
    } else if (value1 != '0' && value2 == '0' && operator != '') {
        value2 = value1;
        result = operate(value1, operator, value2);
        populateScreen(result);
        operationProcess(value2);
    } else if (value1 != '0' && value2 == '0'){
        populateScreen(value1);
        operationProcess(value1);
    } else {
    value1 = 0;
    populateScreen(value1);
    operationProcess(value1);
    }
   
}

function symbolOperate(){
    result = operate(value1, operator, value2);
    let value = '';
    value1 = result;
    result = '';
    value += value1;
    populateScreen(value1);
    value2 = '0';
    operationProcess(value1);
    console.log(`${this.textContent} operator clicked`);

}


function resetValues() { // this reset all values to start a new operation, just when all the respective values are already 
// define meaning the operation is complete
    if (value1 != '0' && value2 != '0' && result != ''){
    value1 = '0';                              
    value2 = '0'; 
    operator = '';  
    result = '';
    upperscreen.textContent = '';
    screentext.textContent = '';
    } else if (value1 == 0 && value2 == 0 && result == '') {
    upperscreen.textContent = '';
    screentext.textContent = '';
    }
   
}

numberButtons.forEach(pressNumber);

operationButtons.forEach(pressOperator);

function pressNumber(button) {
    button.addEventListener("click", getValue);
    
    
}

function pressOperator(button) {
    button.addEventListener("click", getOperator);
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
