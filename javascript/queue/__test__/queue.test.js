'use strict';

const Queue = require('./../index');

const queue = new Queue();

describe('Test isEmpty', () => {
  test('Should return true when nothing has been added to queue', () => {
    let empty = queue.isEmpty();
    expect(empty).toBeTruthy();
  });
});

describe('Test enqueue and dequeue', () => {
  test('Should add value to front when queue is empty', () => {
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });

  test('Peek should give the front value', () => {
    const value = queue.peek();
    expect(value).toEqual(1);
  });

  test('Should add a value to the end when rear is null', () => {
    queue.enqueue(2);
    expect(queue.rear.value).toEqual(2);
    expect(queue.toString()).toEqual('FRONT -> { 1 } -> { 2 } -> REAR');
  });

  test('Should be able to add multiple nodes', () => {
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.toString()).toEqual('FRONT -> { 1 } -> { 2 } -> { 3 } -> { 4 } -> REAR');
  });
});

describe('Test dequeue', () => {
  test('Should remove a node from the front', () => {
    const value = queue.dequeue();
    expect(value.value).toEqual(1);
    expect(queue.front.value).toEqual(2);
    expect(queue.toString()).toEqual('FRONT -> { 2 } -> { 3 } -> { 4 } -> REAR');
  });
});
