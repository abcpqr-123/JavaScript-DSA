// Types Of heaps: (not at all importent)

// * Heap 

// * Binary Heap 

// * B-Heap 

// * Week Heap

// * Binomial Heap 

// * Fibonacci Heaps

// * AF-Heap 

// * Leonardo Heap

// * 2-3 Heap

// * Soft Heap 

// * Pairing Heap

// * liftist Heap 

// * Treap 

// * Beap 

// * Skew Heap

// * Termary Heap

// * D-way Heap 

// * Brodal queue




// What is a Binary Heap?

// Very similar to binary search Tree, but with some different rules! 


// In a MaxBinaryHeap, Parent nodes are always LARGER than child nodes. 
// In a MinBinaryHeap, Parent nodes are always SMALLER then child nodes.


// NOT a binary Heap: beacuse 27 is larger then 18
//     //           33
//     //         /    \ 
//     //        /      \
//     //       18       41
//     //      /  \       /
//     //     /    \     /
//     //    12     27   39

 
//     a binary Heap: 

//     //           41
//     //         /    \ 
//     //        /      \
//     //       39       33
//     //      /  \       /
//     //     /    \     /
//     //    18     27   12





// Max Binary Heap: 

// * Each parent has at most two Child nodes 

// * The value of each parent node is always greater then its child 
//   nodes 

// * In a max Binay Heap the parent is greater then the children, but 
//   there are no guarentees between sibling nodes 

// * A binary heap is as compact as possible. All the children of each 
//   node are as full as they can be and left children are filled out first
    // Ex: In some binary trees there was big chain of one sided nodes.. but
    //     here, its not like that 
    
    
    
    // Ex for a binary heap 
    // * value of parent node is always greater then children 
    // * No implied ordering between siblings 
    
    // //                          100 
                    
    // //             19                     36 

        
    // //       17           3           25       1 


    // //    2      7 




// Why Heaps are imprtent? 

//  * Binary Heaps are used to implement Priority Queues, Which are very 
//    commonly used data structures

// * They are also used quite a bit, with graph traversal algorithms 