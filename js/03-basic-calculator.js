// IMPORT THE MODULE
import { add, sub, multiply, divide } from "./modules/calculator.js"
// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
function sum(num1, num2, op) {
    switch (op) {
        case "+":
            return add(+num1, +num2);
        case "/":
            return divide(+num1, +num2);
        case "-":
            return sub(+num1, +num2);
        case "*":
            return multiply(+num1, +num2);
        default:
            return 0;
    }
}
let num1 = window.prompt("Enter the first number you want to calculate.");
let num2 = window.prompt("Enter the second number you want to calculate.");
let op 

// CHECK TO SEE WHAT OPERATION THEY'RE USING
    do{
        op = window.prompt("Enter the operation you want to be calculated.");
    }while(op != "+" && op != "-" && op != "*" && op != "/");
// CALL THE APPROPRIATE FUNCTION
const result = sum(num1, num2, op);
window.alert(result);