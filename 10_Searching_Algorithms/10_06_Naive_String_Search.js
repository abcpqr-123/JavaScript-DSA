// Naive String Search:

// Suppose you want to count the number of times a smaller string appears
// in a longer string 

// A straightforward approach involves checking pairs of charecters individually


// Pseudocode:
// 1. Loop over the longer String
// 2. Loop over the shorter String
// 3. If the charecters dont match, break out of the inner Loop
// 4. If the charecters do match, kkep going
// 5. if u complete the inner loop and find a match
//    increment the count of matches
// 6. Return the count


// Naive search implimentation:

function naiveSearch (long, short){
    let count = 0
    for (let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            console.log(short[j], long[i+j])
            if (short[j] !== long[i+j]){ // i + j bacuse, else as we compare the next
                // charecter of the j we should comapre the next charecter of j also
                console.log("BREAK!")
                break;
            }
            if (j === short.length - 1){
                console.log("FOUND ONE!")
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch('lorie loled', 'lol' ))





// Output:
// l l
// o o   
// l r   
// BREAK!
// l o   
// BREAK!
// l r
// BREAK!
// l i
// BREAK!
// l e
// BREAK!
// l
// BREAK!
// l l
// o o
// l l
// FOUND ONE!
// l o
// BREAK!
// l l
// o e
// BREAK!
// l e
// BREAK!
// l d
// BREAK!
// 1