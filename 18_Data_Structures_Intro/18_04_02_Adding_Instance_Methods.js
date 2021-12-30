//  Instance Methods: Implimentation

// Instance methods are related to perticular instances and  we can 
// use it call the perticualar instance we want.



let data = new Array(1,2,3)
console.log(data)

// // Output:
// // [ 1, 2, 3 ]

//------    ----------          ------------

let data = new Array(1,23,34)
data.push(10)
console.log(data)

// // Output:
// // [ 1, 23, 34, 10 ]


// ---------------------------------------



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
let lastStudent = new Student ('Surya', 'Gaonkar')

console.log(firstStudent.fullName())
console.log(lastStudent.fullName())

// Your full name is colt steele
// Your full name is Surya Gaonkar


//--------------------------------------------------------------


// Adding another method to mark the attendence and to tell who is late:


class Student {
    constructor (firstName, lastName,year){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
        this.tardies = 0
        
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}` 
    }

    markLate(){
        this.tardies = this.tardies + 1
        if (this.tardies >= 3){
            return "You are explelled!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }

}
let firstStudent = new Student ('colt', 'steele',1)
let lastStudent = new Student ('Surya', 'Gaonkar',2)

console.log(firstStudent.markLate())


// Output:
// this.tardies = 0   // we we set tardies eqeal to  0
// colt steele has been late 1 times
// this.tardies = 2   // we we set tardies eqeal to  2
// You are explelled!! 



// ----------------------------------------------------------


// adding scores and calculating the everage

class Student {
    constructor (firstName, lastName,year){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
        this.tardies = 0
        this.scores = []

        
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}` 
    }

    markLate(){
        this.tardies = this.tardies + 1
        if (this.tardies >= 3){
            return "You are explelled!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore (score){
        this.scores.push(score)
        return this.scores
    }
    
}
let firstStudent = new Student ('colt', 'steele',1)
let secondStudent = new Student ('Surya', 'Gaonkar',2)

secondStudent.addScore(92)
secondStudent.addScore(86)

console.log(secondStudent.addScore(56))

// Output:
// [ 92, 86, 56 ]




//-------           -----------        ---------  ----------


// claculating everage:

    class Student {
        constructor (firstName, lastName,year){
            this.firstName = firstName
            this.lastName = lastName
            this.grade = year
            this.tardies = 0
            this.scores = []
    
            
        }
        fullName(){
            return `Your full name is ${this.firstName} ${this.lastName}` 
        }
    
        markLate(){
            this.tardies = this.tardies + 1
            if (this.tardies >= 3){
                return "You are explelled!!"
            }
            return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
        }
        addScore (score){
            this.scores.push(score)
            return this.scores
        }
        calculateAverage(){
            let sum = this.scores.reduce(function(a,b){return a + b})
            return sum/this.scores.length
            }
    }
    let firstStudent = new Student ('colt', 'steele',1)
    let secondStudent = new Student ('Surya', 'Gaonkar',2)
    
    secondStudent.addScore(92)
    secondStudent.addScore(86)
    
    console.log(secondStudent.calculateAverage())
    // Output:
    // 89

    firstStudent.addScore(82)
    firstStudent.addScore(76)
    console.log(firstStudent.calculateAverage())

    // Output:
    // 79