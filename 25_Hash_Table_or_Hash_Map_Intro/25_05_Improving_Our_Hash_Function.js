// Hashing Revised: 


// Original Code: 


function hash (key, arrayLen){
    let total = 0 
    for(let i = 0; i < key.length; i++){
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (tatal + value) % arrayLen
    }
    return tatal 
}


// Optimized Code: 


function hash (key, arrayLen){
    let total = 0 
    // here we are using prime numbers, beacuse we can reduce collisions meaning 
    // that we dont want data to be stored in the same buckets if we can avoid 
    // it. we want to makes sure that we are spreading data out as such as possible 
    // so that faster to retrieve.
    let WEIRD_PRIME = 31
    // We used math.min So, if our key is 30 charecters, then we're going 
    // to use just loop 30 times. But if our key is a million characters, we'll 
    // just do the first 100
    // This is not a perfect solution , but this will work for us now, 
    // just as a sign of improvement 
    
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (tatal + WEIRD_PRIME + value) % arrayLen
    }
    return total 
}





