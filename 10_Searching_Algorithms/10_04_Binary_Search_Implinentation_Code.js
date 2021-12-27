// write a code to find the index of the given element in an array.

function binarySearch (arr, elem){
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end ) / 2)
    console.log(start, middle, end)
}

binarySearch([2,5,6,9,13,15,28,30], 15)

// Output:
// 0 3 7


//-------------------------------------


function binarySearch (arr, elem){
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end ) / 2)
    console.log(start, middle, end)
    while (arr[middle] !== elem){
        if (elem < arr[middle]){
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end ) / 2)   // Got new middle
       }
       console.log(start, middle, end)
    //    Output:
    //    0 3 7
    //    4 5 7
    }

binarySearch([2,5,6,9,13,15,28,30], 15)
       




// ---------------------------------------





function binarySearch (arr, elem){
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end ) / 2)
    console.log(start, middle, end)
    while (arr[middle] !== elem){
        if (elem < arr[middle]){
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end ) / 2)   // Got new middle
       }
       console.log(start, middle, end)
       console.log(middle)
    //    Output:
    //    6
       return middle

    }

binarySearch([2,5,6,9,13,15,28,30], 28)

// Output:
// 6 6 7


// Explination:
// [2,5,6,9,13,15,28,30]  // start = middle + 1
// S         M        E
// [2,5,6,9,13,15,28,30]
//           S M      E
// [2,5,6,9,13,15,28, 30] // start = middle + 1
//                S,M  E



//----------------------------------------




function binarySearch (arr, elem){
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end ) / 2)
    console.log(start, middle, end)
    
    while (arr[middle] !== elem && start <= end){  // start <= end this is beacuse if
        //  we did not add 'start <= end' then when we try to access the number greater then
        //  the largest number in the array it will give infinite loop

        // Ex:binarySearch([2,5,6,9,13,15,28, 30 ] ,       80)
                                        //    S,M,   E
        if (elem < arr[middle]){
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end ) / 2)   // Got new middle
       }
       console.log(start, middle, end)
       console.log(middle)
       return middle

    }

binarySearch([2,5,6,9,13,15,28,30], 28)




//---------------------------------------------



function binarySearch (arr, elem){
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end ) / 2)
    // console.log(start, middle, end)
    
    while (arr[middle] !== elem && start <= end){
        if (elem < arr[middle]){
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end ) / 2)   // Got new middle
       }
    //    console.log(start, middle, end)
       if(arr[middle] === elem){
           return middle
       }
       return -1
    }

console.log(binarySearch([2,5,6,9,13,15,28,30], 80))


// Output:
// 6

//Output: for alue 80
// -1
//-------------------------------------------------------


// short way to write: shorter solution 

function binarySearch(arr, elem){
    let start = 0
    let  end = arr.length -1   // -1 --> beacuse, else it will given index outof bond error.
    let middle = Math.floor((start + end) / 2)
    while (arr[middle] !== elem && start <= end){   // why start is less then
               if( elem < arr[middle]) end = middle - 1
               else start = middle + 1
               middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === elem ? middle : -1
}
console.log(binarySearch([2,5,6,9,13,15,28,30], 30))


// Output:
// 7