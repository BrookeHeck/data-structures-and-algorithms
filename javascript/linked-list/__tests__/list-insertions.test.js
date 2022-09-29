'use strict';

// Require our linked list implementation
const SinglyLinkedList = require('./../index');
const ll = new SinglyLinkedList();
ll.insert(4);
ll.insert(3);
ll.insert(1);

describe('Test insert before', () => {
  test('Should insert a node with a value of 2 before 3', () => {
    ll.insertBefore(3, 2);
    expect(ll.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL');
  });

  test('Should insert a node at the head of the list', () => {
    ll.insertBefore(1, 0);
    expect(ll.toString()).toEqual('{ 0 } -> { 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL');
  });

  test('Should throw an error if the search value is not in the list', () => {
    expect(() => ll.insertBefore(10, 10)).toThrow('Node not found');
  });

});

describe('Test insert after', () => {
  test('Should insert a 5 after 2', () => {
    ll.insertAfter(2, 5);
    expect(ll.toString()).toEqual('{ 0 } -> { 1 } -> { 2 } -> { 5 } -> { 3 } -> { 4 } -> NULL');
  });

  test('Should throw an error if the search value is not in the list', () => {
    expect(() => ll.insertAfter(10, 10)).toThrow('Node not found');
  });

});

describe('Test append', () => {
  test('Should insert a node with value of 6 at the end of the list', () => {
    ll.append(6);
    expect(ll.toString()).toEqual('{ 0 } -> { 1 } -> { 2 } -> { 5 } -> { 3 } -> { 4 } -> { 6 } -> NULL');
  });
});
