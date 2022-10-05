'use strict';

const AnimalShelter = require('./../index');
const animalShelter = new AnimalShelter();

describe('Should be able to add animals to the animal shelter', () => {
  test('An animal should be added to the bottom of the stack', () => {
    animalShelter.enqueue('cat');
    expect(animalShelter.animals.top.value).toEqual('cat');
  });

  test('New animals should be at the bottom, old animals should move up', () => {
    animalShelter.enqueue('dog');
    expect(animalShelter.animals.top.value).toEqual('cat');
    expect(animalShelter.animals.top.next.value).toEqual('dog');
  });
});

describe('Should be able to remove animals from the list by preference', () => {
  test('Top most animal that matches preference is removed', () => {
    const returnedAnimal = animalShelter.dequeue('dog');
    expect(returnedAnimal).toEqual('dog');
    expect(animalShelter.animals.top.value).toEqual('cat');
    expect(animalShelter.animals.top.next).toEqual(null);
  });

  test('If preference is at top, return the top animal', () => {
    const returnedAnimal = animalShelter.dequeue('cat');
    expect(returnedAnimal).toEqual('cat');
  });

  test('Should return null if preference is not on list', () => {
    animalShelter.enqueue('cat');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('cat');
    const returnedAnimal = animalShelter.dequeue('dog');
    expect(returnedAnimal).toEqual(null);
  });

  test('Should return the top animal if no preference is given', () => {
    const returnedAnimal = animalShelter.dequeue();
    expect(returnedAnimal).toEqual('cat');
  });
});

