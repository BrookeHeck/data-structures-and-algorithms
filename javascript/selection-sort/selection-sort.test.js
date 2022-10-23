'use strict';

const selectionSort = require('./selection-sort');

describe('Test selection sort', () => {
  test('Test if array is sorted from lowest to highest', () => {
    const testArr = [8, 4, 23, 42, 16, 15];
    selectionSort(testArr);

    const testArr2 = [54, 10, 2, 1, 0, 100];
    selectionSort(testArr2);

    expect(testArr).toEqual([4, 8, 15, 16, 23, 42]);
    expect(testArr2).toEqual([0, 1, 2, 10, 54, 100]);
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

