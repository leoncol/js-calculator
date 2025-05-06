const buttons = document.querySelectorAll(".button");
const screentext = document.querySelector(".screentext");
const upperscreen = document.querySelector(".upperscreen");
const deleteButton = document.querySelector("#deleteButton");



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




const pressButton = function(button) {
    button.addEventListener("click", displayNumber);
    button.addEventListener("click", upperDisplayNumber);
    button.addEventListener("click", equalitySymbolOperate);
    button.addEventListener("click", operateResult);
    button.addEventListener("click", operatorsOperate);
    button.addEventListener("click", differentSymbolOperate); 
    button.addEventListener("click", addEqual);


};




const displayNumber = function(){
    if (counter < 10){
        if ((this.textContent != ' + ' && this.textContent != ' - ' && this.textContent != ' ÷ ' && this.textContent != ' x ' && this.textContent != ' = ')
        && (upperDisplayedNumbers.indexOf('+') == -1 && upperDisplayedNumbers.indexOf('-') == -1 
        && upperDisplayedNumbers.indexOf('÷') == -1 && upperDisplayedNumbers.indexOf('x') == -1 && upperDisplayedNumbers.indexOf('=') == -1
        ) && displayedNumbers2 == 0){
            screentext.className = 'screentext';
            if (this.textContent != '.' && this.textContent != 0){
                displayedNumbers += this.textContent
                screentext.textContent = displayedNumbers;
                counter += 1;
                val1 = parseFloat(displayedNumbers);
            } else if (this.textContent == '.' && displayedNumbers.indexOf(".") == -1 && displayedNumbers != ''){
                displayedNumbers += this.textContent
                screentext.textContent = displayedNumbers;
                counter += 1;
                val1 = parseFloat(displayedNumbers);
            } else if (this.textContent == '.' && displayedNumbers.indexOf(".") == -1 && val1 == 0){
                displayedNumbers = 0;
                displayedNumbers += this.textContent
                screentext.textContent = displayedNumbers;
                counter += 1;
                val1 = parseFloat(displayedNumbers);
            };
            
        } if (upperDisplayedNumbers.indexOf('+') >= 0 || upperDisplayedNumbers.indexOf('-') >= 0 
        || upperDisplayedNumbers.indexOf('÷') >= 0 || upperDisplayedNumbers.indexOf('x') >= 0 || upperDisplayedNumbers.indexOf('=') >= 0){
            screentext.className = 'screentext';
            if (val2 == 0 && this.textContent == 0){
                screentext.textContent = val2;
                upperDisplayedNumbers += val2;
            } else if (this.textContent != ' + ' && this.textContent != ' - ' && this.textContent != ' ÷ ' && this.textContent != ' x ' && this.textContent != ' = '){
                if (this.textContent != '.'){
                    if (val2 == 0 && screentext.textContent == 0 && displayedNumbers2.indexOf(".") == -1){
                        displayedNumbers2 = this.textContent
                        screentext.textContent = displayedNumbers2
                        upperDisplayedNumbers += this.textContent
                        val2 = parseFloat(displayedNumbers2);
                        counter += 1;
                    } else {
                        displayedNumbers2 += this.textContent
                        screentext.textContent = displayedNumbers2
                        upperDisplayedNumbers += this.textContent
                        val2 = parseFloat(displayedNumbers2);
                        counter += 1;
                    }
                    
                    if (upperDisplayedNumbers.indexOf(' = ') >= 0 && upperDisplayedNumbers.length >= 5){
                        upperscreen.textContent = '';
                        val1 = parseFloat(displayedNumbers2);
                        result = 0;
                        val2 = 0;
                        
                        
                    }
                } else if (this.textContent == '.' && displayedNumbers2.indexOf(".") == -1 && displayedNumbers2 != ''){
                    displayedNumbers2 += this.textContent
                    screentext.textContent = displayedNumbers2
                    upperDisplayedNumbers += this.textContent
                    val2 = parseFloat(displayedNumbers2);
                    counter += 1;
                    if (upperDisplayedNumbers.indexOf(' = ') >= 0 && upperDisplayedNumbers.length >= 5){
                        upperscreen.textContent = '';
                        
                        val1 = parseFloat(displayedNumbers2);
                        result = 0;
                        val2 = 0;
                        
                    }
                } else if (this.textContent == '.' && displayedNumbers2.indexOf(".") == -1 && val2 == 0){
                    displayedNumbers2 = 0;
                    displayedNumbers2 += this.textContent;
                    screentext.textContent = displayedNumbers2;
                    upperDisplayedNumbers += this.textContent;
                    val2 = parseFloat(displayedNumbers2);
                    counter += 1;
                    if (upperDisplayedNumbers.indexOf(' = ') >= 0 && upperDisplayedNumbers.length >= 5){
                        upperscreen.textContent = '';
                        
                        val1 = parseFloat(displayedNumbers2);
                        result = 0;
                        val2 = 0;
                        
                    }
                    
                }
                   
                   

                }
        }
    }

    
}



