// algorithm    Time Complexity    TimeComplexity    TimeComplexity     Space Complexity 
//                   (Best)          (Average)          (Worst)          

// Merge Sort        O(n log n)      O(n log n)       O(n log n)            O(n)


Explination: 
[8] [3] [5] [4] [7] [6] [1] [2] 

   [3,8] [4,5] [6,7] [1,2]   // we have to compare and sort

     [3,4,5,8] [1,2,6,7]    // we have to compare and sort

      [1,2,3,4,5,6,7,8]     // we have to compare and sort

    // O(log n) --> decomposition         +   O(n) comparision per decomposition

//   O(log n) ==>  log base 2 of n
// 'log base 2 of n' what that means is 2 of what power gives us n?
// so in our case, 2^3 (2 power 3) gives us n. Beacuse we have 8 elements
// if we had 32 elements then it would be 2^5


    //  O(n)  --> it is the number of comparisions we have to make. 
    //            so, if there are 8 elements in the array thern 8 comparisions
    //            if there are 1000 elements in the array thern 1000 comparisions


    //   so in total O(n log n)



    // Space Complexity: it takes more space in comparision to bubble sort and other...
    //                   space complexity for merge sort is O(n)