class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
}

var g = new Graph()
g.addVertex('Bengaluru')
g.addVertex('Mysuru')
g.addVertex('Delhi')

 // g.addEdge('Bengaluru', 'Mysuru')

 // console.log(g.adjacencyList)


// // Output:
// // { Bengaluru: [ 'Mysuru' ], Mysuru: [ 'Bengaluru' ], Delhi: [] }

// // Note That:
// // Here Mysuru is in Bengaluru array 
// // and Bengaluru is in Mysuru array 


// // ----------------------------------------------


g.addEdge('Bengaluru', 'Mysuru')
 g.addEdge('Bengaluru', 'Delhi')

 console.log(g.adjacencyList)

//  Output: 
//  {
//     Bengaluru: [ 'Mysuru', 'Delhi' ],
//     Mysuru: [ 'Bengaluru' ],
//     Delhi: [ 'Bengaluru' ]
//   }


