//es 6 variable declarations let or const 
//string,number,boolean,undefined,NaN,function,null,object -values 

//strings : "",'' ,``,`${}`
let firstName = "Subramanian"
let lastName = 'Murugan';
console.log("Name " + firstName + lastName)
console.log("Name ", firstName, lastName)
console.log(`Name ${firstName} ${lastName}`)
//numbers: double
let salary = 1000;
console.log(`salary ${salary}`)
//boolean 
let isValid = true
console.log(`Valid ${isValid}`)
//undefined
let price;
console.log(`Price ${price}`)
//NaN ; not a number - runtime error which mimics bug 
let total = price * 10
console.log(`Total ${total}`)
let avg = 100 / 0  //div /0  infinity
console.log(`Avg ${avg}`)



