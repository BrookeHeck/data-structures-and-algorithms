'use strict';

// Require our linked list implementation
const SinglyLinkedList = require('./../index');
const ll = new SinglyLinkedList();
ll.insert(4);
ll.insert(3);
ll.insert(2);
ll.insert(1);

describe('Test kth-from-end', () => {
  test('Should return a 3, which is second from end', () => {
    let value = ll.kthFromEnd(2);
    expect(value).toEqual(3);
  });
});
