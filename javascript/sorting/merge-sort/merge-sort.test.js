'use strict';

const mergeSort = require('./merge-sort');

describe('Testing merge sort algorithm', () => {
  test('Test an unsorted array', () => {
    const testArr = [8, 4, 23, 42, 16, 15];
    mergeSort(testArr);
    expect(testArr).toEqual([4, 8, 15, 16, 23, 42]);
  });
});

