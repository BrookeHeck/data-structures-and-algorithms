'use strict';

const Stack = require('./../stack/index');
const Queue = require('./../queue/index');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  includes(key) {
    if(this.root.value === key) return true;
    const stack = new Stack();
    stack.push(this.root);
    while (!stack.isEmpty()) {
      let node = stack.pop();
      if (node.right) {
        if (node.right.value === key) return true;
        stack.push(node.right)
      };
      if (node.left) {
        if (node.left.value === key) return true;
        stack.push(node.left)
      };
    }
    return false;
  }

  add(value) {
    const newNode = new Node(value);
    const queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      if(node.value.left) queue.enqueue(node.value.left);
      else {
        node.value.left = newNode;
        break;
      };
      if(node.value.right) queue.enqueue(node.value.right);
      else {
        node.value.right = newNode;
        break;
      }
    }
  }
}

module.exports = BinaryTree;
