// Set:

// 1.Accepts a key and a value 
// 2.Hashes the key 
// 3.Stores the key-value pair in the hash talbe 
//   array via separate chaining 

class HashTable {
    constructor (size=53){
        this.keyMap = new Array(size)
    }
    hash (key){
        let total = 0 
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total 
    }
    set(key, value){
        let index = this.hash(key)
        if (!this.keyMap [index]){
            this.keyMap[index] = []
        }
        this.keyMap [index].push([key, value])
    }
    get (key){

    }
}

let ht = new HashTable()
// console.log(ht.set('hello world', 'goodbye!'))
// console.log(ht.set('dogs', 'are cool'))
// console.log(ht.set('cats', 'jare fine'))
// console.log(ht.set('i love', 'pizzaa'))

ht.set('hello world', 'goodbye!')
ht.set('dogs', 'are cool')
ht.set('cats', 'jare fine')
ht.set('i love', 'pizzaa')

console.log(ht)

// Output:
// HashTable {
//     keyMap: [
//       <25 empty items>,
//       [ [Array] ],
//       <14 empty items>,
//       [ [Array] ],
//       <2 empty items>,
//       [ [Array] ],
//       <1 empty item>,
//       [ [Array] ],
//       <7 empty items>
//     ]
//   }

ht.set('hi', 'bye')
console.log(ht)


// Output:
// HashTable {
//     keyMap: [
//       <25 empty items>,
//       [ [Array] ],     
//       <14 empty items>,
//       [ [Array] ],
//       <2 empty items>,
//       [ [Array] ],
//       <1 empty item>,
//       [ [Array] ],
//       <7 empty items>
//     ]
//   }
//   HashTable {
//     keyMap: [
//       <25 empty items>,
//       [ [Array] ],
//       <14 empty items>,
//       [ [Array] ],
//       <2 empty items>,
//       [ [Array] ],
//       <1 empty item>,
//       [ [Array], [Array] ],
//       <7 empty items>
//     ]
//   }


ht.set('french', 'fries')
console.log(ht)
// Output:

// HashTable {
//     keyMap: [
//       <25 empty items>,
//       [ [Array] ],
//       <14 empty items>,
//       [ [Array] ],
//       <2 empty items>,
//       [ [Array] ],
//       <1 empty item>,
//       [ [Array], [Array] ],
//       <7 empty items>
//     ]
//   }
//   HashTable {
//     keyMap: [
//       <25 empty items>,
//       [ [Array] ],
//       <14 empty items>,
//       [ [Array] ],
//       <2 empty items>,
//       [ [Array] ],
//       [ [Array] ],
//       [ [Array], [Array] ],
//       <7 empty items>
//     ]
//   }