'use strict';

const graphTrip = require('./graph-trip');
const graph = require('./test-graph');

describe('Testing the graph business trip function', () => {
  test('Should return the cost of the trip from Metroville to Pandora', () => {
    const cost = graphTrip(graph, ['Metroville', 'Pandora']);
    expect(cost).toEqual(82);
  });

  test('Should return the cost of the trip from Arendelle to Naboo', () => {
    const cost = graphTrip(graph, ['Arendelle', 'Monstropolis', 'Naboo']);
    expect(cost).toEqual(115);
  });

  test('Should return null for trip from Naboo to Pandora', () => {
    const cost = graphTrip(graph, ['Naboo', 'Pandora']);
    expect(cost).toEqual(null);
  });

  test('Should return null for trip from Narnia to Naboo', () => {
    const cost = graphTrip(graph, ['Narnia', 'Arendelle', 'Naboo']);
    expect(cost).toEqual(null);
  });
});
