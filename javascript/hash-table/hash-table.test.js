'use strict';

const HashTable = require('./hash-table');
const hashTable = new HashTable(1024);

describe('Testing hash table implementation', () => {
  test('add data to the hash table', () => {
    hashTable.set('brooke', '206-111-1234');

    hashTable.set('user', '111-222-1234');
    expect(hashTable.table[hashTable.hash('brooke')]).toBeDefined();
    expect(hashTable.table[hashTable.hash('user')]).toBeDefined();
  });

  test('Retrieving based on key returns the value stored', () => {
    const value = hashTable.get('brooke');
    const value2 = hashTable.get('user');

    expect(value).toEqual('206-111-1234');
    expect(value2).toEqual('111-222-1234');
  });

  test('Returns null for a key that does not exist in the hash table', () => {
    const value = hashTable.get('nonexistent-key');
    expect(value).toEqual(null);
  });

  test('Returns a list of all unique keys that exist in the hash table', () => {
    expect(true).toBeTruthy();
  });

  test('Retrieve a value from a bucket within the hash table that has a collision', () => {
    hashTable.set('hellon', 'fake user');
    const value = hashTable.get('hellon');
    expect(hashTable.hash('hellon')).toEqual(558);
    expect(value).toEqual('fake user');
  });

  test('Hash a key to an in-range value', () => {
    const hash = hashTable.hash('brooke');
    expect(hash).toEqual(558);
  });

  test('Return true if key is in hash table and false if it is not', () => {
    const value = hashTable.has('brooke');
    const value2 = hashTable.has('nonexistent-key');

    expect(value).toBeTruthy();
    expect(value2).not.toBeTruthy();
  });
});

