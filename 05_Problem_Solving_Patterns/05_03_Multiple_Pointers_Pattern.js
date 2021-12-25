// Multiple Pointers

// Creating pointers or values that corresponf to an index
// or position and move towards the begging, end or middle 
// based on a certain condition 


// very efficient for Solving problems with minimal space 
// complexitity as well




// Question:
// write a function called sumZero which accepts a sorted array of 
// integers. The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or 
// undefined if a pair does not exist.



// sumZero ([-3, -2, -1, 0, 1, 2, 3]) //[-3,3]
// sumZero ([-2, 0, 1, 3]) // udefined
// sumzero ([1,2,3]) //undefied

// Basic Solution:

function sumZero(arr){
    for (let i = 0; i <=arr.length; i++){
        for(let j=i+1; j<=arr.length; j++){
            if(arr[i] + arr[j] === 0){
                 return [arr[i], arr[j]]
            }
        }
    }
}
console.log(sumZero ([-4,-3,-2,-1,0,1,2,5]))



// Time Complexity: O(n^2)
// Space Complexity: O(1)


// Outout:
// [ -2, 2 ]





// -------------------------------------------------------------





// Refactored Optimized solution:

function sumZero (arr){
    let left = 0
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right]
        if (sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0){
            right--
        }else{
            left++
        }
    }
   
}


console.log(sumZero([-4,-3,-2,-1,0,1,2,3, 10]))

// Time Complexity: O(n)
// Space Complexity:O(1)


// Output:
// [ -3, 3 ]