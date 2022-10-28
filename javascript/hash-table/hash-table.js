'use strict';

const LinkedList = require('./../linked-list');

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // return a hash value for the provided key
  hash(key) {
    let sum = 0;
    if (typeof key === 'string') {
      for (let i in key) {
        sum += key.charCodeAt(i);
      }
      return (sum * 599) % this.size;
    } else {
      return null;
    }
  }

  // places a value into our Hash Table by hashing our key, and setting our value into that BUcket of the table
  set(key, value) {
    const hash = this.hash(key);
    if (hash) {
      let list = this.has(key);
      if (!list) list = new LinkedList();
      list.add(`${key}:${value}`);
      this.table[hash] = list;
    }
  }

  // returns the value stored in the bucket associated with the key parameter
  get(key) {

  }

  // returns a collection of Keys
  has(key) {
    const hash = this.hash(key);
    if(hash) return this.table[hash];
    else return null;
  }
}

module.export = HashTable;

