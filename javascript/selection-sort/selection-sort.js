'use strict';

function selectionSort(arr) {
  const n = arr.length;
  for(let i = 0; i < n; i++) {
    let min = i;
    for(let j = (i + 1); j <= n; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
}

module.exports = selectionSort;
