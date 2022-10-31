'use strict';

const HashTable = require('../hash-table/hash-table');

function firstRepeatedWord(str) {
  const wordArr = str.split(' ');

  const hashTable = new HashTable(1024);
  for(let word of wordArr) {
    const regex = /[!"#＄%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/gm;
    let noPunctuation = word.replace(regex, '').toLowerCase();
    if(hashTable.has(noPunctuation)) {
      // this is in case there is a collision
      // make sure the word is actually in the hashmap before returning it
      const value = hashTable.get(noPunctuation);
      if(value) return value;
    }
    else hashTable.set(noPunctuation, noPunctuation);
  }
  return null;
}

module.exports = firstRepeatedWord;
