'use strict';

const HashTable = require('./../hash-table/hash-table');

function firstRepeatedWord(str) {
  const wordArr = str.split(' ');

  const hashTable = new HashTable(1024);
  for(let word of wordArr) {
    if(hashTable.has(word)) return hashTable.get(word);
    else hashTable.set(word, word);
  }
  return null;
}

module.exports = firstRepeatedWord;
