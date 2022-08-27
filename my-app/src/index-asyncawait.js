/**
 * Promise is a design pattern to solve the callback hell issuses
 * Promise helps to reduce nested callbacks
 * Promise makes more readable async programming.
 * Promise is implemented in es 6 as "Promise"
 */
const getUser = () => {
    return new Promise((resolve, reject) => {
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
    })
}
const login = user => {
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        }
        else {
            setTimeout(reject, 1000, { message: 'login failed' })
        }
    })
}

//callback hell : way we nest callback, which leads many problems
//1.complexity in  the code 
//2.less readable


// getUser(user => {
//     console.log(user)
//     login(user, status => {
//         console.log(status)
//     }, err => {
//         console.log(err)
//     })
// }, err => {
//     console.log(err)
// })

getUser()
    .then(user => {
        return login(user)
    })
    .then(status => {
        console.log(status)
    })
    .catch(err => console.log(err))

//how to avoid thenables 
//async ...await - resolves promises in declarative way .

async function main() {
    try {
        const user = await getUser();
        const status = await login(user)
        console.log(user, status)
    }
    catch (err) {

    }
}
main()




















