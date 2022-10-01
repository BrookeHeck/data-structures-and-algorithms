'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {

  }

  dequeue(value) {

  }

  peek() {

  }

  isEmpty() {
    return this.front === null & this.rear === null;
  }

  toString() {

  }

}

module.exports = Queue;
