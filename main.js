/*
Set up two variables containing number values.
• Set up a variable to hold an operator (+ or -).
• Create a function that takes two numbers and an operator as parameters, performs the
corresponding operation, and returns the result.
• Call the function with the variables and operator, and output the result using console.log.
• Update the operator value and call the function again with the updated arguments.*/
let num1 = 10;
let num2 = 5;
let operator = "+";
let num3 = 4;
let num4 = 2;
function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        default:
            console.log("Unsupported operator");
    }
}
console.log(calculate(num1, num2, operator)); // Output: 15
operator = "-"; // Update the operator value
console.log(calculate(num3, num4, operator)); // Output: 5
export {};
