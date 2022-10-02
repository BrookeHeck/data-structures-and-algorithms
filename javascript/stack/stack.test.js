'use strict';

const Stack = require('./index');

const stack = new Stack();

describe('Test push and pop', () => {
  test('Should insert a node at the head', () => {
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });

  test('Should be able to add multiple nodes to the stack', () => {
    stack.push(2);
    stack.push(3);
    stack.push(4);
    let str = stack.toString();
    expect(str).toEqual('TOP -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> NULL');
  });

  test('Should pop off the top value', () => {
    const top = stack.pop();
    expect(top).toEqual(4);
    expect(stack.top.value).toEqual(3);
  });
});

describe('Test peek and isEmpty', () => {
  test('Should return the top value', () => {
    const value = stack.peek();
    expect(value).toEqual(3);
  });

  test('Should return false when stack is not empty', () => {
    const isEmpty = stack.isEmpty();
    expect(isEmpty).not.toBeTruthy();
  });

  const empty = new Stack();
  // test('Should throw an error when peek is called on an empty stack', () => {
  //   expect(() => empty.peek()).toThrow('Stack is empty');
  // });

  test('Should return true when isEmpty is called on an empty stack', () => {
    const isEmpty = empty.isEmpty();
    expect(isEmpty).toBeTruthy();
  });

});
