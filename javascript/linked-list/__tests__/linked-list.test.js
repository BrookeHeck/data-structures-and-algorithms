'use strict';

// Require our linked list implementation
const SinglyLinkedList = require('./../index');
const ll = new SinglyLinkedList();

describe('Should successfully instantiate an empty linked list', () => {
  test('Should instantiate the singly linked list with that is null', () => {
    expect(ll).toBeTruthy();
    expect(ll.head).not.toBeTruthy();
  });
});

describe('Should properly add nodes into the linked list', () => {
  test('Should insert a node at the head of linked list with a value of one and the next node null', () => {
    ll.insert(1);
    expect(ll.head).toBeTruthy();
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next).not.toBeTruthy();
  });
  test('Should insert a node at the tail of linked list', () => {
    ll.append(2);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next).not.toBeTruthy();
  });
  test('Should add multiple nodes into the list', () => {
    ll.insert(0);
    ll.append(3);
    expect(ll.head.value).toEqual(0);
    expect(ll.head.next.next.next.value).toEqual(3);
  });
  test('The head property should properly point to the first node in the linked list', () => {
    expect(ll.head.value).toEqual(0);
  });
});

describe('Should return true when finding a value within the linked list that exists', () => {
  test('Should return true when the includes method is passed a value in the list', () => {
    let isFound = ll.includes(1);
    expect(isFound).toBeTruthy();
  });
  test('Should return false when the includes method is passed a value not in the list', () => {
    let isFound = ll.includes(4);
    expect(isFound).not.toBeTruthy();
  });
});

describe('Should properly return a collection of all the values that exist in the linked list', () => {
  test('Should return a formatted string showing all values in the linked list', () => {
    let str = ll.toString();
    expect(str).toEqual('{ 0 } -> { 1 } -> { 2 } -> { 3 } -> NULL');
  });
});
