//function literals :es 5 
const add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(1, 1))

//function literals :es 6 - arrow functions  
const multiply = (a = 0, b = 0) => {
    return a * b
}
console.log(multiply(145, 199))

///code simplification:
/**
 * 1.if function has only one line of code, we can remove {}
 * 2.if function returns only , we can remove {} and return statement
 */

const div = (a = 0, b = 0) => a / b

console.log(div(145, 199))

//single args , no default value,return the same .

// const getValue  = (value) =>{
//     return value;
// }

const getValue = value => value
console.log(getValue(10))