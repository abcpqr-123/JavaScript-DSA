
// Implimetation of class keyword:


class Student {
    constructor (firstName, lastName, year){
        this.firstName = firstName 
        this.lastName = lastName
        this.grade = year
    }
}

let xyz = new Student ( 'Email', 'Katz', 3)

console.log(xyz)
// Output:
// Student { firstName: 'Email', lastName: 'Katz', grade: 3 }


console.log(xyz.firstName)
// Output:
// Email

console.log(xyz.lastName)
// Output:
// Katz



//------------------------------------------------------------
//------------------------------------------------------------


class Student{
    constructor (firstName, lastName,year){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
    }
}

let firstStudent = new Student ('Colt', 'Steele',12)
let secondStudent = new Student ('Blue', 'Steele',11)


console.log(firstStudent)
console.log(secondStudent)


// Output:
// Student { firstName: 'Colt', lastName: 'Steele', grade: 12 }
// Student { firstName: 'Blue', lastName: 'Steele', grade: 11 }



// ------------------------------------------------------------
// ------------------------------------------------------------



// Creating a new Student: 



class Student{
    constructor (firstName, lastName,year){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
    }
}

let firstStudent = new Student ('Colt', 'Steele',12)
let secondStudent = new Student ('Blue', 'Steele',11)


console.log(firstStudent)
console.log(secondStudent)


let Surya = new Student ('Surya', 'Gaonkar', 1)
console.log(Surya)
// Output:
// Student { firstName: 'Surya', lastName: 'Gaonkar', grade: 1 }







