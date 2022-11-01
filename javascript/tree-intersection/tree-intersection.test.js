'use strict';

const BinaryTree = require('./../tree/BinaryTree');
const treeIntersection = require('./tree-intersection');

describe('Testing tree intersection', () => {
  test('Should return an array of values that are in both trees', () => {
    const tree1 = new BinaryTree(150);
    tree1.add(100);
    tree1.add(250);
    tree1.add(75);
    tree1.add(160);
    tree1.add(200);
    tree1.add(350);
    tree1.add(125);
    tree1.add(175);
    tree1.add(300);
    tree1.add(500);

    const tree2 = new BinaryTree(42);
    tree2.add(100);
    tree2.add(600);
    tree2.add(15);
    tree2.add(160);
    tree2.add(200);
    tree2.add(350);
    tree2.add(125);
    tree2.add(175);
    tree2.add(4);
    tree2.add(500);

    const valueArr = treeIntersection(tree1, tree2);
    expect(valueArr).toEqual(['100', '160', '200', '350', '125', '175', '500']);
  });
});
