'use strict';

const StackQueueBracket = require('./index');
const bracketChecker = new StackQueueBracket();

describe('Test Stack Queue Bracket Checker', () => {
  test('Should return true when each opening bracket has a closing', () => {
    const testOne = bracketChecker.bracketsEqual('{}(){}');
    const testTwo = bracketChecker.bracketsEqual('()[[Extra Characters]]');
    const testThree = bracketChecker.bracketsEqual('{}{Code}[Fellows](())');

    expect(testOne).toBeTruthy();
    expect(testTwo).toBeTruthy();
    expect(testThree).toBeTruthy();
  });

  test('Should return false when an opening bracket does not have a closing bracket', () => {
    const testOne = bracketChecker.bracketsEqual('[({}]');
    const testTwo = bracketChecker.bracketsEqual('(](');
    const testThree = bracketChecker.bracketsEqual('{(})');

    expect(testOne).not.toBeTruthy();
    expect(testTwo).not.toBeTruthy();
    expect(testThree).not.toBeTruthy();
  });
});
