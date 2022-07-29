/**
 * Const keyword is used to declare a constant. 
 * 
 * It's bad practice to consistently change variable types.
 * 
 * Recommended practice is to use the const keyword for variable declaration
 * in JavaScript. 
 */

// This is an example of bad practice in coding.
// Doesn't follow clean code principles.
let body = "parts"
body = {}
body = 10
body = function() {
    return "Yoooo"
}

// declaring a constant makes something immutable
const special = "Special" // cannot be changed

// even for functions we use const
const hello = function() {
    console.log("Hello")
}