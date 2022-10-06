'use strict';

const Stack = require('./../stack');

class StackQueueBracket {
  constructor() {
    this.stack = new Stack();
    this.temp = new Stack();
  }

  isOpening(char) {
    return char === '(' || char === '{' || char === '['; 
  }

  isClosing(char) {
    return char === ')' || char === '}' || char === ']';
  }

  isCorrectClosing(opening, closing) {
    switch(opening) {
    case '(':
      return closing === ')';
    case '{':
      return closing === '}';
    case '[':
      return closing === ']';
    default: return false;
    }
  }

  bracketsEqual(str) {
    for(let char of str) {
      if(this.isOpening(char)) this.stack.push(char);
      if(this.isClosing(char)) {
        let foundMatch = false;
        while(!this.stack.isEmpty()) {
          let opening = this.stack.pop();
          if(this.isCorrectClosing(opening, char)) {
            foundMatch = true;
            break;
          } else {
            this.temp.push(opening);
          }
        }
        if(!foundMatch) {return false;}
        else {
          while(!this.temp.isEmpty()) {
            this.stack.push(this.temp.pop());
          }
        }
      }
    }
    return this.stack.isEmpty();
  }
}

module.exports = StackQueueBracket;
