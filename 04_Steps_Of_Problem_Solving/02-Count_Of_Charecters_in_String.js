// // write a function which takes in a string and returns counts of each 
// // character in the string


// function charCount(str){
//     // make object to return at end
//        let result = {};
//     // loop over string,  for each charecter
//        for(let i=0; i<str.length; i++){
//            let char = str[i].toLowerCase()
//        // if the char is a number/letter AND is a key in object, add one to count
//            if(result [char] > 0){
//                result[char]++;
//            }
//       // if charater is something else4 (space, period, etc.) dont do anything
//     //return onject at end 
//            else if(char === '!' || char === ' ' || char === ',' ){
//                continue
//            }else{
//       // if the char is a number/letter AND not in object, and it to object and set 
//       //      value to 1  
//                result[char] = 1;
//            }
//        }
     
//     return result;
// }
// console.log(charCount("hello"))



// // Output:
// // console.log(charCount("hello"))
// // { h: 1, e: 1, l: 2, o: 1 }

// // console.log(charCount("hello Hi"))
// // { h: 2, e: 1, l: 2, o: 1, i: 1 }


// //-------------------------------------------



// // Optimization:

// function charCount(str){
//     let obj = {}
//     for (let i = 0; i < str.length; i++){
//          var char = str[i].toLowerCase()
//          if(/[a-z0-9]/.test(char)){
//              if(obj[char] > 0){
//                  obj[char]++
//              }else{
//                  obj[char] = 1;
//              };

//              }
//          }
//          return obj;
//     }
//     console.log(charCount('Surya'))


// // Output:
// // { s: 1, u: 1, r: 1, y: 1, a: 1 }



// // ----------------------------------



// // Further optimization:

// function charCount(str){
//     let obj = {}
//     for (let char of str){
//           char = char.toLowerCase()
//          if(/[a-z0-9]/.test(char)){
//              if(obj[char] > 0){
//                  obj[char]++
//              }else{
//                  obj[char] = 1;
//              };

//              }
//          }
//          return obj;
//     }
//     console.log(charCount('Surya'))


// // Output:
// // { s: 1, u: 1, r: 1, y: 1, a: 1 }



// // --------------------------------------------



// // Further optimization:

// function charCount(str){
//     let obj = {}
//     for (let char of str){
//           char = char.toLowerCase()
//          if(/[a-z0-9]/.test(char)){
//              obj[char] = ++obj[char] || 1
//          }
//     }
//     return obj;
// }
//     console.log(charCount('Surya'))

//     // Output:
//     // { s: 1, u: 1, r: 1, y: 1, a: 1 }




//     //----------------  THE BEST WAY --------------



    function charCount(str){
        let obj = {}
        for (let char of str) {
          if (isAlphaNumeric(char)) {
         char = char.toLowerCase()
                 obj[char] = ++obj[char] || 1
             }
        }
        return obj;
    }

    function isAlphaNumeric(char){
        let code = char.charCodeAt(0);
        if(!(code > 47 && code < 58) && 
           !(code > 64 && code < 91) &&
           !(code > 96 && code < 123)){
               return false
           }
           return true
    }

    console.log(charCount('Hello world'))


    // Output:
    // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }