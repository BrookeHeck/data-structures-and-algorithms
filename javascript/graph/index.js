'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencies = new Map(); // this is a built in HashTable
  }

  /**
   * Adds a new Vertex to the Graph Adjacency list
   * @param {any} value
   */
  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencies.set(vertex, []);
    return vertex;
  }

  /**
   * Adds a new edge between vertices
   * @param {Vertex} startVertex
   * @param {Vertex} edgeVertex
   */
  addEdge(startVertex, endVertex, weight = 1) {
    if (this.adjacencies.has(startVertex) && this.adjacencies.has(endVertex)) {
      let edges = this.adjacencies.get(startVertex); // []
      edges.push(new Edge(endVertex, weight));
    } else {
      throw new Error('Invalid input Vertex');
    }
  }

  /**
   * Returns a list of all neighboring Vertices of the input Vertex
   * @param {Vertex} Vertex
   */
  getNeighbors(vertex) {
    return this.adjacencies.get(vertex);
  }

  /**
   * returns the degree, which is the number of edges
   * @param {Vertex} Vertex
   */
  getDegree(vertex) {
    return this.adjacencies.get(vertex).length;
  }

  /**
   * Return all Nodes that are listed in the adjacency list
   */
  getNodes() {
    const iterator = this.adjacencies.keys();
    const nodeArr = [];
    let currentKey = iterator.next();
    while(!currentKey.done) {
      nodeArr.push(currentKey.value);
      currentKey = iterator.next();
    }
    return nodeArr;
  }

  /**
   * Returns the total number of nodes in the graph.
   */
  size() {
    const iterator = this.adjacencies.keys();
    let size = 0;
    let currentKey = iterator.next();
    while(!currentKey.done) {
      size++;
      currentKey = iterator.next();
    }
    return size;
  }

  depthFirst(startVertex) {
    const visited = [];
    const stack = [];
    stack.push(startVertex);
    visited.push(startVertex.value);

    while(stack.length !== 0) {
      let currentVertex = stack.pop();
      const neighbors = this.getNeighbors(currentVertex);
      for(let neighbor of neighbors) {
        if(!visited.includes(neighbor.vertex.value)) {
          stack.push(neighbor.vertex);
          visited.push(neighbor.vertex.value);
        }
      }
    }
    return visited;
  }
}

module.exports = Graph;
