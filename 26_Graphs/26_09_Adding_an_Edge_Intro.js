// Adding an edge: 

// * This function should accept two vetices, we can call them 
//   vertex 1 and vertex 2

// * This function should find in the adjecency list the key of 
//   vertex1 and push vertex2 to the array 

// * The function should find in the adjecency list the key of  
//   vertex2 and push vertex1 to the array 

// * We can handle the errors later 


// {                                                          {
//     'Tokyo' : [],                                             'Tokyo' : ['Dallas'],
//     'Dallas' : [], ---> g.addEdge('Tokyo', 'Dallas') -->      'Dallas' : ['Tokyo'],   -----
//     'Aspen' : []                                              'Aspen' : []
// }                                                          }

//                                             {
//                                                 'Tokyo' : ['Dallas'],
// ---> g.addEdge('Dallas', 'Aspen')    ---->      'Dallas' : ['Tokyo', 'Aspen']
//                                                  'Aspen' : ['Dallas']
//                                               }  
