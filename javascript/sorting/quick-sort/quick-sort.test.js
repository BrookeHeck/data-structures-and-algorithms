'use strict';

const quickSort = require('./quick-sort');

describe('Test quick sort', () => {
  test('Sort and unordered array', () => {
    const testArr = [8, 4, 23, 42, 16, 15];
    quickSort(testArr, 0, testArr.length - 1);
    expect(testArr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('Sort a reverse-sorted array', () => {
    const testArr = [20, 18, 12, 8, 5, -2];
    quickSort(testArr, 0, testArr.length - 1);
    expect(testArr).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('Sort a few uniques array', () => {
    const testArr = [5, 12, 7, 5, 5, 7];
    quickSort(testArr, 0, testArr.length - 1);
    expect(testArr).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('Sort a nearly sorted array', () => {
    const testArr = [2, 3, 5, 7, 13, 11];
    quickSort(testArr, 0, testArr.length - 1);
    expect(testArr).toEqual([2, 3, 5, 7, 11, 13]);
  });
});

