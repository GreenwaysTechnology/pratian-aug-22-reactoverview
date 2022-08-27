//async programming styles:callbacks,promises,async..await
/**
 * req:
 *  1.high level async api must be there  
 *     -timers,ajax apis,websocket apis
 *  2.listeners /callbacks must be registered
 */
//callback: function as parameter to another function 

//sync code 
function getValue() {
    return 100;
}
console.log(getValue())

function blockMe(message) {
    console.log(message)
}
////
function sayHello(callback) {
    //timers
    setTimeout(callback, 1000, "Hello")
    // callback()
}
blockMe('start')
sayHello((message) => {
    console.log(message)
})
blockMe('end')

///////////////////////////////////////////////////////////////////////////////
//callback problems/ nested callback

//the output of one callback will be input to another callback.

const getUser = (resolve, reject) => {
    let user = {
        name: 'admin'
    }
    //user=un
    if (user) {
        setTimeout(resolve, 1000, user)
    }
    else {
        setTimeout(reject, 1000, { message: 'user Not found' })
    }
}
const login = (user, resolve, reject) => {
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    }
    else {
        setTimeout(reject, 1000, { message: 'login failed' })
    }
}

//callback hell : way we nest callback, which leads many problems
//1.complexity in  the code 
//2.less readable


getUser(user => {
    console.log(user)
    login(user, status => {
        console.log(status)
    }, err => {
        console.log(err)
    })
}, err => {
    console.log(err)
})












