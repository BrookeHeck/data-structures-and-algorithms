'use strict';

const Queue = require('./../queue/index');

function graphBreadthFirst(graph, root) {
  const queue = new Queue();
  const visited = [];
  queue.enqueue(root);
  visited.push(root.value);
  while(!queue.isEmpty()) {
    const vertex = queue.dequeue().value;
    const neighbors = graph.getNeighbors(vertex);
    for(let neighbor of neighbors) {
      if(!visited.includes(neighbor.vertex.value)) {
        queue.enqueue(neighbor.vertex);
        visited.push(neighbor.vertex.value);
      }
    }
  }
  return visited;
}

module.exports = graphBreadthFirst;
