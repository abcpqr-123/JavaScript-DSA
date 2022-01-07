

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
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    //------------------------------------------------------------
    
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList; // This semicolan after the line is very important 
        // If u did not add that semicolan u will get an error     

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
                console.log(adjacencyList[vertex])
        })(start)

        return result;
    }
}
    //------------------------------------------------------------
let g = new Graph() 
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')


g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

    //     A
    //   /   \
    //  B     C 
    //  |     | 
    //  D-----E 
    //   \   /
    //     F

g.depthFirstRecursive('A')
// Output:
// [ 'B', 'C' ]

// //------------------------------------------------------------------------------------------
// //------------------------------------------------------------------------------------------

// New, instead of printing we want loop over: 



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
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    //------------------------------------------------------------

       depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList; // This semicolan after the line is very important 
        // If u did not add that semicolan u will get an error 

    (function dfs(vertex){
        if(!vertex) return null
        visited[vertex] = true
        result.push(vertex)
                adjacencyList[vertex].forEach(neighbour => {
                     if (!visited[neighbour]){
                     return  dfs(neighbour)
                    }
                })
        })(start)

        return result
    }
}

    //------------------------------------------------------------
let g = new Graph() 
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')


g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

    //     A
    //   /   \
    //  B     C 
    //  |     | 
    //  D-----E 
    //   \   /
    //     F

console.log(g.depthFirstRecursive('A'))
// Output:
// [ 'A', 'B', 'D', 'E', 'C', 'F' ]







