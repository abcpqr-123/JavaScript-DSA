//           ---->      10 
    
//        ---->    6           15 

//     ---->    3     8             20 

[10,6,3,8,15,20]

//-------------------------------------------------------------

// DFS - PreOrder: 

// Steps- Recursively: 

// # Create a variable to store the values of nodes visited 

// # Store the root of the BST in a vaiable called current 

// # Write a helper function which accepts a node 

//    * Push the value of the node to the variable that stores the value 
  
//    * If the node has a left property, call the helper function with 
//      the left property on the node 

//    * If the node has a fight property, call the helper function with the 
//      right property on the node 

// # Invoke the helper function with the current variable 

// # Return the array of values 