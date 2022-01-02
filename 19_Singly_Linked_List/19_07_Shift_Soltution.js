
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

//-----------------------------------------
     shift(){
         if (!this.head) return undefined
         var currentHead = this.head 
         this.head = currentHead.next 
         this.length--
         if (this.length === 0){
             this.tail = null
         }
         return currentHead // which was the current head but now removed 
     }
}




//-------------------------------------------------

var list = new SinglyLinkedList()
list.push('HELLO')
list.push('GOODBYE')
list.push(99)
list.push('Surya')

console.log(list.shift())
// Output:
// Node {
//     val: 'HELLO',
//     next: Node { val: 'GOODBYE', next: Node { val: 99, next: [Node] } }
//   }
 
console.log(list)
// Output:
// SinglyLinkedList {
//     head: Node { val: 'GOODBYE', next: Node { val: 99, next: [Node] } },
//     tail: Node { val: 'Surya', next: null },
//     length: 3
//   }



