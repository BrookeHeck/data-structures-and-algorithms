# Binary Trees

## Challenge
The challenge was to implement a graph.

## Approach & Efficiency


## Graph Class
The only property in this class is the adjacencies property and it is a map. No values are passed to the constructor, and an empty map will be made when instantiated. Adding a vertex to the graph will create a vertex that is the key in the map. The associated value is initialized as an empty array. As you add edges to the key vertex, they will be added to their array.

- instantiation
```js
const graph = new Graph();
```
### Methods
### addVertex
  - adds a vertex to the map
  - a value should be passed to addVertex, it will be the value of the vertex
  - the vertex object that was created is returned
  ```js
  const newVertex = graph.addVertex(1);
  const vertexValue = newVertex.value;
  // new vertex.value will equal 1
  ```

### addEdge
- adds an edge between two vertices
- takes in the starting vertex and the ending vertex as parameters
- The parameters should be the vertex objects, not the values of the vertex
- There is a third optional parameter, which is the weight of the edge. If no weight is given as a parameter, then the weight will default to one
- an error will be thrown if the vertices don't exist in the adjacencies map
    ```js
    const startingVertex = graph.addVertex(2);
    const endingVertex = graph.addVertex(3);

    graph.addEdge(startingVertex, endingVertex);
    // weight of the edge will be 1
    ```
    ```js
    const startingVertex = graph.addVertex(4);
    const endingVertex = graph.addVertex(5);

    graph.addEdge(startingVertex, endingVertex, 11);
    // weight of the edge will be 11
    ```

### getNodes
- returns an array containing all the vertices in the adjacencies map
  ```js
  const nodes = graph.getNodes();
  // nodes will be an array that looks like this
  // each object in the array represents a vertex
  [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5}
  ]
  ```
### getNeighbors
- this will return an array of vertices that a specified vertex has edges to
- takes in a single vertex, the neighbors of this vertex will be returned
- the parameter should be the vertex object and not the 
  ```js
  const neighbors = graph.getNeighbors(startingVertex);

  // neighbors would be an array that looks like this
  // each object in the array is a vertex that has an edge pointing to it from the starting vertex
  [
    {value: 3}
  ]
  ```

### size
- returns the number vertices in the adjacencies map
  ```js
  const size = graph.size();
  // if we have added 5 vertices to the graph, this will return 5
  ```


