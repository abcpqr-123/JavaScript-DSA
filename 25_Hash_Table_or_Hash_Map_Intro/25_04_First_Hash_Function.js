// Charector code:


let b = 'a'.charCodeAt(0) 
console.log(b)

// Output:
// 97

 
console.log('z'.charCodeAt(0) )
// Output:
// 122

console.log('z'.charCodeAt(0) - 'a'.charCodeAt(0))
// Output:
// 25

console.log('Surya'.charCodeAt(0))
console.log('Surya'.charCodeAt(1))
console.log('Surya'.charCodeAt(2))
console.log('Surya'.charCodeAt(3))
console.log('Surya'.charCodeAt(4))

// Output:
// 83
// 117
// 114
// 121
// 97

//============================================================

// get the valid array index: These values will be between 1 - 10 

console.log(13 % 3)

console.log(52 % 11 ) 

console.log(1000009867 % 11)
// Output:
// 1
// 8
// 10

console.log('------------------------------------')


// Hash functions that works on strings only:

function hash (key, arrayLen){
    let total = 0
    for(let char of key){
         // map 'a' to 1, 'b' to 2, 'c' to 3 etc
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen
    }
    return total 
}


console.log(hash ('pink', 10)) // Output: 0
console.log(hash ('orangered', 10))  // Output: 7
console.log(hash ('cyan', 10)) // Output: 3



// Problem with our hasing code: 

// 1. Only hashes strings (we wont worry about this) 

// 2. Bit the bgger problem is: 
//    It qwont take constant time - It scales along with the size of the input
//    If the input string is larger it takes more time, if the length of the 
//    string is less it takes less amount of time 

// 3. Could be a little more random 