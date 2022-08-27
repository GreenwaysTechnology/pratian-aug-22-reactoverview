//objects : constructors,literals

//es 6 class 

class UserService {
    //instance variables
    userId;
    name;
    //constructors
    constructor(userId = 1, name = 'Subramanian') {
        this.userId = userId
        this.name = name;
    }
    //methods
    findAll() {
        return 'findAll'
    }
    save() {
        return 'save'
    }
}

//how to create object 
let userService = new UserService(90, 'Ram');
console.log(userService.name, userService.save())


//base class
class Account {
    deposit() {
        return 0
    }
}

//dervied class 
class SavingsAccount extends Account{
    // overriding
    deposit() {
        return 100
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())