'use strict';

const SinglyLinkedList = require('./../index');

let llOne = new SinglyLinkedList();
llOne.insert('t');
llOne.insert('a');
llOne.insert('c');
llOne.insert('o');
llOne.insert('c');
llOne.insert('a');
llOne.insert('t');

describe('Palindrome Test', () => {
  test('Should return true', () => {
    let value = llOne.isPalindrome();
    expect(value).toBeTruthy();
  });
});

let llTwo = new SinglyLinkedList();
llTwo.insert('e');
llTwo.insert('s');
llTwo.insert('u');
llTwo.insert('o');
llTwo.insert('h');

describe('Palindrome Test', () => {
  test('Should return false', () => {
    let value = llTwo.isPalindrome();
    expect(value).not.toBeTruthy();
  });
});
