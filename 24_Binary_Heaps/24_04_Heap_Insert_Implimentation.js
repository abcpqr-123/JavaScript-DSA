class MaxBinaryHeap {
    constructor(){
        this.values = [41,39,33,18,27,12]
    }
    insert (element){
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length-1
        const element = this.values[idx]
        while (idx > 0){
            let parentIdx = Math.floor((idx - 1)/2)
            console.log(parentIdx)
            let parent = this.values[parentIdx]
            if(element <= parent) break
                this.values[parentIdx] = element
                this.values[idx] = parent 
                idx  = parentIdx
        }
    }
}

let heap = new MaxBinaryHeap()
heap.insert(55)


console.log(heap)

// [41,39,33,18,27,12,55]
//   0  1  2  3  4  5  6


// [41,39,33,18,27,12,55]
// [41,39,55,18,27,12,33]
// [55,39,41,18,27,12,33]
// [55,39,41,18,27,12,33]



//--------------------------------------------


heap.insert(2)
heap.insert(2000)

console.log(heap)

// Output: 
// [
//     2000, 55, 41, 39,
//       27, 12, 33,  2,
//       18
//   ]
      


//-------------------------------------------



heap.insert(1)
console.log(heap)

// [
//     55, 39, 41, 18,
//     27, 12, 33,  1
//   ]