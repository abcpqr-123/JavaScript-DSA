// Linear Search: Best case: O(1)
//                everage case: O(n)
//                worst case: O(n)

//                both everage and worst cases are O(n)

// -----------------------------

// Linear Search Pseudocode is given:
//   This function accepts an array and a value 
  
//   Loop through the array and check if the current array 
//   Element is eqeal to the value

//   if it is, return the index at which the Element is found 

//   if the value is never found, return -1


// wirte the code: 



    // My solution:
function findTheIndex(arr, value){
      for(let i = 0; i <= arr.length; i++){
           if (arr[i] === value){
               return i
           }
      }
      return -1

}

console.log(findTheIndex([1,2,3,4,5,6],4 ))
// Output:
// 4

// Time Complexity: O(n)
//---------------------------------------------------


// vedio solution:

function linearSearch(arr, value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
              return i
                }
            }
        return -1
       }

console.log(linearSearch([34,51,1,2,3,45,56,687], 3))


// Output:
// 4
// Time Complexity: O(n)

                       //   OR

// Time Complexity: O(n)
     function linearSearch(arr, value){
        for(let i = 0; i < arr.length; i++){
              if(arr[i] === value) return i
                }
            return -1
              }
                
     console.log(linearSearch([34,51,1,2,3,45,56,687], 34))



//--------------------------------------------------------


