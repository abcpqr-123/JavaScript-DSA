// ANAGRAMS
// Given two strings, write a function to determine if the 
// second string is an anagram of the First. An anagram isa 
// word, phrase, or name formed by arranging the letters of 
// another, such as CINEMA, formed from ICEMAN.


function validAnagram (first, second){
    if(first.length !== second.length){
        return false;
    }
    const lookup = {};

    for(let i = 0; i < first.length; i++){
        let letter = first[i]
        // if letter exists increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    console.log(lookup)

    for(let i = 0; i <= second.length; i++){
        let letter = second[i]
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }
    console.log('true')
    return true
}

validAnagram('anagram', 'nagaram')



// Output:
// { a: 3, n: 1, g: 1, r: 1, m: 1 }




