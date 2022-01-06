// Remove edge Intro:

// * his function should accept two vertices, we'll call them vertex1 
//   and vertex2 

// * The function should reassign the key of vertex1 to be an array that 
//   does not contain vertex2 

// * The function shoild reassign the key of vertex2 to be an array that 
//   does not contain vertex1 

// * We can handle the errors or the invalid inputs later 

// {
//     Bengaluru: [ 'Mysuru', 'Delhi' ],
//     Mysuru: [ 'Bengaluru' ],              ---> g.removeEdge('Mysuru', 'Bengaluru') -----
//     Delhi: [ 'Bengaluru' ]
//   }
// //  note: g.removeEdge('Mysuru', 'Bengaluru')  means, remove Mysuru from Bengaluru array
//                    {
//                       Bengaluru: ['Delhi' ],
// --->                  Mysuru: [ 'Bengaluru' ],
//                       Delhi: [ 'Bengaluru' ]
//                     }

