// DEPTH FIRST TRAVERSAL (ITERATIVE) 

// PSEDOCODE IN DETAIL 

// * The function should accept a stariting node 

// * Create a stack to help use keep track of vertices(use a list/array)

// * Create a list to stroe the end result, to be returned at the very 
//   end 

// * Create an Object to store visited vertices 

// * Add the starting vertex to the stack, and mark it visited 

// * While the stack has something in it: 
//     > Pop the next vertex from the stack 
//     > If that vertex hasn't been visited yet: 
        
//         # Mark it as visited 

//         # Add it to the result list 

//         # Push all of its neighbours into the stack 

// * Return the result array





// DFS Pseudocode: Intrerative (Genenral way)

// DFS-iterative(start):
//    let S be a stack 
//    S.push (start)
//    while S is not empty 
//      vertex = S.pop()
//     if vertex is not labeled as discovered: 
//        visit vertex (add to result list)
//        label vertex as discovered
//        for each of vertex's neighbours, N do 
//           S.push(N)



g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')


g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')