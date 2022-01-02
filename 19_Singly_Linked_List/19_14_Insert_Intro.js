// Insert: 
// Adding a node to the linked list at a specific position 


// Insert Pseudocode 

// * if the index is less than zero or greater than the length, return 
//   false 

// * If the index is the same as the length, push a new node to the 
//   end of the list 

// * If the index is 0, unshift a new node to the start of the list 

// * Otherwise, use the get method, access the node at the index -1

// * Set the next property on that node to be the new node 

// * Set the next property on the new node to be the previous next increment the
//   length 

// * Return true 