//   Get: 

//   1.Accepts a key 
//   2.Hashes the key 
//   3.Retrives the key-value pair in the hash table 
//   4. If the key isn't found, return undifined 


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
        let index = this.hash(key)
            if (this.keyMap [index]){
                for(let i = 0; i < this.keyMap[index].length; i++){
                    if (this.keyMap[index] [i][0] === key){
                        return this.keyMap[index][i]
                    }
                }
            }
            return undefined 
        }
    }


    let ht = new HashTable(17);
    ht.set("maroon","#800000")
    ht.set("yellow","#FFFF00")
    ht.set("olive","#808000")
    ht.set("salmon","#FA8072")
    ht.set("lightcoral","#F08080")
    ht.set("mediumvioletred","#C71585")
    ht.set("plum","#DDA0DD")


  
    console.log(ht.get('yellow'))
    // [ 'yellow', '#FFFF00' ]

    console.log(ht.get("maroon","#800000"))
    // [ 'maroon', '#800000' ]


//------         --------------          ---------




    // If u just want the value then:


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
            let index = this.hash(key)
                if (this.keyMap [index]){
                    for(let i = 0; i < this.keyMap[index].length; i++){
                        if (this.keyMap[index] [i][0] === key){
    // If u just want the value then:
                            return this.keyMap[index][i][1]
                        }
                    }
                }
                return undefined 
            }
        }
    
    
        let ht = new HashTable(17);
        ht.set("maroon","#800000")
        ht.set("yellow","#FFFF00")
        ht.set("olive","#808000")
        ht.set("salmon","#FA8072")
        ht.set("lightcoral","#F08080")
        ht.set("mediumvioletred","#C71585")
        ht.set("plum","#DDA0DD")
    
    
      
        console.log(ht.get('yellow'))
        // ['#FFFF00' ]
    
        console.log(ht.get("maroon"))
        // ['#800000' ]
    