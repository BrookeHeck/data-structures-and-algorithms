'use strict';

const graphTrip = (graph, cityArr) => {
  let index = 1;
  let cost = 0;
  let isPossible = true;

  const nodes = graph.getNodes();
  let currentCity = nodes.find(vertex => vertex.value === cityArr[0]);

  while(isPossible && index < cityArr.length ) {
    const neighbors = graph.getNeighbors(currentCity);
    let neighborFound = false;
    for(let neighbor of neighbors) {
      if(neighbor.vertex.value === cityArr[index]) {
        neighborFound = true;
        index++;
        currentCity = neighbor.vertex;
        cost += neighbor.weight;
        break;
      }
    }
    if(!neighborFound) isPossible = false;
  }

  if(!isPossible) return null;
  else return cost;
};

module.exports = graphTrip;

