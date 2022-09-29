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

  insertBefore(searchValue, newValue) {
    let current = this.head;
    if(current.value === searchValue) this.insert(newValue);
    else {
      while(current.next !== null && current.next.value !== searchValue) {
        current = current.next;
      }
      if(current.next === null) throw new Error('Node not found');
      else {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
      }
    }
  }

  insertAfter(searchValue, newValue) {
    let current = this.head;
    while(current.next !== null && current.value !== searchValue) {
      current = current.next;
    }
    if(current.next === null) throw new Error('Node not found');
    else {
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
    }
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

