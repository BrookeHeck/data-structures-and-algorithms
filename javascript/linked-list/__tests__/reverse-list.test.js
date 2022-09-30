'use strict';

const SinglyLinkedList = require('./../index');
const ll = new SinglyLinkedList();

ll.insert(1);
ll.insert(2);
ll.insert(3);

describe('Test reverse list', () => {
  test('Should reverse the nodes in the linked list', () => {
    ll.reverse();
    expect(ll.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
});
