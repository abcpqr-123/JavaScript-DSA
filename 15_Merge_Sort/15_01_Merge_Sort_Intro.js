// Merge Sort 

// * Its a combinaion of two things:
//   Merging    and   Sorting 

// * Exploits the fact that arrays of 0 or 1 element are always sorted 

// * Works by decomposing an array into smaller arrays of 0 or 1 
//   elements, then building up a new sorted array



// How Merge sort works: 

[8,3,5,4,7,6,1,2]


[8,3,5,4] [7,6,1,2]  // devide 


[8,3] [5,4] [7,6] [1,2]   // devide 2 parts into further 2 parts


[8] [3] [5] [4] [7] [6] [1] [2]   // devode again until u get single elements


[3,8] [4,5] [6,7] [1,2]    // now sort by making group of 2


[3,4,5,8] [1,2,6,7]   // now sort again


[1,2,3,4,5,6,7,8]




