'use strict';

const Queue = require('./../queue');

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if(!this.root) this.root = newNode;
    else {
      const queue = new Queue();
      queue.enqueue(this.root);
      let isAdded = false;
      while(!queue.isEmpty() && !isAdded) {
        const node = queue.dequeue().value;
        for(let i = 0; i < this.k; i++) {
          if(!node.children[i]) {
            node.children[i] = newNode;
            isAdded = true;
            break;
          }
          if(node.children[i]) queue.enqueue(node.children[i]);
        }
      }
    }
  }
}

module.exports = KaryTree;
