'use strict';

const HashTable = require('../hash-table/hash-table');

function firstRepeatedWord(str) {
  const wordArr = str.split(' ');

  const hashTable = new HashTable(1024);
  for(let word of wordArr) {
    const regex = /[!"#＄%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/gm;
    let noPunctuation = word.replace(regex, '');
    if(hashTable.has(noPunctuation)) return noPunctuation;
    else hashTable.set(noPunctuation, noPunctuation);
  }
  return null;
}

module.exports = firstRepeatedWord;
