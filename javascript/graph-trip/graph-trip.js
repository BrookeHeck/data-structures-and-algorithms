'use strict';

const graphTrip = (graph, cityArr) => {
  let index = 1;
  let cost = 0;
  let isPossible = true;

  let currentCity = graph.adjacencies.get(cityArr[0]);

  while(isPossible && index !== cityArr.length-1 ) {
    const neighbors = graph.getNeighbors(currentCity);
    let neighborFound = false;
    for(let neighbor of neighbors) {
      if(neighbor.vertex.value === cityArr[1]) {
        neighborFound = true;
        index++;
        currentCity = neighbor.vertex;
        cost += neighbor.weight;
      }
    }
    if(!neighborFound) isPossible = false;
  }

  if(!isPossible) return null;
  else return cost;
};

module.exports = graphTrip;

