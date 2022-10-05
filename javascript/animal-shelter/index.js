'use strict';

const Stack = require('./../stack');

class AnimalShelter {
  constructor() {
    this.animals = new Stack();
    this.temp = new Stack();
  }

  enqueue(animal) {
    while(!this.animals.isEmpty()) {
      this.temp.push(this.animals.pop());
    }
    this.animals.push(animal);
    while(!this.temp.isEmpty()) {
      this.animals.push(this.temp.pop());
    }
  }

  dequeue(preference) {
    if(!preference) return this.animals.pop();
    let current = this.animals.peek();
    let returnValue = null;
    while(current) {
      if(current === preference) {
        returnValue = this.animals.pop();
        break;
      } else {
        this.temp.push(this.animals.pop());
        current = this.animals.peek();
      }
    }

    while(!this.temp.isEmpty()) {
      this.animals.push(this.temp.pop());
    }
    return returnValue;
  }
}

module.exports = AnimalShelter;
