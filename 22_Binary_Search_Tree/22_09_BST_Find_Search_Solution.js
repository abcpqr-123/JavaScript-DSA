//          10 

//      5        13 

//   2     7  11     16

class Node {
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
    insert(value){
        var newNode = new Node(value)
        if (this.root === null){
            this.root = newNode
            return this 
        }else{
            var current = this.root 
            while (true){
                if (value === current.value) return undefined 
                if (value < current.value){
                    if (current.left === null){
                        current.left = newNode 
                        return this 
                    }else{
                        current = current.left 
                    }
                }else if (value > current.value){
                    if (current.right === null){
                        current.right = newNode 
                        return this
                    }else{
                        current = current.right  
                    }

                }
            }
        }
    }
    find (value){
        if (this.root === null) return false 
        var current = this.root 
        var found = false 
        while (current && !found){
            if (value < current.value){
              current = current.left 
            }else if (value > current.value){
                current = current.right
            }else{
                found = true 
            }
        }
        if(!found) return undefined 
        return current 
        }
}


var tree = new BinarySearchTree()
tree.insert(10)

tree.insert(5)

tree.insert(13)

tree.insert(11)

tree.insert(2)

tree.insert(16)

tree.insert(7)

console.log(tree.find(7))

console.log(tree.find(15))

console.log(tree.find(2))

console.log(tree.find(16))

console.log(tree.find(100))


// Output:
// Node { value: 7, left: null, right: null }
// undefined
// Node { value: 2, left: null, right: null }
// Node { value: 16, left: null, right: null }
// undefined

// -------------        -------------        -------------

// Note:
// The above code returns the number, if u want to return true or false 

// that means 

// If the number is present then the output will be true 
// and if the number is not present then the output will be false 

// for this type of output fallow the bellow code 


class Node {
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
    insert(value){
        var newNode = new Node(value)
        if (this.root === null){
            this.root = newNode
            return this 
        }else{
            var current = this.root 
            while (true){
                if (value === current.value) return undefined 
                if (value < current.value){
                    if (current.left === null){
                        current.left = newNode 
                        return this 
                    }else{
                        current = current.left 
                    }
                }else if (value > current.value){
                    if (current.right === null){
                        current.right = newNode 
                        return this
                    }else{
                        current = current.right  
                    }

                }
            }
        }
    }
    contains (value){
        if (this.root === null) return false 
        var current = this.root 
        var found = false 
        while (current && !found){
            if (value < current.value){
              current = current.left 
            }else if (value > current.value){
                current = current.right
            }else{
                return true 
            }
        }
        return false 
        }
}


var tree = new BinarySearchTree()
tree.insert(10)

tree.insert(5)

tree.insert(13)

tree.insert(11)

tree.insert(2)

tree.insert(16)

tree.insert(7)

console.log(tree.contains(7))

console.log(tree.contains(15))

console.log(tree.contains(2))

console.log(tree.contains(16))

console.log(tree.contains(100))



// Output:
// true
// false
// true
// true
// false