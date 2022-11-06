'use strict';

const Graph = require('./index');

describe('Graph', () => {

  test('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    const vertex = graph.addVertex('a');

    expect(graph.getNodes()[0].value).toEqual(vertex);
  });

  test('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    const startVertex = graph.addVertex(1);
    const endVertex = graph.addVertex(2);
    graph.addEdge(startVertex, endVertex);

    const neighbors = graph.getNeighbors(startVertex);
    expect(neighbors[0].vertex.value).toEqual(2);
    expect(neighbors[0].weight).toEqual(1);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    

  });

  test('All appropriate neighbors can be retrieved from the graph', () => {

  });

  test('Neighbors are returned with the weight between nodes included', () => {

  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {

  });

  test('A graph with only one node and edge can be properly returned', () => {

  });
});
