'use strict';

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  append(value) {
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    let newNode = new Node(value);
    current.next = newNode;
  }

  includes(value) {
    let current = this.head;
    while(current !== null) {
      if(current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let str = '';
    while(current !== null) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    str += 'NULL';
    return str;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = SinglyLinkedList;

