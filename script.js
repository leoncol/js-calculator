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
let process = '';
let result = '';




decimalButton.addEventListener("click", getValue);
deleteButton.addEventListener("click", resetValues);

screentext.textContent = value1; 

function populateScreen(value) { // this function works with the numbers that populate the main screen.
    value = value.toString();
    if (value == "Can't divide by zero."){
    upperscreen.textContent = '';
    screentext.textContent = '';
    screentext.className = 'message';
    screentext.textContent += value;
    } else if (value.indexOf('.') >= 0){
        screentext.textContent = '';
        screentext.textContent += value;
    } else {
    screentext.textContent = '';
    screentext.textContent += parseFloat(value);
   
    }
   
}

function populateUpperScreen(value) { // this functions works with the inputs from value1, valu2, and value3 to display the operation process.
   upperscreen.textContent = value;
    
}

function operationProcess(value) {
    if (operator != '' && value2 == '0' && result == '' && process.indexOf(operator) == -1){
    process = (parseFloat(value1) + value);
    populateUpperScreen(process);
    } else if (value2 != '0'){
        process += (parseFloat(value2) + ' = ');
        populateUpperScreen(process);
    } else if (value1 == '0' && operator == ''){
        process += (parseFloat(value1) + ' = ');
        populateUpperScreen(process);
    } else if (value1 != '0' && value2 == '0' && operator == '' ){
        process = (parseFloat(value1) + ' = ');
        populateUpperScreen(process); 
    } else if (process.indexOf(operator) == -1) {
        process += (parseFloat(value1) + operator);
        populateUpperScreen(process);
    }
    

}

function getValue() {
    resetValues();
    if (this.textContent == 0 && operator == '' && value1 == '0'){ // this is a safeguard if the user tries to start his operation with a zero.
        value1 = 0;
        if (this.textContent == '.') {
            value1 = addDecimal(value1);
        }
        populateScreen(value1);
    } else if (value2 == '0' && operator == ''){ // if the operator is empty, it means it's the first value
        let value = '';
         if (this.textContent == '.') {
            value1 = addDecimal(value1);
        } else {
             value += this.textContent;
            value1 += value;
        }
        populateScreen(value1);
    } else if (value2 != ''){ // if the operator is not empty, it means we should introduce the second value.
        let value = '';
         if (this.textContent == '.') {
            value2 = addDecimal(value2);
        } else {
            value += this.textContent;
            value2 += value;
        }
        populateScreen(value2)
    } 

   
    
}


function addDecimal(value){
    value = value.toString();
    if (value.indexOf('.') == -1){
        value = parseFloat(value);
        value = value + '.';
        return value
    } else {
        return value
    }
}



function getOperator() {
    let value = '';
    value += this.textContent;
    if (operator == ''){
         operator += value;
        operationProcess(value);
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
    if (value1 != '0'  && value2 != '0' && process.indexOf('=') == -1){
    result = operate(value1, operator, value2);
        if (result == "Can't divide by zero."){
            populateScreen(result);
        } else {
            populateScreen(result);
            operationProcess(value2); // sends the second value to be appended to the upper screen
        }
    } else if (value1 != '0' && value2 == '0' && operator != '' && process.indexOf('=') == -1) {
        value2 = value1;
        result = operate(value1, operator, value2);
        populateScreen(result);
        operationProcess(value2);
    } else if (value1 != '0' && value2 == '0' && process.indexOf('=') == -1){
        populateScreen(value1);
        operationProcess(value1);
    } else if (process.indexOf('=') == -1) {
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


}


function resetValues() { // this reset all values to start a new operation, just when all the respective values are already 
// define meaning the operation is complete
    if (this.textContent != 'C' && value1 != '0' && value2 != '0' && result != ''){
    value1 = '0';                              
    value2 = '0'; 
    operator = '';  
    result = '';
    process = '';
    upperscreen.textContent = '';
    screentext.className = 'screentext';
    screentext.textContent = '';
    } else if (this.textContent != 'C' && value1 == '0' && value2 != '0' && result == 0 && operator != '' && process.indexOf(' = ') >= 0) {
 value1 = '0';                              
    value2 = '0'; 
    operator = '';  
    result = '';
    process = '';
    upperscreen.textContent = '';
    screentext.className = 'screentext';
    } 
    else if (this.textContent != 'C' && value1 != '0.' && value1 == 0 && value2 == 0 && result == '') {

     value1 = '0';                              
        value2 = '0'; 
        operator = '';  
        result = '';
        process = '';
     screentext.className = 'screentext';
     upperscreen.textContent = '';
     screentext.textContent = '';
    } else if (value2 == 0 && result == '' && process.indexOf('=') >= 0) {
        value1 = '0';                              
        value2 = '0'; 
        operator = '';  
        result = '';
        process = '';
     screentext.className = 'screentext';
     upperscreen.textContent = '';
     screentext.textContent = '';
    }
        else if (this.textContent == 'C') {
        value1 = '0';                              
        value2 = '0'; 
        operator = '';  
        result = '';
        process = '';
        screentext.className = 'screentext';
        upperscreen.textContent = '';
        screentext.textContent = value1;
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



const add = function(num1, num2) {
    let result = 0;
    result = num1 + num2;
    return checkDecimal(result);
  
};
  
const substract = function(num1, num2) {
    let result = 0;
    result = num1 - num2;
    return checkDecimal(result);
};
  

const multiply = function(num1, num2) {
    let result = 0;
    result = num1 * num2;
    return checkDecimal(result);
};

const divide = function(num1, num2){
    let result = 0;
    result = num1 / num2;
    if (result == Infinity){
        return "Can't divide by zero."
    } else {
        return checkDecimal(result);
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
    } 

}





