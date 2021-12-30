// The syntax:

class Student {
    constructor (firstName, lastName){
        this.firstName = firstName 
        this.lastName = lastName
    }
}


// The method to create new objcts must be called constructor 

// The class Keyword creates a constant, so u can not redefine it. 
// watch out the syntax as well



//----------------------------------------------


// Creating objects from classes: 

// we use the 'new' keyword 


class Student{
    constructor (firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}

let firstStudent = new Student ('Colt', 'Steele')
let secondStudent = new Student ('Blue', 'Steele')





