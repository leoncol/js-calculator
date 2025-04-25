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
    button.addEventListener("click", equalitySymbolOperate);
    button.addEventListener("click", operateResult);
    button.addEventListener("click", operatorsOperate);
    button.addEventListener("click", differentSymbolOperate); 
    button.addEventListener("click", addValues);


};

const displayNumber = function(){
    screentext.className = 'screentext';
    if (counter < 7){
        if ((this.textContent != ' + ' && this.textContent != ' - ' && this.textContent != ' ÷ ' && this.textContent != ' x ' && this.textContent != ' = ')
        && (upperDisplayedNumbers.indexOf('+') == -1 && upperDisplayedNumbers.indexOf('-') == -1 
        && upperDisplayedNumbers.indexOf('÷') == -1 && upperDisplayedNumbers.indexOf('x') == -1 && upperDisplayedNumbers.indexOf('=') == -1
        )){
            if (upperDisplayedNumbers.indexOf(".") == -1){
                displayedNumbers += this.textContent
                screentext.textContent = displayedNumbers;
                counter += 1;
                val1 = displayedNumbers;
            } else if (upperDisplayedNumbers.indexOf(".") >= 0 && this.textContent != '.'){
                displayedNumbers += this.textContent
                screentext.textContent = displayedNumbers;
                counter += 1;
                val1 = displayedNumbers;
            }
            
        } if (upperDisplayedNumbers.indexOf('+') >= 0 || upperDisplayedNumbers.indexOf('-') >= 0 
        || upperDisplayedNumbers.indexOf('÷') >= 0 || upperDisplayedNumbers.indexOf('x') >= 0 || upperDisplayedNumbers.indexOf('=') >= 0){
            if (this.textContent != ' + ' && this.textContent != ' - ' && this.textContent != ' ÷ ' && this.textContent != ' x ' && this.textContent != ' = '){
                    displayedNumbers2 += this.textContent
                    screentext.textContent = displayedNumbers2
                    upperDisplayedNumbers += this.textContent
                    val2 = displayedNumbers2;
                    counter += 1;
                    
                   
                    

                }
        }
    }

    
}



const equalitySymbolOperate = function() {
    if ((this.textContent == ' = ') && (val2 != 0)){
        upperDisplayedNumbers += this.textContent
        upperscreen.textContent = upperDisplayedNumbers;
        counter += 1;
        if (upperDisplayedNumbers.indexOf(' + ') >= 0){
            result = add(val1, val2);
            result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
            }
            displayedNumbers2 = '';
            counter = 0;
        } else if (upperDisplayedNumbers.indexOf(' - ') >= 0){
            result = substract(val1, val2)
            result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
            }
            displayedNumbers2 = '';
            counter = 0;
        } else if (upperDisplayedNumbers.indexOf(' x ') >= 0){
            result = multiply(val1, val2);
            result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
            }
            displayedNumbers2 = '';
            counter = 0;
        } else if (upperDisplayedNumbers.indexOf(' ÷ ') >= 0){
            result = divide(val1, val2);
            result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
               
            } else {
                screentext.textContent = result;
            }
            displayedNumbers2 = '';
            counter = 0;
        } else {
            return 'Insert a valid operator!';
        }
    }
}

