// Popping:
// Removing a node from the end of the linked l



// Popping pseudocode :

// * If there are no nodes in the list, return undefined

// * Loop through the list until u reach the tail 

// * Set the next property of the 2nd to last to be null 

// * Set the tail to be the length of the list by 1

// * Decrement the lenghth of the list by 1 

// * Return the vlaue of the node removed 



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
        
        var newNode = new Node(val)
        // if there is no head then make new node as head
        // this.tail to the same
        if (!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
//-----------------------------------------
      // HEllo --> goodbye --> !
//                       c
//              nt
    pop(){
        if (!this.head) return undefined
        var current = this.head
        var newTail = current
        while (current.next){
            newTail = current
            current = current.next 
        }
        this.tail = newTail
        this.tail.next = null 
        this.length--
        if(this.length === 0){
            this.head = null 
            this.tail = null
        }
        return current
    }
}


//-------------------------------------------------
var list = new SinglyLinkedList()
list.push('HELLO')
list.push('GOODBYE')
list.push(99)
list.push('Surya')
console.log(list.pop('HELLO'))
console.log(list.pop('GOODBYE'))
console.log(list.pop(99))

console.log(list)



// Output:
// Node { val: 'Surya', next: null }
// Node { val: 99, next: null }
// Node { val: 'GOODBYE', next: null }
// SinglyLinkedList {
//   head: Node { val: 'HELLO', next: null },
//   tail: Node { val: 'HELLO', next: null },
//   length: 1
// }











//===========================================================================
    // NOTE: THE BELLOW CODE IS NOT RELATED TO THE POPPING CODE
// ===========================================================================

// Note:
//  The bellow code was for Some other purpose So, it has got nothing to 
//  do with the code related to popping just ignore it:


// class Node {
//     constructor (val){
//         this.val = val 
//         this.next = null
//     }
// }

// class SinglyLinkedList {
//     constructor(){
//        this.head = null
//        this.tail = null
//        this.length = 0
//     }

//     push(val){
        
//         var newNode = new Node(val)
//         // if there is no head then make new node as head
//         // this.tail to the same
//         if (!this.head){
//             this.head = newNode
//             this.tail = this.head
//         }else{
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         this.length++
//         return this
//     }
// //-------------------------------------
//     traverse(){
//         var current = this.head
//         while (current){
//             console.log(current.val)
//             current = current.next
//             }
//     }
// //-------------------------------------
// }

// var list = new SinglyLinkedList()
// list.push('Hello')
// list.push('Good Bye')
// list.push('!')

// console.log(list.traverse())
// // Output:
// // Hello
// // Good Bye
// // !
// // undefined