'use strict';

const Graph = require('./../graph/index');
const graphBreadthFirst = require('./index');

describe('Testing the graphBreadthFirst function', () => {
  test('Should return a list of vertex values in breadth first order', () => {
    const graph = new Graph();
    const pandora = graph.addVertex('Pandora');
    const arendelle = graph.addVertex('Arendelle');
    const metroville = graph.addVertex('Metroville');
    const monstroplolis = graph.addVertex('Monstroplolis');
    const narnia = graph.addVertex('Narnia');
    const naboo = graph.addVertex('Naboo');

    graph.addEdge(pandora, arendelle);
    graph.addEdge(arendelle, metroville);
    graph.addEdge(arendelle, monstroplolis);
    graph.addEdge(metroville, narnia);
    graph.addEdge(monstroplolis, naboo);
    graph.addEdge(metroville, naboo);
    graph.addEdge(narnia, naboo);

    const values = graphBreadthFirst(graph, pandora);
    expect(values).toEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstroplolis', 'Narnia', 'Naboo']);
  });
});

