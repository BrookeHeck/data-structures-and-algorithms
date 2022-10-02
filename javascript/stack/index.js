'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    if(this.isEmpty()) {
      this.top = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      newNode.next = temp;
    }
  }

  pop() {
    if(!this.isEmpty()) {
      let currentTop = this.top;
      this.top = currentTop.next;
      currentTop.next = null;
      return currentTop.value;
    } else {
      throw new Error('Stack is empty');
    }
  }

  peek() {
    if(!this.isEmpty()) return this.top.value;
    else throw new Error('Stack is empty');
  }

  isEmpty() {
    return !this.top;
  }

  toString() {
    let string = 'TOP -> ';
    let current = this.top;
    while(current !== null) {
      string = `${string}{ ${current.value} } -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }

}

module.exports = Stack;
