'use strict';

const Graph = require('./../graph');

const graph = new Graph();

// add all vertices
const pandora = graph.addVertex('Pandora');
const arendelle = graph.addVertex('Arendelle');
const metroville = graph.addVertex('Metroville');
const monstropolis = graph.addVertex('Monstropolis');
const narnia = graph.addVertex('Narnia');
const naboo = graph.addVertex('Naboo');

// add all edges

// pandora, 2
graph.addEdge(pandora, arendelle, 150);
graph.addEdge(pandora, metroville, 82);


// arendelle, 3
graph.addEdge(arendelle, pandora, 150);
graph.addEdge(arendelle, metroville, 99);
graph.addEdge(arendelle, monstropolis, 42);

// metroville, 5
graph.addEdge(metroville, pandora, 82);
graph.addEdge(metroville, arendelle, 99);
graph.addEdge(metroville, monstropolis, 105);
graph.addEdge(metroville, naboo, 26);
graph.addEdge(metroville, narnia, 37);

// monstropolis, 3
graph.addEdge(monstropolis, arendelle, 42);
graph.addEdge(monstropolis, metroville, 105);
graph.addEdge(monstropolis, naboo, 73);

// narnia, 2
graph.addEdge(narnia, metroville, 37);
graph.addEdge(narnia, naboo, 250);

// naboo, 3
graph.addEdge(naboo, narnia, 250);
graph.addEdge(naboo, metroville, 26);
graph.addEdge(naboo, monstropolis, 73);


module.exports = graph;
