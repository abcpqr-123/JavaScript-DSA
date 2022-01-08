// Removing From a Heap: 


// * Remove the root 

// * Replace with the 

// * most recently addded 

// * Adjust (sink down)



// Sink Down? 

// The procedure for deleting the root form the heap (effectively extracting 
// the maximum element in a max-heap or the minimum element in a min-heap)
// and restoring the properties is called down-heap (also known as 
// bubble-down, percolate-down, heapify-down, cascade-down, and extract-min/max])



// Removing:

// * Swap the first value in the values property with the last one 

// * Pop form the values property, so u can return the value a the end.Pop

//       # Your parent index starts at 0 (the root)

//       # Find the index of the left child: 2 * index + 1(make sure its not 
//         out of bounds)

//       # Find the index of the right child: 2 * index + 2 (make sure its not
//         out of bounds)

//       # If the left or right child is greater than the element... swap. 
//         If  both left and right children are larger, swap with the largest 
//         child.

//       # The child index u seapped to now becomes the new parent index. 

//       # keep looping and swapping until neither child is larger than the element. 

//       # Return the old root!

