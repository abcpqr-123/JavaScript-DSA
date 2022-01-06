// Removing a vertex 

// * The function should accept a vertex to remove 

// * The function should loop as long as there are any other vertices in 
//   the adjacecy list for that vertex 

// * Inside of the loop, call our removeEdge function with to vertex we are 
//   removing and any values in the adjacecy list for that vertex 

// * delete the key in the adjacency list for that vertex 






// {
//     'Tokyo' : ['Dallas', 'Hong Kong'],
//     'Dallas' : ['Tokyo', 'Aspen', 'Hong Kong', 'Los Angeles'],
//     'Aspen': ['Dallas'],
//     'Hong Kong' : ['Tokyo', 'Dallas', 'Los Angeles'],
//     'Los Angeles' : ['Hong Kong', 'Dallas']
// }

// g.removeVertex('Hong Kong')

// {
//     {
//         'Tokyo' : ['Dallas'],
//         'Dallas' : ['Tokyo', 'Aspen', 'Los Angeles'],
//         'Aspen': ['Dallas'],
//         'Los Angeles' : ['Dallas']
//     }
// }