'use strict';

function mergeSort(arr) {
  const n = arr.length;

  if(n > 1) {
    const mid = Math.floor(n / 2);
    const left = [];
    for(let i = 0; i < mid; i++) {
      left[i] = arr[i];
    }
    const right = [];
    for(let i = 0; i < mid + 1; i++) {
      if(arr[mid + i]) right[i] = arr[mid + i];
    }

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0; // left index
  let j = 0; // right index
  let k = 0; // arr index

  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while(i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while(j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

module.exports = mergeSort;
