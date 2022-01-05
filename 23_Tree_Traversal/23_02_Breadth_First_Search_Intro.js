//----------------------------------------


// BFS --> Breadth first search

//           ---->      10 
    
//        ---->    6           15 

//     ---->    3     8             20 


//        [10,6,15,3,8,20]



//--------------------------------------


//           BFS 

//     Steps - Iteratively

// * Create a queue (this can be an array) and a variable to store 
//   the values of nodes visited 

// * Place the root node in the queue 

// * Loop as long as there is anything in the queue 
    
//       # Dequeue a node from the queue and push the value of the 
//         node into the variable that stores the nodes 

//       # If there is a left property on the node dequeued - add it to 
//         the queue 

//       # If there is a right property on the node dequeued - add it to 
//         the queue 

// * return the variable that stores the values



// Explination: 
//           ---->      10 
    
//        ---->    6           15 

//     ---->    3     8             20 


// queue: [10]
// visited: []


//   * what ever the queue has, take it and add it to visited 

// queue: []
// visited: [10]

// * and then check  if there is a left,and then check  if there is a right 
//   and add that to the queue and now the loop ends 

// queue: [6,15]
// visited: [10]

// * in queue first thing in first thing out so add 6 first and then 15 to 
//   visited list 

// queue: [15]
// visited: [10,6]


// * and then check  if there is a left,and then check  if there is a right 
//   and add that to the queue
// queue: [15,3,8]
// visited: [10,6]

// Note: NOTE THAT WE ARE CREATING THE QUEUE TO HELP US REMEMBER THE THINGS THAT 
//       NEED TO COME NEXT, BUT WE'RE NOT VISITING THEM NEXT WE'RE WAITING TO  
//       VISIT THEM UNTIL WE'VE FINISHED A HORIZONTAL LEVEL. 

 
  // *  queue: [3,8]
  //    visited: [10,6,15]


//   * and then we check is there a left? No, Is there a right? YES. 
//     SO we add thar number

  //    queue: [3,8,20]
  //    visited: [10,6,15]


  // *  queue: [8,20]
  //    visited: [10,6,15,3]

  // *  queue: [8,20]
  //    visited: [10,6,15,3,8]

  // *  queue: []
  //    visited: [10,6,15,3,8,20]









   






    
        