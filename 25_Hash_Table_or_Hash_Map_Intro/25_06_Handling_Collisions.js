//  Dealing with collisions: 

// Even with a large array and a great hash function, collisions are 
// inevitable 

// There are many strategies for dealing with collisions, but we'll 
// forcus on two: 

// 1. Separate Chaining 

// 2. Linear Probing 



//------------------------

// 1. Separate Chaining: 

// Here we joint store them so jwe can store things, multiple key value 
// pairs at the Same position. 

// With separate chiaing, at each index in our array we store values using 
// a more sophisticated data structure(e.g. an array or a linked list)

// This allows us to store multiple key-value pairs at the same index 



// Ex: 

// 0    1    2    3     4             5              6                7      8      9  
//                      ^
//         [['darkblue',  '#00008b']
//           ['salmon', '#fa8072']]
       
//         darkblue ---------> 4
//         salmon -----------> 4










// Linear Probing: 



// With linear probing, when we find a collision, we search through the 
// array to find the next empty slot. 


// Unlike with separate chaining, this allows us to store a single key-value 
// at each index 

  // Ex: 

// 0  1  2   3  4                    5                      6                7   8    9  
//              ^                    ^                      ^ 
//          ['darkblue', '#00008b']  ['salmon', '#fa8072']  ['tomato', #ff6347]
   
       
//         darkblue ---------> 4   |   salmon -----------> 4  |  tomato -----------> 4
//         


