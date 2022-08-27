//function as parameter

// function login(resolve) {
//     resolve()
// }
// login(function () {
//    console.log('resolve')
// })


// const login = resolve => resolve()
// login(() => console.log('resolve'))

const login = (resolve, reject) => {
    let userName = 'admin'
    let password = 'admin'
    if (userName === 'admin' && password === 'admin') {
        resolve('login success')
    } else {
        reject('login failed')
    }
}
login(res => console.log(res), err => console.log(err))