// the time complexity for BFS and DFS are  same 
// beacuse we are visiting every node one time, so that is irrelevent 

// *  if the tree is one-sided long tree then -  BREADTH FIRST
//    will be better 

//    In this case the space complexity will be lot more less if we use 
//    BTERADTH FIRST 

// * But in most of the cases tree will not be completely one-sided
  
//   So in case of a large tree Depth first tree will take less space 
 
//-------------------------------------------------------  


// DFS-InOrder:

// In InOrder the data which we get as output will be in the order 
// for example in case of numbers, it will be from lowest to highest 
// so if we want to store the data in that order, in a database or 
// something then InOrder will be the best choice 



// DFS-PreOrder:
// In pre-order the output WILL NOT BE  in the lowest to higherst order
// This is useful if u r trying to clone or duplicate a tree or u want to 
// store it, u want to flatten it out so u can store it in a file or in a 
// database or something and then recreate it from a that serialized 
// structure. 

