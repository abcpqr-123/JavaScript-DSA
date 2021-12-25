// Divide and Conquer 

// This pattern involves dividing a data set into smaller 
// chucks and then repeating a process with a subset of data.This

// This pattern can tremendously decrease the time complexity.



// Example:
// Given a sorted array of integers, write a finction called search, that 
// accepts a value and returns the index, where the value passed to the 
// function is located.if the value is not found, return -1.



// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1



// A naive Soultion:

// Linear Search:
// Time Complexity: O(n)



// >>>>>>> not getting proper output:  <<<<<<<




function search (arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
        return -1
    }

let find = search([1,2,3,4,5,6], 4)

let findd = search([1,2,3,4,5,6], 2)

console.log(find)

console.log(findd)





// // ------------------------------------------------------




// Refacted code --> devide and Conqure Method:

// Time Complexity - Log(n)  --> Binary Search

// >>>>>>> not getting output:  <<<<<<<



function search (array , val){

    let min = 0
    let max = array.length - 1 

    while (min <= max){
        let middle = math.floor((min + max) / 2)
        let currentElement = array[middle]

        if (array [middle] < val){
            min = middle + 1
        }else if(array[middle] > val){
            max = middle -1
        }else{
            return maiddle
        }
    }
    return -1
}