// SLIDING WINDOW 

// This pattern involves creating a window which can
// either be an array or number from one position to another

// Depending on a certain condition, the window either increases
// or closes(and a new window is created)

// Very useful for keeping track of a subset of data in an array/String
// etc.



// Question:
// Find maxSubArraySum

// Write a function called maxSubArraySum which accepts an array 
// of integers and a Number called n. The function should calculate
// the maximum sum of n consecutive elements in the array.


// maxSubArraySum([1,2,5,2,8,1,5],2)  // 10  --> find largest number in 2 numbers
// maxSubArraySum([1,2,5,2,8,1,5],4)  // 17  --> find largest number in 4 numbers
// maxSubArraySum([4,2,1,6],1) // 6          --> find largest number in 1 numbers
// maxSubArraySum([4,2,1,6,2],4) // 13       --> find largest number in 4 numbers
// maxSubArraySum([], 4) // null


// Basic Approach:

function maxSubArraySum (arr, num){
    if (num > arr.length){
        return null
    }
    var max = -Infinity   // (-Infinity beacuse, if put 0 then it willl not consider
                          // -ve numbers   
    for (let i = 0; i < arr.length - num + 1; i++){
        temp = 0
        for(let j = 0; j <num; j++){
            temp = temp +  arr[i + j];
        }
        if (temp > max){
            max = temp
        }
        // console.log(temp, max)   // Uncomment to print each step
    }
    return max;
}

 console.log(`The maximum sub array sum is: ${maxSubArraySum ([2,6,9,2,1,8,5,6,3],3)}`)


// Output:
// The maximum sub array sum is: 19




//--------------------------------------------------------




// Better Optimized Solution:(sliding window)


function maxSubArraySum(arr, num){
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++){
        maxSum = maxSum + arr[i]
    }
      tempSum = maxSum
       for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log(`The maximum sub array sum is: ${maxSubArraySum ([2,6,9,2,1,8,5,6,3],3)}`)


// Output:
// The maximum sub array sum is: 19
