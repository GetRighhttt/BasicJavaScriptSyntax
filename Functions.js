/**
 * Let's get to the fun part: Functions!
 * 
 * Functions are a set of statements that perform a tasks or calculates a value.
 * 
 * Functions are supposed to do ONE thing. It's good for separation of concerns.
 * 
 * Functions are declared using the function keyword.
 * 
 * Parameter types do not have to be specified
 */


// creating a function for addition with two parameters. 
// In JavaScript, we don't have to specify a return type.
function addition(entry1, entry2) {
    var mathAddition = entry1 + entry2
    return mathAddition
}

// We call a function with the name and parenthesis.
// We set the outputs in variables to print out in console.log() statements.
var result1 = addition(1, 2)
var result2 = addition(50, 70)
console.log("Here is the first result from our addition function: " + result1)
console.log("Here is the second result from our addition function: " + result2)

// function to divide numbers without a return type
function printDivision(a, b) {
    var answer = a / b
    console.log("Here is the answer to the division problem : " + answer)
}

// prints the results because the log statement is in the function.
printDivision(8, 2)
printDivision(10, 2)




