'use strict';

const Queue = require('./../queue/index');
const HashTable = require('./../hash-table/hash-table');

function treeIntersection(tree1, tree2) {
  const hashTable = new HashTable(1024);
  const intersectionArr = [];

  [tree1, tree2].forEach(tree => {
    const queue = new Queue;
    queue.enqueue(tree.root);
    while(!queue.isEmpty()) {
      const node = queue.dequeue().value;
      const value = String(node.value);

      if(hashTable.has(value)) intersectionArr.push(value);
      else hashTable.set(value, value);

      if(node.left) queue.enqueue(node.left);
      if(node.right) queue.enqueue(node.right);
    }
  });
  return intersectionArr;
}

module.exports = treeIntersection;
