const buttons = document.querySelectorAll(".button");
const screentext = document.querySelector(".screentext");
const upperscreen = document.querySelector(".upperscreen");
let displayedNumbers = '';
let displayedNumbers2 = '';
let upperDisplayedNumbers = '';
let displayResult = '';
let counter = 0;
let upperCounter = 0;
let val1 = 0;
let val2 = 0;
let symbol = '';
let result = 0;

const pressButton = function(button) {
    button.addEventListener("click", displayNumber);
    button.addEventListener("click", upperDisplayNumber);
    button.addEventListener("click", symbolOperate);


};

const displayNumber = function(){
    if (counter < 7){
        if ((this.textContent != ' + ' && this.textContent != ' - ' && this.textContent != ' ÷ ' && this.textContent != ' x ' && this.textContent != ' = ')
        && (upperDisplayedNumbers.indexOf('+') == -1 && upperDisplayedNumbers.indexOf('-') == -1 
        && upperDisplayedNumbers.indexOf('÷') == -1 && upperDisplayedNumbers.indexOf('x') == -1 && upperDisplayedNumbers.indexOf('=') == -1)){
            displayedNumbers += this.textContent
            screentext.textContent = displayedNumbers;
            counter += 1;
            console.log(counter);
            val1 = parseInt(displayedNumbers);
        } if (upperDisplayedNumbers.indexOf('+') >= 0 || upperDisplayedNumbers.indexOf('-') >= 0 
        || upperDisplayedNumbers.indexOf('÷') >= 0 || upperDisplayedNumbers.indexOf('x') >= 0 || upperDisplayedNumbers.indexOf('=') >= 0){
            if (this.textContent != ' + ' && this.textContent != ' - ' && this.textContent != ' ÷ ' && this.textContent != ' x ' && this.textContent != ' = '){
                    displayedNumbers2 += this.textContent
                    screentext.textContent = displayedNumbers2
                    upperDisplayedNumbers += this.textContent
                    val2 = parseInt(displayedNumbers2);

                }
        }
    }

    
}

const symbolOperate = function() {
    if (this.textContent == ' = '){
        upperDisplayedNumbers += this.textContent
        upperscreen.textContent = upperDisplayedNumbers;
        if (upperDisplayedNumbers.indexOf(' + ') >= 0){
            result = add(val1, val2);
            screentext.textContent = result;
        } else if (upperDisplayedNumbers.indexOf(' - ') >= 0){
            result = substract(val1, val2)
            screentext.textContent = result;
        } else if (upperDisplayedNumbers.indexOf(' x ') >= 0){
            result = multiply(val1, val2);
            screentext.textContent = result;
        } else if (upperDisplayedNumbers.indexOf(' ÷ ') >= 0){
            result = divide(val1, val2);
            screentext.textContent = result;

        } else {
            return 'Insert a valid operator!'
        }
    }
    
}



const upperDisplayNumber = function(){
    if (upperCounter < 9){
        if (upperDisplayedNumbers.indexOf(' + ') == -1 && upperDisplayedNumbers.indexOf(' - ') == -1 
        && upperDisplayedNumbers.indexOf(' ÷ ') == -1 && upperDisplayedNumbers.indexOf(' x ') == -1 && upperDisplayedNumbers.indexOf(' = ') == -1){
        upperDisplayedNumbers += this.textContent
        upperscreen.textContent = upperDisplayedNumbers;
        upperCounter += 1;
        }
        
    }
    

};




const add = function(num1, num2) {
    return num1 + num2;
  
};
  
const substract = function(num1, num2) {
    return num1 - num2;
};
  

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2){
    return num1 / num2;
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

buttons.forEach(pressButton);
