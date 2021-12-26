// count down numbers:

// without recursion:

function countDown(num){
    for(let i = num; i > 0; i--){
        console.log(i)
    }
    console.log('All Done!')
}
countDown(5)

// Output:
// 5
// 4
// 3
// 2
// 1
// All Done!


//----------------------------------------------------

// with recursion:


function countDown(num){
    if(num <= 0){
        console.log('All done')
        return
    }
    console.log(num)
    num--
    countDown(num)
}

countDown(3)


// Step by step explination:
// console.log(3)
// countDown(2)   //(n--  ==> (3-1)= 2)
// console.log(2)
// countDown(1)   //(n--  ==> (2-1)= 1)
// console.log(1)
// countDown(0)    // Base Case
// console.log('All done')


// Output:
// 3
// 2
// 1
// All done


