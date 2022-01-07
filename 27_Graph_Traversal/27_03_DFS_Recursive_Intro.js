        // More elaboarated Psudocode:
//         Depth first traversal: Recursive approach: 

// * The function should accept a string node 

// * Create a list to store the end result, to be returned at the 
//   very end 

// * Create an object to store visited vertices 
    
//     # THe helper funcion shoild return early if the vertex is empty 

//     # The helper function should place the vetex if accepts into the visited
//       object and push that vertex into the result array 

//     # Loop over all of the values in the adjacencyList for the vertex 

//     * If any of those values  have not been visited, recursively invoke the 
//       helper function with that vertex 



// DFS Pseudocode --> In general 
                    //   Recursive 
// DFS(vertex){
//     if vertex is empty
//        return (this is base case)
//     add vertex to results list 
//     mark vertex as visited 
//     for each neighbor in vertex's neighbours: 
//        if neighbor is not visited: 
//           recursively call DFS on neighbor
// }


//  Visiting things: 

//  {
//      'A': true,
//      'B': true,
//      'D': true
//  }

                                //       A  

                                //  B           C   

                                //  D-----------E 

                                //        F 


// {
//     'A': ['B', 'c']                 //  {
//     'B': ['A', 'D']                 //      'A': true,
//     'C': ['A', 'E']                 //      'B': true,
//     'D': ['B', 'E', 'F']            //      'D': true,
//     'E': ['C', 'D', 'F']            //      'E': true
//     'F': ['D', 'E']                 //  }     
// }