'use strict';

const StackQueuePseudo = require('./../index');

const stackQueue = new StackQueuePseudo();

describe('Test enqueue for stack-queue', () => {
  test('Should add a node to the front of the stack-queue', () => {
    stackQueue.enqueue(20);
    expect(stackQueue.front.top.value).toEqual(20);
  });

  test('Should be able to add multiple nodes to the stack-queue', () => {
    stackQueue.enqueue(15);
    stackQueue.enqueue(10);
    expect(stackQueue.rear.top.value).toEqual(15);
    expect(stackQueue.rear.top.next.value).toEqual(10);
  });
});

describe('Test dequeue for stack-queue', () => {
  test('Should remove a node from the top stack', () => {
    const poppedValue = stackQueue.dequeue();
    expect(poppedValue).toEqual(20);
  });

  test('Returns null if dequeue is call on empty stack-queue', () => {
    stackQueue.dequeue();
    stackQueue.dequeue();
    const poppedValue = stackQueue.dequeue();
    expect(poppedValue).toEqual(null);
  });
});

