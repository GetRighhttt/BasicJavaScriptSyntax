/**
 * Break and Continue are used when you want to continue or break out of a loop.
 * 
 * They're usually used in for or while loops.
 */

// break keyword breaks out of the loop when the condition is met
for(var i = 0; i < 5; i++) {
    if(i == 4) {
        break
    }
    console.log(i)
}

// continue is used to continue the loop and skips the condition
for(var a = 1; a < 5; a++) {
    if(a == 3) {
        continue
    }
    console.log(a)
}