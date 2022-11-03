'use strict';

const HashTable = require('./../hash-table/hash-table');
const leftJoin = require('./left-join');

describe('Testing hashmap left join function', () => {
  test('Should make two hashmaps into one 2D array', () => {
    const left = new HashTable(1024);
    left.set('diligent', 'employed');
    left.set('fond', 'enamored');
    left.set('guide', 'usher');
    left.set('outfit', 'garb');
    left.set('wrath', 'anger');

    const right = new HashTable(1024);
    right.set('diligent', 'idle');
    right.set('fond', 'averse');
    right.set('guide', 'follow');
    right.set('flow', 'jam');
    right.set('wrath', 'delight');

    const arr = leftJoin(left, right);
    expect(arr).toEqual([
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['wrath', 'anger', 'delight']
    ]);
  });

  test('Should return only left if there are no matching keys in the right hash table', () => {
    const left = new HashTable(1024);
    left.set('diligent', 'employed');
    left.set('fond', 'enamored');
    left.set('guide', 'usher');
    left.set('outfit', 'garb');
    left.set('wrath', 'anger');

    const right = new HashTable(1024);
    right.set('not', 'idle');
    right.set('the', 'averse');
    right.set('same', 'follow');
    right.set('keys', 'jam');
    right.set('at all', 'delight');

    const arr = leftJoin(left, right);
    expect(arr).toEqual([
      ['diligent', 'employed'],
      ['outfit', 'garb'],
      ['fond', 'enamored'],
      ['guide', 'usher'],
      ['wrath', 'anger']
    ]);
  });

  test('Should not add the extra keys from the right table to the array', () => {
    const left = new HashTable(1024);
    left.set('diligent', 'employed');
    left.set('fond', 'enamored');
    left.set('guide', 'usher');
    left.set('wrath', 'anger');

    const right = new HashTable(1024);
    right.set('diligent', 'idle');
    right.set('fond', 'averse');
    right.set('guide', 'follow');
    right.set('wrath', 'delight');
    right.set('objective', 'subjective');
    right.set('correct', 'incorrect');


    const arr = leftJoin(left, right);
    expect(arr).toEqual([
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['wrath', 'anger', 'delight']
    ]);
  });
});
