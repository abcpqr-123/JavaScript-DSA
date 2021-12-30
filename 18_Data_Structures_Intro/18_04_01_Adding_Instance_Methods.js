//Instance Methods: 

class Student {
    constructor (firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}` 
    }
}


let firstStudent = new Student ('colt', 'steele')

console.log(firstStudent.fullName())