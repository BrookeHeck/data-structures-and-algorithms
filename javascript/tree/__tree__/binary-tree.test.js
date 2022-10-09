'use strict';

const BinaryTree = require('./../BinaryTree');
let binaryTree = null;

describe('Test binary tree', () => {
  test('Can successfully instantiate a tree with a single root node', () => {
    binaryTree = new BinaryTree(1);
    expect(binaryTree.root.value).toEqual(1);
    expect(binaryTree.root.left).toEqual(null);
    expect(binaryTree.root.right).toEqual(null);

  });
  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    binaryTree.add(2);
    binaryTree.add(3);
    expect(binaryTree.root.left.value).toEqual(2);
    expect(binaryTree.root.right.value).toEqual(3);

  });
  // test('Can successfully return a collection from a preorder traversal', () => {
    
  // });
  // test('Can successfully return a collection from an inorder traversal', () => {

  // });
  // test('Can successfully return a collection from a postorder traversal', () => {

  // });
  test('Returns false for the contains method, given a non-existing node value', () => {
    const exists = binaryTree.contains(4);
    expect(exists).not.toBeTruthy();

  });
  test('Returns true for the contains method, given an existing node value', () => {
    const exists = binaryTree.contains(3);
    expect(exists).toBeTruthy();
  });
});
