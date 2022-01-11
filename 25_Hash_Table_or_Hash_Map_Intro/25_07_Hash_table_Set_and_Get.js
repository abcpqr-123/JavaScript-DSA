// Starter code: 

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
            total = (tatal * WEIRD_PRIME + vlaue) % this.keyMap.length
        }
        return total 
    }
}



// Set / Get


// Set:

// 1.Accepts a key and a value 
// 2.Hashes the key 
// 3.Stores the key-value pair in the hash talbe 
//   array via separate chaining 



//   Get: 

//   1.Accepts a key 
//   2.Hashes the key 
//   3.Retrives the key-value pair in the hash table 
//   4. If the key isn't found, return undifined 


