// Selecton sort is not that terrely efficient. 

// Time Complexity: O(n)^2



// We have to compare every element to every other element in the Array. 
// So as the length of the array grows, the number of comparision grows 
// roughly at the rate of n^2


// So, its drastically worse thenif we only had to make a single comparision for
// each item.


// IN ONE CASE SELECTION SORT IS BETTER THE THE BUBBLE SORT IS: 
// THAT SCEARIO IS: 
// U ARE IN A SITUATION WHERE U WANT TO MINIMIZE THE NUMBER OF SWAPS U R MAKING 


// bubble sort is basicallu swapping over and over to get the largest item till the end 
// we keep swaping and swapping until it goes to the end 


// IN SELECTION SORT WE ITERATE, WE COMPARE A LOT,  BUT WE ONLY MAKE ONE SWAP AT THE 
// END OF EACH LOOP. 


// SO IF WE ARE WORRIED ABOUT WRITING TO MEMORY, WE'RE WORRIED ABOUT ACTUALLY DOING THE 
// SWAP, WHICH IS NOT VERY COMMON, TO HONEST, BUT IF U WERE THEN SELECTION SORT WILL BE
// BETTER.
// oTHERWISE ITS NOT VERY GOOD.



