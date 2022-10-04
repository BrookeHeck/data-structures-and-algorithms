'use strict';

const Stack = require('./../stack');

class StackQueuePseudo {
  constructor() {
    this.rear = new Stack();
    this.front = new Stack();
  }

  enqueue(value) {
    if(!this.front.top) this.front.push(value);
    else {
      const tempArr = [];
      while(this.rear.peek()) {
        tempArr.push(this.rear.pop());
      }
      this.rear.push(value);
      for(let i = tempArr.length - 1; i >= 0; i--) {
        this.rear.push(tempArr[i]);
      }
    }
  }

  dequeue() {
    const returnValue = this.front.peek() ? this.front.pop() : null;
    const newFront = this.rear.peek() ? this.rear.pop() : null;
    this.front.push(newFront);
    return returnValue;
  }
}

module.exports = StackQueuePseudo;