const operatorsOperate = function() {
    if ((upperDisplayedNumbers.indexOf(' = ') == -1)){
        if ((this.textContent == ' + ') && (upperDisplayedNumbers.indexOf(' - ') == -1) && (upperDisplayedNumbers.indexOf(' x ') == -1)
        && (upperDisplayedNumbers.indexOf(' ÷ ') == -1)){
            result = add(val1, val2);
            result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                upperDisplayedNumbers = result + ' + ';
                upperscreen.textContent = upperDisplayedNumbers;
                screentext.textContent = result;
            }
            displayedNumbers2 = '';
            val2 = 0;
            counter = 0;
        } else if ((this.textContent == ' - ') && (upperDisplayedNumbers.indexOf(' + ') == -1) && (upperDisplayedNumbers.indexOf(' x ') == -1)
            && (upperDisplayedNumbers.indexOf(' ÷ ') == -1)){
            result = substract(val1, val2);
            result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                upperDisplayedNumbers = result + ' - ';
                upperscreen.textContent = upperDisplayedNumbers;
                screentext.textContent = result;
            }
            displayedNumbers2 = '';
            val2 = 0;
            counter = 0;
        } else if ((this.textContent == ' x ') && (upperDisplayedNumbers.indexOf(' - ') == -1) && (upperDisplayedNumbers.indexOf(' + ') == -1)
            && (upperDisplayedNumbers.indexOf(' ÷ ') == -1)){
            result = multiply(val1, val2);
            result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                upperDisplayedNumbers = result + ' x ';
                upperscreen.textContent = upperDisplayedNumbers;
                screentext.textContent = result;
            }
            displayedNumbers2 = '';
            val2 = 0;
            counter = 0;
        } else if ((this.textContent == ' ÷ ') && (upperDisplayedNumbers.indexOf(' - ') == -1) && (upperDisplayedNumbers.indexOf(' + ') == -1)
            && (upperDisplayedNumbers.indexOf(' x ') == -1)){
            result = divide(val1, val2);
            result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                upperDisplayedNumbers = result + ' ÷ ';
                upperscreen.textContent = upperDisplayedNumbers;
                screentext.textContent = result;
            }
            displayedNumbers2 = '';
            val2 = 0;
            counter = 0;
        }

    }
}
    
 const differentSymbolOperate = function(){
    if (upperDisplayedNumbers.indexOf(' = ') == -1){
        if (this.textContent == ' + ' && upperDisplayedNumbers.indexOf(' + ') == -1){
            if (upperDisplayedNumbers.indexOf(' - ') >= 0){
                counter += 1;
                result = substract(val1, val2);
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } else if (upperDisplayedNumbers.indexOf(' x ') >= 0){
                counter += 1;
                result = multiply(val1, val2)
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } else if (upperDisplayedNumbers.indexOf(' ÷ ') >= 0){
                counter += 1;
                result = divide(val1, val2);
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } 
        } else if (this.textContent == ' - ' && upperDisplayedNumbers.indexOf(' - ') == -1){
            if (upperDisplayedNumbers.indexOf(' + ') >= 0){
                counter += 1;
                result = add(val1, val2)
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } else if (upperDisplayedNumbers.indexOf(' x ') >= 0){
                counter += 1;
                result = multiply(val1, val2);
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } else if (upperDisplayedNumbers.indexOf(' ÷ ') >= 0){
                counter += 1;
                result = divide(val1, val2);
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } 
            
        } else if (this.textContent == ' x ' && upperDisplayedNumbers.indexOf(' x ') == -1){
            if (upperDisplayedNumbers.indexOf(' + ') >= 0){
                counter += 1;
                result = add(val1, val2);
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } else if (upperDisplayedNumbers.indexOf(' - ') >= 0){
                counter += 1;
                result = substract(val1, val2);
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } else if (upperDisplayedNumbers.indexOf(' ÷ ') >= 0){
                counter += 1;
                result = divide(val1, val2);
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } 
        } else if (this.textContent == ' ÷ ' && upperDisplayedNumbers.indexOf(' ÷ ') == -1){
            if (upperDisplayedNumbers.indexOf(' + ') >= 0){
                counter += 1;
                result = add(val1, val2);
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } else if (upperDisplayedNumbers.indexOf(' - ') >= 0){
                counter += 1;
                result = substract(val1, val2);
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } else if (upperDisplayedNumbers.indexOf(' x ') >= 0){
                counter += 1;
                result = multiply(val1, val2);
                result = checkDecimal(result);
            if (result > 9999999 || result < -9999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
            } else {
                screentext.textContent = result;
                upperDisplayedNumbers = result + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            } 

        } 
        }

}
        

    
 

    
const addValues = function(){
    if ((upperDisplayedNumbers.indexOf(' = ') >= 0) && (upperDisplayedNumbers.indexOf(' + ') >= 0 || upperDisplayedNumbers.indexOf(' - ') >= 0 
    || upperDisplayedNumbers.indexOf(' ÷ ') >= 0 || upperDisplayedNumbers.indexOf(' x ') >= 0) && ((this.textContent != ' + ' && this.textContent != ' - ' && 
        this.textContent != ' ÷ ' && this.textContent != ' x ' && this.textContent != ' = '))){
        displayedNumbers2 = '';
        upperDisplayedNumbers = this.textContent;
        displayedNumbers = this.textContent;
        screentext.textContent = displayedNumbers;
        upperscreen.textContent = upperDisplayedNumbers;
        val1 = parseInt(displayedNumbers);
        val2 = 0;
        result = 0;
        
    }
    
}

    


const operateResult = function(){
    if (screentext.textContent == result){
        if (this.textContent == ' + ' || this.textContent == ' - ' || this.textContent == ' x ' || this.textContent == ' ÷ '){
            upperDisplayedNumbers = result + this.textContent;
            upperscreen.textContent = upperDisplayedNumbers;
            val1 = result;
            val2 = 0;
            if (this.textContent != ' + ' && this.textContent != ' - ' && this.textContent != ' ÷ ' && this.textContent != ' x ' && this.textContent != ' = '){
                screentext.textContent = this.textContent
            }
        }
    }
}



const upperDisplayNumber = function(){
    if (upperCounter < 9){
        if ((upperDisplayedNumbers.indexOf('+') == -1) && (this.textContent != ' + ') && (upperDisplayedNumbers.indexOf('-') == -1) && (this.textContent != " - ")
        && (upperDisplayedNumbers.indexOf('÷') == -1) && (this.textContent != ' ÷ ') && (upperDisplayedNumbers.indexOf('x') == -1) && (this.textContent != " x ")
     && (upperDisplayedNumbers.indexOf('=') == -1)){
            if (upperDisplayedNumbers.indexOf(".") == -1){
                upperDisplayedNumbers += this.textContent
                upperscreen.textContent = upperDisplayedNumbers;
                upperCounter += 1;
            } else if (upperDisplayedNumbers.indexOf(".") >= 0 && this.textContent != '.'){
                upperDisplayedNumbers += this.textContent
                upperscreen.textContent = upperDisplayedNumbers;
                upperCounter += 1;
            }
            
        
            }
        
    }
    

};


const checkDecimal = function(number) {
    if (Number.isInteger(number) == false){
        let stringNumber = number.toString();
        let splitNumber = stringNumber.split(".");

        if (splitNumber[1].length > 5){
            return parseFloat(Number.parseFloat(number).toFixed(1));
        } else {
        return parseFloat(number);
        }
}   else {
    return number;
}
    
}






const add = function(num1, num2) {
    return num1 + num2;
  
};
  
const substract = function(num1, num2) {
    return num1 - num2;
};
  

const multiply = function(num1, num2) {
    if (num2 == 0){
        num2 = 1;
    }
    return num1 * num2;
};

const divide = function(num1, num2){
    if (num2 == 0){
        num2 = 1
    }
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
