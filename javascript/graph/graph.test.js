'use strict';

const Graph = require('./index');

describe('Graph', () => {

  test('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    const vertex = graph.addVertex('a');

    expect(graph.getNodes()[0]).toEqual(vertex);
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
    const graph = new Graph();
    const vertex1 = graph.addVertex(1);
    const vertex2 = graph.addVertex(2);
    const vertex3 = graph.addVertex(3);

    const vertices = graph.getNodes();
    expect(vertices[0]).toEqual(vertex1);
    expect(vertices[1]).toEqual(vertex2);
    expect(vertices[2]).toEqual(vertex3);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();
    const vertex1 = graph.addVertex(1);
    const vertex2 = graph.addVertex(2);
    const vertex3 = graph.addVertex(3);
    const vertex4 = graph.addVertex(4);

    graph.addEdge(vertex1, vertex2);
    graph.addEdge(vertex1, vertex3);
    graph.addEdge(vertex1, vertex4);

    const neighbors = graph.getNeighbors(vertex1);
    expect(neighbors[0].vertex.value).toEqual(2);
    expect(neighbors[1].vertex.value).toEqual(3);
    expect(neighbors[2].vertex.value).toEqual(4);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    const graph = new Graph();
    const vertex1 = graph.addVertex(1);
    const vertex2 = graph.addVertex(2);
    const vertex3 = graph.addVertex(3);
    const vertex4 = graph.addVertex(4);

    graph.addEdge(vertex1, vertex2, 4);
    graph.addEdge(vertex1, vertex3, 10);
    graph.addEdge(vertex1, vertex4, 7);

    const neighbors = graph.getNeighbors(vertex1);
    expect(neighbors[0].weight).toEqual(4);
    expect(neighbors[1].weight).toEqual(10);
    expect(neighbors[2].weight).toEqual(7);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);

    expect(graph.size()).toEqual(4);

  });

  test('A graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();
    const vertex = graph.addVertex(1);
    graph.addEdge(vertex, vertex);

    const vertices = graph.getNodes();
    expect(vertices[0].value).toEqual(1);

    const neighbors = graph.getNeighbors(vertices[0]);
    expect(neighbors[0].vertex).toEqual(vertex);
  });
});
