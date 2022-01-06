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
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
    }
}

var g = new Graph()
g.addVertex('Bengaluru')
g.addVertex('Mysuru')
g.addVertex('Delhi')
g.addEdge('Bengaluru', 'Mysuru')
g.addEdge('Bengaluru', 'Delhi')

//  console.log(g.adjacencyList)

// //  Output: 
// //  {
// //     Bengaluru: [ 'Mysuru', 'Delhi' ],
// //     Mysuru: [ 'Bengaluru' ],
// //     Delhi: [ 'Bengaluru' ]
// //   }


g.removeEdge('Bengaluru', 'Delhi')
 console.log(g.adjacencyList)

// Output:
// { Bengaluru: [ 'Mysuru' ], Mysuru: [ 'Bengaluru' ], Delhi: [] }

g.removeEdge('Bengaluru', 'Mysuru')
 console.log(g.adjacencyList)

// Output:
// { Bengaluru: [], Mysuru: [], Delhi: [] }