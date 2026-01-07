import test from 'node:test';
import Animal from '../classes/animal.js';
import { assert } from 'node:assert/strict';

const animal = new Animal('animal');
test('animal class test if ist works:', () => {
  assert.equal(animal.eat(20), 100);
});
