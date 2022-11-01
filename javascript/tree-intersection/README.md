# Challenge Summary
The challenge was to make a function that takes in two binary trees and return an array of values that appear in both trees.

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
My approach was to do a breadth first search through each of the trees. For every node through the traversal, I evaluated the node value. If the value was already in the hash table I created, I added it to my intersection array. If it wasn't, I added the values to the hash table. The efficiency of this algorithm for time is O(n). This is because it is dependent on the size of the inputs, the two trees.

## Solution
- just import the function and pass two binary trees as the input
- the function will return an array of values that are in both trees
```js
const treeIntersection = ('tree-intersection');

const tree1 = new BinaryTree(1);
const tree2 = new BinaryTree(2);
// add values to your trees

const intersectionArray = treeIntersection(tree1, tree2)
```