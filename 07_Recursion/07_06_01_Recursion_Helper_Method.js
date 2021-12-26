// collect all the odd values using the recursive Helper Method


function collectOddValues(arr){
    let result = []
     // Base Case
    function helper(helperInput){
        if(helperInput.length === 0){
            return
        }
        // If the number is ODD then this if function will run
        // and that odd number will be pushed to the result array.
        // if the number is EVEN then this function will not be 
        // executed 
        if (helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
       // the number which got checked that weather its odd or even will
       // be removed 
        helper (helperInput.slice (1))
    }
   //  and the numbers execpt that one will be again checked 
    helper(arr)
    
    return result
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

// Output:
// [ 1, 3, 5, 7, 9 ]