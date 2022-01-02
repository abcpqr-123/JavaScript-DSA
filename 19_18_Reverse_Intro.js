// REVERSING A SINGLY LINKED LIST


//---------------------------------------------------
// HEAD                      TAIL
//  13  ---> 27 ---> 32 ---> 71

//  13 <---  27 <--- 32 <--- 71
//  TAIL                    HEAD

// swap the head and tail 

// next, take .next to the tail

// and we are going to store the current .next to 27, 

// we are going to  store variale called next to keep track of 32 so that
// when we take 27 next and we set it to previous thing 13, we still have 
// a reference to 32. 
// so in this sinario 13 Would be previous, 27 is our current node, which 
// I called the node variale. and 32 is next 


// Now we set 27 to previous and 32 to be the current and 71 to be the next 




//------------------------------------------------------

// Reverse pseudocode 

// * Swap the head and tail 

// * Create a variable called next 

// * Create a variable called prev

// * Create a variable caled node and initialize it to the head
//   property 

// * Loop through the list 

// * Set next to be the next property on whatever node is 

// * Set the next property on the node to be whatever prev is 

// * Set prev to be the value of the node variable

// * Set the node variable to be the value of the next variable 