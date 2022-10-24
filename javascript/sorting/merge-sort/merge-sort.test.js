'use strict';

const mergeSort = require('./merge-sort');

describe('Testing merge sort algorithm', () => {
  test('Test an unsorted array', () => {
    const testArr = [8, 4, 23, 42, 16, 15];
    mergeSort(testArr);
    expect(testArr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('Testing reverse-sort', () => {
    const testArr = [20, 18, 12, 8, 5, -2];
    mergeSort(testArr);
    expect(testArr).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('Testing few uniques', () => {
    const testArr = [5, 12, 7, 5, 5, 7];
    mergeSort(testArr);
    expect(testArr).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('Testing already sorted', () => {
    const testArr = [2, 3, 5, 7, 11, 13];
    mergeSort(testArr);
    expect(testArr).toEqual([2, 3, 5, 7, 11, 13]);
  });

  test('Testing an empty array', () => {
    const testArr = [];
    mergeSort(testArr);
    expect(testArr).toEqual([]);
  });
});

