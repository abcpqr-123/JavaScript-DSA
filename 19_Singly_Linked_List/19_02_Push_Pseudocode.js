// Pusing Pseudocode:

// * This function should eccept a value 

// * Create a new node using the value passsed to the function 

// * IF there is no head property on the FileList, srt the head and tail
//   to be the newly created node 

// * Otherwise set the next property on the tail to be the new node and set 
//   tail property on the list to be the newly created node 

// * Increment the length by one



//-----------------------

// Starter Code:

// piece of  data - val 
// reference to next node - next 

class Node {
    constructor (val){
        this.val = val 
        this.next = null
    }
}
    var first = new Node ('Hi')
    first.next = new Node ('there')
    first.next.next = new Node ('how')
    first.next.next.next = new Node ('are')
    first.next.next.next.next = new Node ('you')


//----------------


// The above code is too naive so, the bellow code is more efficient 

class Node {
    constructor (val){
        this.val = val 
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
       this.head = null
       this.tail = null
       this.length = 0
    }

    push(val){

    }
}


var list = new SinglyLinkedList()
list.push('HELLO')
LIst.push('GOODBYE')

