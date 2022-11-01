'use strict';

const Queue = require('./../queue/index');
const HashTable = require('./../hash-table/hash-table');

function treeIntersection(tree1, tree2) {
  const hashTable = new HashTable();
  [tree1, tree2].forEach(tree => {
    const queue = new Queue;
    queue.enqueue(tree.root);
    while(!queue.isEmpty()) {
      const node = queue.dequeue();
      hashTable.set(node.value, node.value);
      if(node.left) queue.enqueue(node.left);
      if(node.right) queue.enqueue(node.right);
    }
  });
  return hashTable.keys();
}

module.exports = treeIntersection;
