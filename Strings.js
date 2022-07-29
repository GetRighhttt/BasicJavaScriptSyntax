/* 
Here we will go over some of the basics of Strings. 
We have already established that strings do not have to use double quotes,
however it is best practice to do so. 
*/

// Strings allow you to store a sequence of characters
var firstName = "Stefan"
var brand = "GetRighhttt"
var gitHubAccount = "GetRighhttt/Basics"

// returs the length of the string
console.log(gitHubAccount.length)

// returns the string in all caps
console.log(firstName.toUpperCase())

// returns type of variable and my brand name
console.log(typeof brand + " " + brand)

// returns part of the string from start to finish
console.log(gitHubAccount.substring(0, 6))

// we can also concatenate strings
// this adds the strings together
var g = "GetRighhttt"
var b = "Account"
console.log(g + " " + b)

// Using backpicks is another way to concatenate strings in JavaScript also
// Kotlin also uses ${} notation for strings. Very interesting.
console.log(`${g} ${b}`)
console.log(`${g.toUpperCase()} ${b.toLowerCase()}`)

// concat method adds two strings together also. It's built into JavaScript
console.log(`${g.length} ${b.concat( " " + gitHubAccount)}`)
console.log(`${g.concat(" " + b)}`)




