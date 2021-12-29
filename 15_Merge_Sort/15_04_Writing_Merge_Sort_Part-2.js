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
  
  function mergeSort(arr){
      if (arr.length <= 1) return arr

      let mid = Math.floor(arr.length/2)
      let left = mergeSort(arr.slice(0,mid))
      let right = mergeSort(arr.slice(mid))
      return merge(left, right)
  }

console.log(mergeSort([10,24,76,73,72,1,9]))


// Output:
// [1,  9, 10, 24,72, 73, 76]




// Explination: 

//                               mergeSort([10,24,76,73])
                                  
//             mergeSort([10,24])                        mergeSort([76,73]) 
    
//   mergeSort([10])       mergeSort([24])       mergeSort([76])      mergeSort([73])

//       [10]                   [24]                    [76]                [73]
//-------                ---------                   ---------         --------
//            [10]   merge()   [24]    merge()    [76]   merge()    [73]


//                 [10][24]                             [73][76]     // the elements will be sorted at this point

//                       [10,24]       merge()      [73,76]


//                                 [10,24,73,76]

                            



       

        



