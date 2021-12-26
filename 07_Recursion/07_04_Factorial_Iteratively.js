

// // Finding the factorial of a number:


// // WITH OUT RECURSION: ITERATIVE METHOD

// function factorial (num) {
//     let total = 1
//     for(let i = num; i > 0; i--){
//         total = total * i
//     }
//     return total
// }

// console.log(factorial(4))


// // Output:
// // 24



// // ------------------------------------------------


// // WITH OUT RECURSION: ITERATIVE METHOD  --> Optimized

// function factorial (num) {
//     let total = 1
//     for(let i = num; i > 1; i--){
//         total = total * i
//     }
//     return total
// }

// console.log(factorial(4))


// // Output:
// // 24




// // ------------------------------------------------



// RECURSIVE WAY:


// NOTE: FACTORIAL OF 5 IS eqeal to  FIVE TIMES FACTORIAL OF 4
//       FACTORIAL OF 4 IS eqeal to  FOUR TIMES FACTORIAL OF 3


function factorial(num){
    if (num === 1){
        return 1
    }
    return num * factorial(num - 1)
    // Ex:  4  * (4-1)!
}


// Output:
// console.log(factorial(4))




// Explination:
//  4 * (4-1)!
//     factorial(num) will be called and this time num === 3
//        3 * (3-1)!
//        factorial(num) will be called and this time num === 2
//              2 * (2-1)!
//                   return 1  
//                      num === 1 hit the base case



