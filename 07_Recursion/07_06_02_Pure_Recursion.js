// collect all the odd values using the Pure recursive Method



// Pure recursion tips:

// 1. For arrays, use methods like slice, the spread operator, 
//    and concat that make copies of arrays so you do not mutate 
//    them.

// 2. Remember that strings are immutable so u will need to use 
//    methods like slice, substr, or substring to make copies of 
//    strings

// 3. To make copies of objects use Object.assign or the spread operator



function collectOddValues(arr){
    let newArr = [];

    if (arr.length === 0){
        return newArr
    }

    if (arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr

}

console.log((collectOddValues([1,2,3,4,5])))

// Output:
// [ 1, 3, 5 ]