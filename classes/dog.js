import Animal from './animal.js';

export default class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  speak() {
    return 'Woof';
  }
}
