function sayHello() {
    console.log('hello')
}
sayHello()
//args and params
function add(a = 0, b = 0) {
    let c = a + b;
    console.log(c)
}
add(10, 10)
add()

//rest operator : ... 
function log(...args) {
    console.log(args)
}
log('one', 'two', 'three')
log('one')

function muliply(a = 0, b = 0) {
    return a * b
}
console.log(muliply(10, 10))