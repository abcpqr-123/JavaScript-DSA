class Node{
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
}

var tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)

console.log(tree)

console.log(tree.root)

console.log(tree.root.right)

console.log(tree.root.left)

console.log(tree.root.left.right)


// Output:
// BinarySearchTree {
//     root: Node {
//       value: 10,
//       left: Node { value: 7, left: null, right: [Node] },
//       right: Node { value: 15, left: null, right: null } 
//     }
//   }
//   Node {
//     value: 10,   
//     left: Node { 
//       value: 7,  
//       left: null,
//       right: Node { value: 9, left: null, right: null }
//     },
//     right: Node { value: 15, left: null, right: null }
//   }
//   Node { value: 15, left: null, right: null }
//   Node {
//     value: 7,
//     left: null,
//     right: Node { value: 9, left: null, right: null }
//   }
//   Node { value: 9, left: null, right: null }