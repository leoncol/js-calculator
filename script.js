const buttons = document.querySelectorAll(".button");
const screentext = document.querySelector(".screentext");
let displayedNumbers = '';
let counter = 0;

const pressButton = function(button) {
    button.addEventListener("click", displayNumber);
};

const displayNumber = function(){
    if (counter < 7){
        displayedNumbers += this.textContent
        screentext.textContent = displayedNumbers;
        counter += 1;
        console.log(counter);
    }
        
    
    
    
    
};


const add = function(num1, num2) {
    return num1 + num2;
  
};
  
const subtract = function(num1, num2) {
    return num1 - num2;
};
  

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2){
    return num1 / num2;
};

const display = function(num1, symbol, num2){

};

const operate = function(num1, operator, num2){
    if (operator == '+'){
        return add(num1, num2);
    } else if (operator == '-'){
        return subtract(num1, num2);
    } else if (operator == '*'){
        return multiply(num1, num2);
    } else if (operator == '/'){
        return divide(num1, num2);
    } else {
        return 'Insert a valid operator!'
    }
}

buttons.forEach(pressButton);
