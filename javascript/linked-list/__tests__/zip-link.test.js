'use strict';

const SinglyLinkedList = require('./../index');

let llOne = new SinglyLinkedList();
llOne.insert(3);
llOne.insert(1);

let llTwo = new SinglyLinkedList();
llTwo.insert(4);
llTwo.insert(9);
llTwo.insert(5);

describe('Test zip list', () => {
  test('Should zip two lists', () => {
    llOne.zipLists(llTwo);
    expect(llOne.toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> NULL');
  });
});
