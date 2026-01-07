import Animal from './animal.js';
import Dog from './dog.js';
import Cat from './cat.js';
export default class Zoo {
  #animals;
  constructor() {
    this.#animals = [];
  }
  addAnimal(animal) {
    if (!Animal.prototype.isPrototypeOf(animal)) {
      throw new Error('animal must instance from Animal class ');
    }
    this.#animals.push(animal);
  }
  makeAllSpeak() {
    const speakArray = [];
    for (let i in this.#animals) {
      speakArray.push(this.#animals[i].speak());
    }
    return speakArray;
  }
}

// const ganHAyot = new Zoo();
// const dog = new Dog('lasi', 5);
// const cat = new Cat('miki');
// ganHAyot.addAnimal(dog);
// ganHAyot.addAnimal(cat);
// console.log(ganHAyot.makeAllSpeak());
