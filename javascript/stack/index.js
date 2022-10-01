'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    const newNode = new Node(value);
    if(this.isEmpty()) {
      this.head = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      newNode.next = temp;
    }
  }

  pop() {
    if(!this.isEmpty()) {
      let currentTop = this.head;
      this.head = this.head.next;
      currentTop.next = null;
    } else {
      throw new Error('Stack is empty');
    }
  }

  peek() {
    return !this.isEmpty() ? this.head.value : new Error('Stack is empty');
  }

  isEmpty() {
    return !this.head;
  }
}

module.exports = Stack;
