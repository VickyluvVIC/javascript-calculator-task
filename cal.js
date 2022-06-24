const operator = prompt('Enter operator to use: (+, -, * /)');
//Reading of numbers in the program
const num1 = parseFloat(prompt('Enter Num1: ')); //convert string to number
const num2 = parseFloat(prompt('Enter Num2: ')); //convert string to number

let result;
if (operator == '+') {
    result = num1 + num2;
} else if (operator == '-') {
    result = num1 - num2;
} else if (operator == '*') {
    result = num1 * num2;
} else if (operator == '/') {
    result = num1 / num2;
}
alert(num1 + ' ' + operator + ' ' + num2 + ' = ' + result)