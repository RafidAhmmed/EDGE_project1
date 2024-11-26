let display=document.getElementById('display');
let current_operation='';
let psedu_operation='';
let first_number='';
let second_number='';
let result='';

function appendNumber(number){
    if(result !== ''){
        display.value='';
        result='';
    }
    if(psedu_operation !==''){
        display.value='';
        psedu_operation='';
    }
    display.value+=number;
}
function setOperation(operation){
    first_number= display.value;
    current_operation=operation;
    psedu_operation=operation;
}
function calculate(){
    second_number=display.value;
    if(current_operation==='+'){
        result=parseInt(first_number)+parseInt(second_number);
    }
    else if(current_operation==='-'){
        result=parseInt(first_number)-parseInt(second_number);
    }
    else if(current_operation==='*'){
        result=parseInt(first_number)*parseInt(second_number);
    }
    else if(current_operation==='/'){
        result=parseInt(first_number)/parseInt(second_number);
    }
    else if(current_operation==='%'){
        result=parseInt(first_number)%parseInt(second_number);
    }
    else if(current_operation==='^'){
        result=Math.pow(parseInt(first_number),parseInt(second_number));
    }
    if(isNaN(result) || !isFinite(result)){
        display.value='Math Error';
    } else {
        display.value=result;
    }
}
function del(){
    display.value = display.value.slice(0, -1);
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '.'|| key === '%'|| key === '^') {
        setOperation(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        del();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
}