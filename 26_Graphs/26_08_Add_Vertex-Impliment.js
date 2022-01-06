class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
}

var g = new Graph()
g.addVertex('Bengaluru')
g.addVertex('Mysuru')

console.log(g)

// Output:
// Graph { adjacencyList: { Bengaluru: [], Mysuru: [] } }