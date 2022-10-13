'use strict';

const KaryTree = require("./KaryTree");

const karyTree = new KaryTree(3);

describe('Test adding to k-arry tree', () => {
  test('Add value to root of tree', () => {
    karyTree.add(5);
    expect(karyTree.root.value).toEqual(5);
  });

  test('Add k children to the root', () => {
    karyTree.add(1);
    karyTree.add(2);
    karyTree.add(3);
    expect(karyTree.root.children[0].value).toEqual(1);
    expect(karyTree.root.children[1].value).toEqual(2);
    expect(karyTree.root.children[2].value).toEqual(3);
  });

  test('Add k children to the roots children', () => {
    karyTree.add(4);
    karyTree.add(5);
    karyTree.add(6);
    expect(karyTree.root.children[0].children[0].value).toEqual(4);
    expect(karyTree.root.children[0].children[1].value).toEqual(5);
    expect(karyTree.root.children[0].children[2].value).toEqual(6);

    karyTree.add(7);
    karyTree.add(8);
    karyTree.add(9);
    expect(karyTree.root.children[1].children[0].value).toEqual(7);
    expect(karyTree.root.children[1].children[1].value).toEqual(8);
    expect(karyTree.root.children[1].children[2].value).toEqual(9);
  });


});
