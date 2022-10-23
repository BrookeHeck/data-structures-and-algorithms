'use strict';

const selectionSort = require('./selection-sort');

describe('Test selection sort', () => {
  test('Test if array is sorted from lowest to highest', () => {
    const testArr = [8, 4, 23, 42, 16, 15];
    selectionSort(testArr);

    const testArr2 = [20, 18, 12, 8, 5, -2];
    selectionSort(testArr2);

    expect(testArr).toEqual([4, 8, 15, 16, 23, 42]);
    expect(testArr2).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('Test an array with only a few unique integers', () => {
    const testArr = [5, 12, 7, 5, 5, 7];
    selectionSort(testArr);
    expect(testArr).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('Test an array that is empty', () => {
    const testArr = [];
    selectionSort(testArr);
    expect(testArr).toEqual([]);
  });

  test('Test an array that is already sorted', () => {
    const testArr = [1, 2, 3, 4, 5];
    selectionSort(testArr);
    expect(testArr).toEqual([1, 2, 3, 4, 5]);
  });
});

