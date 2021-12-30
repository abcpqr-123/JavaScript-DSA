
// Static Mehod:

// The static Keyboard defines a static method for a class, static methods are 
// called without installing their class and connot be called through a class 
// instance . Static methods are often used to create utility functions for an 
// application.


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
//--------------------------------------------

   static EnrollStudents(){
       return "EROLLING STUDENTS"
   }

//-------------------------------------------
}
let firstStudent = new Student ('colt', 'steele',1)
let secondStudent = new Student ('Surya', 'Gaonkar',2)

secondStudent.addScore(92)
secondStudent.addScore(86)

// console.log(secondStudent.calculateAverage())
// Output:
// 89

firstStudent.addScore(82)
firstStudent.addScore(76)



//=============================================

console.log(EnrollStudents())
// Output:
// EnrollStudents is not defined

//-------------------------

console.log(Student.EnrollStudents())
// Output:
// EROLLING STUDENTS

//============================================



//-----------------------------------------------------------------

class Point {
    constructor (x, y){
        this.x = x
        this.y = y
    }
    static distance(a, b){
       const dx = a.x - b.x
       const dy = a.y - b.y
    
    return Math.hypot(dx, dy)
    }
}

const p1 = new Point (5, 5)
const p2 = new Point (10, 10)


console.log(distance(p1, p2))
// Output:
// distance is not defined


console.log(Point.distance(p1, p2))
// // Output:
// // 7.0710678118654755
