'use strict';

const firstRepeatedWord = require('./repeated-word');

describe('Test function that returns the first repeated word in a string', () => {
  test('Should return the first repeated ', () => {
    const str1 = 'Once upon a time, there was a brave princess who...';
    const str2 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    const word1 = firstRepeatedWord(str1);
    const word2 = firstRepeatedWord(str2);

    expect(word1).toEqual('a');
    expect(word2).toEqual('summer');
  });

  test('A string with no repeated words returns null', () => {
    const str1 = 'No repeated words here!';
    const word = firstRepeatedWord(str1);
    expect(word).toEqual(null);
  });

});

