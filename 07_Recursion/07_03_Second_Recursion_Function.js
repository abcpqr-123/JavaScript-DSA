// find the sum of the given number up to the given number using recursion:
// ex: 6 = (1+2+3)
//     10 = (1+2+3+4)


function sumRange (num){
    if(num === 1){
        return 1
    }
    return num + sumRange(num - 1)
}

console.log((sumRange(4)))


// Output:
// 10


// first the base will be checked.sicnce the number is not eqeal to 1 
// it will move forword. now in 'return num + sumRange(num - 1)' num will
// be eqeal to 4   +   again sumRange function will be called. so now, (num -1)
// means (4-1)  which is eqeal to 3,


//so now num = 3. so again the function  sumRange(num - 1) will be called and 
//(3-1) = 2. 


//so now num = 2. so again the function  sumRange(num - 1) will be called and 
//(2-1) = 1. 


// Now we hit the base case... 

// so now, 1 + 2 + 3 + 4 = 10




// sumRange(3)
//        return 3 + sumRange(2)
//              return 2 + sumRange(1)
//                       return 1

// sptep 1:
// sumRange(3)
//        return 3 + sumRange(2)
//              return 2 + 1


// sptep 2:
// sumRange(3)
//        return 3 + 3


// sptep 3:
// sumRange(3 + 3) = 6
            
                      