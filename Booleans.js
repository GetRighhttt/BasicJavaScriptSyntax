/**
 * Booleans are used to determine if something is true or false.
 * Below I just play around with some variables and put them in an if statement
 * to determine if they're true or false..
 */

var isTrue = false
var isFalse = true

if((isTrue != true) && isFalse != false) {
    console.log("This is an error.. isTrue is supposed to be true!")
    console.log("This is crazy.. how is isFalse NOT FALSE?!")
}
else {
    console.log("It's all good y'all boys...")
}

// we can flip boolean values with the '!' operator
console.log(!true) // prints out false
console.log(!false) // prints true
