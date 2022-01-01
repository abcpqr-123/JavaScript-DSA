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
            // if there was a tail Before, say, if we have hello as the tail,
            // and we push goodbye, we are going to take goodbye as the new node,
            // Take the current tail 'Hello', set the .next to be good bye
            // And then we just have to update this detail to point to that new node

            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}


var list = new SinglyLinkedList()
list.push('HELLO')
list.push('GOODBYE')
list.push(99)
list.push('Surya')


console.log(list)
// SinglyLinkedList {
//     head: Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: [Node] } },
//     tail: Node { val: 'Surya', next: null },
//     length: 4
//   }

//  Head                           tail
//  Hello ---> Goodbye ---> 99 --> Surya


console.log(list.head)
// Output:
// Node {
//     val: 'HELLO',
//     next: Node { val: 'GOODBYE', next: Node { val: 99, next: [Node] } }
//   }

console.log(list.head.next)
// Output:
// Node {
//     val: 'GOODBYE',
//     next: Node { val: 99, next: Node { val: 'Surya', next: null } }
//   }

console.log(list.head.next.next)
// Output:
// Node { val: 99, next: Node { val: 'Surya', next: null } }

console.log(list.tail)
// Output:
// Node { val: 'Surya', next: null }

console.log(list.tail.next)
// Output:
// null
