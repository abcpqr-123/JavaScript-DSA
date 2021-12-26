// Comman pitfalls or errrors in Recursive functions 

// 1. No Basecase:

function factorial(num){
//    if (num === 1){     // this was the base case
//         return 1
//    }
    return num * factorial(num - 1)
} 

console.log(factorial(3))


// Output:
// Maximum call stack size exceeded(STACK OVERFROW)



// ----------------------------------------------




// 2. Forgetting to return or returning the wrong thing


function factorial(num){
    if (num === 1){
        return 1
    }
    return num * factorial(num)  //// correct one --> (num -1 )

}

// Output:
// Maximum call stack size exceeded(STACK OVERFLOW)


// -----------------------
 



function factorial(num){
    if (num === 1){
        console.log(1);    // correct one --> return 1
    }
    return num * factorial(num - 1)

}

// Output:
// Maximum call stack size exceeded(STACK OVERFLOW)
 
//--------------------------------------





