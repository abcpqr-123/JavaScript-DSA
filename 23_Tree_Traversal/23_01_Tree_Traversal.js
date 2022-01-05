// Traversing a tree: 

//    Mainly 2 ways: 

//    * Breadth-frist Search 
//    * Depth-first Seach 
 

//----------------------------------------


// BFS --> Breadth first search

//           ---->      10 
    
//        ---->    6           15 

//     ---->    3     8             20 


//        [10,6,15,3,8,20]



//--------------------------------------



// DEPT FIRST SEARCH - going downwards   

    //  the idea of depth first is that u are just going down like ur 
    //  primary direction is going to the end of the tree vertically and 
    //  then coming back up 

    // Main three types of Depth First Search: 

    // * DFS-In Order: 
       
    //             10 
            
    //       6            15 

    //  3        8               20 

          [3,6,8,10,15,20]

//------------------------------------------------


    // * DFS-Pre order: 


    //             10 
            
    //       6            15 

    //  3        8               20 

  [10,6,3,8,15,20]

//------------------------------------------------

    // * DFS-Post Order: 

    //             10 
            
    //       6            15 

    //  3        8               20 


    [3,8,6,20,15,10]