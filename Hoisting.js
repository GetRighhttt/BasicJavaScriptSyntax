/**
 * So using the var keyword is actually bad practice for professional JavaScript.
 * 
 * Hoisting happens when a variable is available outside the scope of the context,
 * and is known for a lot of JavaScript errors. 
 * 
 * This happens a lot with var.
 */

// 'i' still shows even after the for loop. It's called hoisting.
for(var i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)