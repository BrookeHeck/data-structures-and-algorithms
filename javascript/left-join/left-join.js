'use strict';

function leftJoin(left, right) {
  const arr = [];
  iterateKeys(left, (key) => {
    let wordArr = [key, left.get(key)];
    arr.push(wordArr);
  });

  iterateKeys(right, (key) => {
    for(let wordArr of arr) {
      if(wordArr[0] === key) {
        wordArr.push(right.get(key));
        break;
      }
    }
  });
  return arr;
}

function iterateKeys(hashTable, callback) {
  const keys = hashTable.keys();
  for(let key of keys) {
    callback(key);
  }
}

module.exports = leftJoin;
