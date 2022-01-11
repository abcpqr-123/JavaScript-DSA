// what makes a good hash?

// 1. Fast (i.e constant time)

// 2. Doesn't cluster outputs at specific indices, but distributes 
//    uniformly 

// 3. Deterministic (same input yields same input)

//------------------------------------------------

// 1. Fast (i.e constant time) ==>
// Example for a INefficient hash: 
//    This code doesnot run faster So.. beacuse of loop so we need code which is faster 
function slowHash(key){
    for (var i = 0; i < 10000; i++){
        console.log('Everyday i am hashing')
    }
    return kety[0].charCodeAt(0)
}

// ------------------------------------------------



// 2. Doesn't cluster outputs at specific indices, but distributes 
//    uniformly ==> 

// Uniformly distributes values: INefficent function

function SameHashedValue (key){
    return 0 
}


//------------------------------------------------


// 3. Deterministic (same input yields same input)

// INefficient and not a good structure of Hash:
// beacuse, it wont give same output for very single output.
// deterninistic: 

function randomHash (key){
    return Math.floor(Math.random()*1000)
}


