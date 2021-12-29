// * In order to implement merge sort, its seful to first implement
//   a function responsible for merging two sorted arrays 

// * Given two arrays which are sorted, this helper function should 
//   create a new array which is also sorted, and consists of all of the
//   elements in the two input arrays 

// * The funcion should run in O(n + m) time and O(n + m) space and 
//   should not modify the parameters passed to it 

// --------            ----------           ----------


// Merging Arrays Psudocode: 
// Merging Arrays Psudocode: 


// # Create an emty Array, take a look atathe smallest values in each 
//   input array 
// # While There are still values we haven't Looked at... 

//     * If the value in the first array is smaller then the second array,
//       push the value in the first array into our results and move on to 
//       the value in the next value in the first array 

//     * If the value in the fist array is larger then the second array, push 
//       the value in the second array into our results and move on to the next 
//       value in the second array 

//     * Once we exhaust one array, push in all remaining values from the other 
//       array.




// Example:

// merge([1,10,50], [2,14,99,100])

// [1,10,50]   [2,14,99,100]

// [1,2,10,14,50,99,100]


// MERGING TWO SORTED ARRAYS:
// MERGING TWO sorted ARRAYS:
// MERGING TWO sorted ARRAYS:
// MERGING TWO sorted ARRAYS:

function merge(arr1, arr2){
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length){
      if (arr2[j] > arr1[i]){
          results.push(arr1[i])
          i++
      }else{
          results.push(arr2[j])
          j++
      }
  }
  while (i < arr1.length){
      results.push(arr1[i])
      i++
  }
  while (j < arr2.length){
      results.push(arr2[j])
      j++
  }
  return results
}
console.log(merge([ 40, 80, 95, 100], [2,4,6,8]))


// Output:
// [2,  4,  6,   8,40, 80, 95, 100]