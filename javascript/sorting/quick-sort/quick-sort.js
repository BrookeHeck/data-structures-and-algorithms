'use strict';

function quickSort(arr, low, high) {
  if(low < high) {
    let partitionIndex = partition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for(let j = low; j <= high; j++) {
    if(arr[j] < pivot) {
      i++;
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  const temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}

module.exports = quickSort;