const equalitySymbolOperate = function() {
    
    if ((this.textContent == ' = ') && (upperDisplayedNumbers.indexOf('=') == -1) && (upperDisplayedNumbers.indexOf(' + ') >= 0 || 
    upperDisplayedNumbers.indexOf(' - ') >= 0 || upperDisplayedNumbers.indexOf(' x ') >= 0 ||upperDisplayedNumbers.indexOf(' ÷ ') >= 0) &&
    upperDisplayedNumbers.length >= 5){

        
        if (upperDisplayedNumbers.indexOf(' + ') >= 0){
            upperDisplayedNumbers += this.textContent
            upperscreen.textContent = upperDisplayedNumbers;
            counter += 1;
            result = add(val1, val2);
            result = checkDecimal(result);
            if (result > 9999999999 || result < -9999999999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
                val1 = 0;
                result = 0;
                upperDisplayedNumbers = '';
                displayedNumbers = '';
            } else {
                screentext.textContent = result;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            val2 = 0;
            
            
            
            
        } else if (upperDisplayedNumbers.indexOf(' - ') >= 0){
            upperDisplayedNumbers += this.textContent
            upperscreen.textContent = upperDisplayedNumbers;
            counter += 1;
            result = substract(val1, val2)
            result = checkDecimal(result);
            if (result > 9999999999 || result < -9999999999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
                val1 = 0;
                result = 0;
                upperDisplayedNumbers = '';
                displayedNumbers = '';
            } else {
                screentext.textContent = result;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            val2 = 0;
            
        } else if (upperDisplayedNumbers.indexOf(' x ') >= 0){
            upperDisplayedNumbers += this.textContent
            upperscreen.textContent = upperDisplayedNumbers;
            counter += 1;
            result = multiply(val1, val2);
            if (val1 == result && val2 == 0){
                screentext.textContent = 0;
                val1 = 0;
                displayedNumbers2 = '';
                counter = 0;
                val2 = 0;
            } else {
                result = checkDecimal(result);
                if (result > 9999999999 || result < -9999999999){
                    screentext.className = 'message';
                    screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                    upperscreen.textContent = '';
                    val1 = 0;
                    result = 0;
                    upperDisplayedNumbers = '';
                    displayedNumbers = '';
                } else {
                    screentext.textContent = result;
                    val1 = result;
                }
                displayedNumbers2 = '';
                counter = 0;
                val2 = 0;
            }
            
            
            
        } else if (upperDisplayedNumbers.indexOf(' ÷ ') >= 0){
            upperDisplayedNumbers += this.textContent
            upperscreen.textContent = upperDisplayedNumbers;
            counter += 1;
            if (val2 != 0){
            result = divide(val1, val2);
            result = checkDecimal(result);
            if (result > 9999999999 || result < -9999999999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
                val1 = 0;
                result = 0;
                upperDisplayedNumbers = '';
                displayedNumbers = '';
               
            } else {
                screentext.textContent = result;
                val1 = result;
            }
            displayedNumbers2 = '';
            counter = 0;
            val2 = 0;
            
        } else {
            screentext.className = 'message';
            screentext.textContent = "Can't divide by zero";
            upperscreen.textContent = '';
            displayedNumbers2 = '';
            counter = 0;
            val1 = 0;
            result = 0;
            upperDisplayedNumbers = '';
            displayedNumbers = '';
            val2 = 0;
        }
            }
            
    }
}

const operatorsOperate = function() {
    if (upperDisplayedNumbers.indexOf(' = ') == -1 && screentext.textContent != "Can't divide by zero"){
        if ((this.textContent == ' + ') && (upperDisplayedNumbers.indexOf(' - ') == -1) && (upperDisplayedNumbers.indexOf(' x ') == -1)
        && (upperDisplayedNumbers.indexOf(' ÷ ') == -1)){
            
            result = add(val1, val2);
            result = checkDecimal(result);
            if (result > 9999999999 || result < -9999999999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
                val1 = 0;
                result = 0;
                upperDisplayedNumbers = '';
                displayedNumbers = '';
            } else {
                upperDisplayedNumbers = result + ' + ';
                upperscreen.textContent = upperDisplayedNumbers;
                screentext.textContent = result;
                val1 = result;
            }
            displayedNumbers2 = '';
            val2 = 0;
            counter = 0;
        } else if ((this.textContent == ' - ') && (upperDisplayedNumbers.indexOf(' + ') == -1) && (upperDisplayedNumbers.indexOf(' x ') == -1)
            && (upperDisplayedNumbers.indexOf(' ÷ ') == -1)){
            result = substract(val1, val2);
            result = checkDecimal(result);
            if (result > 9999999999 || result < -9999999999){
                screentext.className = 'message';
                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                upperscreen.textContent = '';
                val1 = 0;
                result = 0;
                upperDisplayedNumbers = '';
                displayedNumbers = '';
            } else {
                upperDisplayedNumbers = result + ' - ';
                upperscreen.textContent = upperDisplayedNumbers;
                screentext.textContent = result;
                val1 = result;
            }
            displayedNumbers2 = '';
            val2 = 0;
            counter = 0;
        } else if ((this.textContent == ' x ') && (upperDisplayedNumbers.indexOf(' - ') == -1) && (upperDisplayedNumbers.indexOf(' + ') == -1)
            && (upperDisplayedNumbers.indexOf(' ÷ ') == -1)){
            result = multiply(val1, val2);
            if (upperDisplayedNumbers.length >= 5 && val2 == 0 && screentext.textContent != val1){
                screentext.textContent = 0;
                val1 = 0;
                displayedNumbers2 = '';
                val2 = 0;
                counter = 0;
                upperDisplayedNumbers = 0 + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                
            } else {
                result = checkDecimal(result);
                if (result > 9999999999 || result < -9999999999){
                    screentext.className = 'message';
                    screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                    upperscreen.textContent = '';
                    val1 = 0;
                    result = 0;
                    upperDisplayedNumbers = '';
                    displayedNumbers = '';
                } else {
                    upperDisplayedNumbers = result + ' x ';
                    upperscreen.textContent = upperDisplayedNumbers;
                    screentext.textContent = result;
                    val1 = result;
                }
                displayedNumbers2 = '';
                val2 = 0;
                counter = 0;
            }
            
        } else if ((this.textContent == ' ÷ ') && (upperDisplayedNumbers.indexOf(' - ') == -1) && (upperDisplayedNumbers.indexOf(' + ') == -1)
            && (upperDisplayedNumbers.indexOf(' x ') == -1)){
            result = divide(val1, val2);
            result = checkDecimal(result)
            if (val1 != 0 && val2 == 0 && upperDisplayedNumbers.indexOf(' ÷ ') >= 0 && screentext.textContent == '0'){
                screentext.className = 'message';
                screentext.textContent = "Can't divide by zero";
                upperscreen.textContent = '';
                displayedNumbers2 = '';
                val2 = 0;
                counter = 0;
                val1 = 0;
                result = 0;
                upperDisplayedNumbers = '';
                displayedNumbers = '';
            } else {
                if (result > 9999999999 || result < -9999999999){
                    screentext.className = 'message';
                    screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                    upperscreen.textContent = '';
                    val1 = 0;
                    result = 0;
                    upperDisplayedNumbers = '';
                    displayedNumbers = '';
                } else {
                    upperDisplayedNumbers = result + ' ÷ ';
                    upperscreen.textContent = upperDisplayedNumbers;
                    screentext.textContent = result;
                    val1 = result;
                }
                    displayedNumbers2 = '';
                    val2 = 0;
                    counter = 0;
            }
            
            
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
                    if (result > 9999999999 || result < -9999999999){
                        screentext.className = 'message';
                        screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                        upperscreen.textContent = '';
                        val1 = 0;
                        result = 0;
                        upperDisplayedNumbers = '';
                        displayedNumbers = '';
                    } else {
                        screentext.textContent = result;
                        upperDisplayedNumbers = result + this.textContent;
                        upperscreen.textContent = upperDisplayedNumbers;
                        val1 = result;
                        val2 = 0;
                    }
                    displayedNumbers2 = '';
                    counter = 0;
                } else if (upperDisplayedNumbers.indexOf(' x ') >= 0){
                    counter += 1;
                    result = multiply(val1, val2);
                    if (upperDisplayedNumbers.length >= 5 && val2 == 0 && screentext.textContent != val1){
                        screentext.textContent = 0;
                        val1 = 0;
                        displayedNumbers2 = '';
                        counter = 0;
                        upperDisplayedNumbers = 0 + this.textContent;
                        upperscreen.textContent = upperDisplayedNumbers;
                           
                    } else {
                        result = checkDecimal(result);
                        if (result > 9999999999 || result < -9999999999){
                            screentext.className = 'message';
                            screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                            upperscreen.textContent = '';
                            val1 = 0;
                            result = 0;
                            upperDisplayedNumbers = '';
                            displayedNumbers = '';
                        } else {
                            screentext.textContent = result;
                            upperDisplayedNumbers = result + this.textContent;
                            upperscreen.textContent = upperDisplayedNumbers;
                            val1 = result;
                            val2 = 0;
                        }
                        displayedNumbers2 = '';
                        counter = 0;
                    }
                
                } else if (upperDisplayedNumbers.indexOf(' ÷ ') >= 0){
                    if (result == val1 && val2 == 0 && screentext.textContent == '0'){
                        screentext.className = 'message';
                        screentext.textContent = "Can't divide by zero";
                        upperscreen.textContent = '';
                        displayedNumbers2 = '';
                        counter = 0;
                        val1 = 0;
                        result = 0;
                        upperDisplayedNumbers = '';
                        displayedNumbers = '';
                    } else {
                        counter += 1;
                        result = divide(val1, val2);
                        result = checkDecimal(result);
                            if (result > 9999999999 || result < -9999999999){
                                screentext.className = 'message';
                                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                                upperscreen.textContent = '';
                                val1 = 0;
                                result = 0;
                                upperDisplayedNumbers = '';
                                displayedNumbers = '';
                                    
                            } else {
                                screentext.textContent = result;
                                upperDisplayedNumbers = result + this.textContent;
                                upperscreen.textContent = upperDisplayedNumbers;
                                val1 = result;
                                val2 = 0;
                                }
                                displayedNumbers2 = '';
                                counter = 0;
                    }
    
                }
     
            } else if (this.textContent == ' - ' && upperDisplayedNumbers.indexOf(' - ') == -1){
                if (upperDisplayedNumbers.indexOf(' + ') >= 0){
                    counter += 1;
                    result = add(val1, val2)
                    result = checkDecimal(result);
                if (result > 9999999999 || result < -9999999999){
                    screentext.className = 'message';
                    screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                    upperscreen.textContent = '';
                    val1 = 0;
                    result = 0;
                    upperDisplayedNumbers = '';
                    displayedNumbers = '';
                } else {
                    screentext.textContent = result;
                    upperDisplayedNumbers = result + this.textContent;
                    upperscreen.textContent = upperDisplayedNumbers;
                    val1 = result;
                    val2 = 0;
                }
                displayedNumbers2 = '';
                counter = 0;
                } else if (upperDisplayedNumbers.indexOf(' x ') >= 0){
                    counter += 1;
                    result = multiply(val1, val2);
                    if (upperDisplayedNumbers.length >= 5 && val2 == 0 && screentext.textContent != val1){
                        screentext.textContent = 0;
                        val1 = 0;
                        displayedNumbers2 = '';
                        counter = 0;
                        upperDisplayedNumbers = 0 + this.textContent;
                        upperscreen.textContent = upperDisplayedNumbers;
                        
                    } else {
                        result = checkDecimal(result);
                        if (result > 9999999999 || result < -9999999999){
                            screentext.className = 'message';
                            screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                            upperscreen.textContent = '';
                            val1 = 0;
                            result = 0;
                            upperDisplayedNumbers = '';
                            displayedNumbers = '';
                        } else {
                            screentext.textContent = result;
                            upperDisplayedNumbers = result + this.textContent;
                            upperscreen.textContent = upperDisplayedNumbers;
                            val1 = result;
                            val2 = 0;
                        }
                        displayedNumbers2 = '';
                        counter = 0;
                    };
                } else if (upperDisplayedNumbers.indexOf(' ÷ ') >= 0){
                    if (result == val1 && val2 == 0 && screentext.textContent == '0'){
                        screentext.className = 'message';
                        screentext.textContent = "Can't divide by zero";
                        upperscreen.textContent = '';
                        displayedNumbers2 = '';
                        counter = 0;
                        val1 = 0;
                        result = 0;
                        upperDisplayedNumbers = '';
                        displayedNumbers = '';
                    } else {
                        counter += 1;
                        result = divide(val1, val2);
                        result = checkDecimal(result);
                            if (result > 9999999999 || result < -9999999999){
                                screentext.className = 'message';
                                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                                upperscreen.textContent = '';
                                val1 = 0;
                                result = 0;
                                upperDisplayedNumbers = '';
                                displayedNumbers = '';
                            } else {
                                screentext.textContent = result;
                                upperDisplayedNumbers = result + this.textContent;
                                upperscreen.textContent = upperDisplayedNumbers;
                                val1 = result;
                                val2 = 0;
                                }
                                displayedNumbers2 = '';
                                counter = 0;
                                
                    }
                }
            } else if (this.textContent == ' x ' && upperDisplayedNumbers.indexOf(' x ') == -1){
                if (upperDisplayedNumbers.indexOf(' + ') >= 0){
                    counter += 1;
                    result = add(val1, val2);
                    result = checkDecimal(result);
                if (result > 9999999999 || result < -9999999999){
                    screentext.className = 'message';
                    screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                    upperscreen.textContent = '';
                    val1 = 0;
                    result = 0;
                    upperDisplayedNumbers = '';
                    displayedNumbers = '';
                } else {
                    screentext.textContent = result;
                    upperDisplayedNumbers = result + this.textContent;
                    upperscreen.textContent = upperDisplayedNumbers;
                    val1 = result;
                    val2 = 0;
                }
                displayedNumbers2 = '';
                counter = 0;
                } else if (upperDisplayedNumbers.indexOf(' - ') >= 0){
                    counter += 1;
                    result = substract(val1, val2);
                    result = checkDecimal(result);
                if (result > 9999999999 || result < -9999999999){
                    screentext.className = 'message';
                    screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                    upperscreen.textContent = '';
                    val1 = 0;
                    result = 0;
                    upperDisplayedNumbers = '';
                    displayedNumbers = '';
                } else {
                    screentext.textContent = result;
                    upperDisplayedNumbers = result + this.textContent;
                    upperscreen.textContent = upperDisplayedNumbers;
                    val1 = result;
                    val2 = 0;
                }
                displayedNumbers2 = '';
                counter = 0;
                } else if (upperDisplayedNumbers.indexOf(' ÷ ') >= 0){
                    if (result == val1 && val2 == 0 && screentext.textContent == '0'){
                        screentext.className = 'message';
                        screentext.textContent = "Can't divide by zero";
                        upperscreen.textContent = '';
                        displayedNumbers2 = '';
                        counter = 0;
                        val1 = 0;
                        result = 0;
                        upperDisplayedNumbers = '';
                        displayedNumbers = '';
                    } else {
                        counter += 1;
                        result = divide(val1, val2);
                        result = checkDecimal(result);
                            if (result > 9999999999 || result < -9999999999){
                                screentext.className = 'message';
                                screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                                upperscreen.textContent = '';
                                val1 = 0;
                                result = 0;
                                upperDisplayedNumbers = '';
                                displayedNumbers = '';
                            } else {
                                screentext.textContent = result;
                                upperDisplayedNumbers = result + this.textContent;
                                upperscreen.textContent = upperDisplayedNumbers;
                                val1 = result;
                                val2 = 0;
                                }
                                displayedNumbers2 = '';
                                counter = 0;
                    }
                }
            } else if (this.textContent == ' ÷ ' && upperDisplayedNumbers.indexOf(' ÷ ') == -1){
                if (upperDisplayedNumbers.indexOf(' + ') >= 0){
                    counter += 1;
                    result = add(val1, val2);
                    result = checkDecimal(result);
                if (result > 9999999999 || result < -9999999999){
                    screentext.className = 'message';
                    screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                    upperscreen.textContent = '';
                    val1 = 0;
                    result = 0;
                    upperDisplayedNumbers = '';
                    displayedNumbers = '';
                } else {
                    screentext.textContent = result;
                    upperDisplayedNumbers = result + this.textContent;
                    upperscreen.textContent = upperDisplayedNumbers;
                    val1 = result;
                    val2 = 0;
                }
                displayedNumbers2 = '';
                counter = 0;
                } else if (upperDisplayedNumbers.indexOf(' - ') >= 0){
                    counter += 1;
                    result = substract(val1, val2);
                    result = checkDecimal(result);
                if (result > 9999999999 || result < -9999999999){
                    screentext.className = 'message';
                    screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                    upperscreen.textContent = '';
                    val1 = 0;
                    result = 0;
                    upperDisplayedNumbers = '';
                    displayedNumbers = '';
                } else {
                    screentext.textContent = result;
                    upperDisplayedNumbers = result + this.textContent;
                    upperscreen.textContent = upperDisplayedNumbers;
                    val1 = result;
                    val2 = 0;
                }
                displayedNumbers2 = '';
                counter = 0;
                } else if (upperDisplayedNumbers.indexOf(' x ') >= 0){
                    counter += 1;
                    result = multiply(val1, val2);
                    if (upperDisplayedNumbers.length >= 5 && val2 == 0 && screentext.textContent != val1){
                        screentext.textContent = 0;
                        val1 = 0;
                        displayedNumbers2 = '';
                        counter = 0;
                        upperDisplayedNumbers = 0 + this.textContent;
                        upperscreen.textContent = upperDisplayedNumbers;
    
                    } else {
                        result = checkDecimal(result);
                        if (result > 9999999999 || result < -9999999999){
                            screentext.className = 'message';
                            screentext.textContent = 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET';
                            upperscreen.textContent = '';
                            val1 = 0;
                            result = 0;
                            upperDisplayedNumbers = '';
                            displayedNumbers = '';
                        } else {
                            screentext.textContent = result;
                            upperDisplayedNumbers = result + this.textContent;
                            upperscreen.textContent = upperDisplayedNumbers;
                            val1 = result;
                            val2 = 0;
                        }
                        displayedNumbers2 = '';
                        counter = 0;
                    }
    
                } 
                    }        
        }
    }
    

    


const operateResult = function(){
    if (upperDisplayedNumbers.indexOf(' = ') >= 0){
        if (this.textContent == ' + ' || this.textContent == ' - ' || this.textContent == ' x ' || this.textContent == ' ÷ '){
            upperDisplayedNumbers = val1 + this.textContent;
            upperscreen.textContent = upperDisplayedNumbers;
            val2 = 0;
            result = 0;
            displayedNumbers2 = '';
            if (this.textContent != ' + ' && this.textContent != ' - ' && this.textContent != ' ÷ ' && this.textContent != ' x ' && this.textContent != ' = '){
                screentext.textContent = this.textContent
            }
        }
    }
}



const upperDisplayNumber = function(){
    if (upperCounter < 10){
        if ((upperDisplayedNumbers.indexOf(' + ') == -1) && (this.textContent == ' + ') && (upperDisplayedNumbers.indexOf(' - ') == -1) && (this.textContent == " - ")
        && (upperDisplayedNumbers.indexOf(' ÷ ') == -1) && (this.textContent == ' ÷ ') && (upperDisplayedNumbers.indexOf(' x ') == -1) && (this.textContent == " x ")
     && (upperDisplayedNumbers.indexOf(' = ') == -1) && (this.textContent != ' = ')){
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

 const addEqual = function(){
    if (result == 0 && this.textContent == " = " && screentext.textContent != "Can't divide by zero" && screentext.textContent != 'VALUE IS TOO HIGH/LOW, INSERT A NEW NUMBER OR RESET' 
        && upperDisplayedNumbers.indexOf(0) == -1){
            upperDisplayedNumbers = '';
        if (upperDisplayedNumbers.indexOf('+') == -1 && upperDisplayedNumbers.indexOf('-') == -1 
        && upperDisplayedNumbers.indexOf('÷') == -1 && upperDisplayedNumbers.indexOf('x') == -1){
            if (screentext.textContent == ''){
                screentext.textContent = val1;
                upperDisplayedNumbers += val1 + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                displayedNumbers = '';
                displayedNumbers2 = '';
                displayResult = '';
                counter = 0;
                upperCounter = 0;
                val2 = 0;
                symbol = '';
                result = 0;
                upperDisplayedNumbers = '';

            } else {
                upperDisplayedNumbers += val1 + this.textContent;
                upperscreen.textContent = upperDisplayedNumbers;
                displayedNumbers = '';
                displayedNumbers2 = '';
                displayResult = '';
                counter = 0;
                upperCounter = 0;
                val2 = 0;
                symbol = '';
                result = 0;
                upperDisplayedNumbers = '';
            }
               
            
        }
            
       
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
deleteButton.addEventListener("click", clearScreen);
