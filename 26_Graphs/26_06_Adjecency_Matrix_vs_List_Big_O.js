// Differences & Big O 

// |v| - number of vertices 

// |E| - number of edges 


// Operations            Adjacent list           Adjacency Matrix 

// Add vertex             O(1)                     O(|v^2|)
// Add edge               O(1)                     O(1)
// Remove Vertex          O(|V| + |E|)             O(|V^2|)
// Remove Edge            O(|E|)                   O(1)  
// Query                  O(|V| + |E|)             O(1) 
// storage                O(|V| + |E|)             O(|V^2|)



// Adjecency List                 vs           Adjacency Matrix 

// * Can take up less space                    * Takes up more space   
//   (in sparse graphs)                          (in sparse graphs)

// * Faster to iterate over all                * Slower to iterate  
//   edges                                       over all edges 

// * Can be slower to lookup                   * Faster to lookup specific 
//   specific edge                               edges
  