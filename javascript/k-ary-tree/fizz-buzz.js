'use strict';

const Queue = require('./../queue');

const KaryTree = require('./KaryTree');
const karyTree = new KaryTree(3);

karyTree.add(3);
karyTree.add(5);
karyTree.add(15);
karyTree.add(7);
karyTree.add(12);
karyTree.add(20);
karyTree.add(16);
karyTree.add(17);
karyTree.add(24);
karyTree.add(25);
karyTree.add(19);
karyTree.add(30);

function fizzBuzz(tree) {
  const queue = new Queue();
  queue.enqueue(tree.root);
  while(!queue.isEmpty()) {
    const node = queue.dequeue().value;
    for(let i = 0; i < tree.k; i++) {
      if(node.children[i]) {
        queue.enqueue(node.children[i]);
        if(node.children[i].value % 3 === 0 && node.children[i].value % 5 === 0) node.children[i].value = 'FIZZ BUZZ';
        else if(node.children[i].value % 3 === 0) node.children[i].value = 'FIZZ';
        else if(node.children[i].value % 5 === 0) node.children[i].value = 'BUZZ';
        console.log(node.children[i].value);
      }
    }
  }
}
fizzBuzz(karyTree);

module.exports = fizzBuzz;
