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
      let nodeAdded = false;
      while(!queue.isEmpty() && !nodeAdded) {
        const node = queue.dequeue().value;
        for(let index in node.children) {
          if(node.children.length < this.k) {
            node.children[node.children.length] = newNode;
          } else {
            queue.enqueue(node.children[index]);
          }
        }
      }
    }
  }
}

module.exports = KaryTree;
