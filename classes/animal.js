export default class Animal {
  #energy;
  constructor(name) {
    this.name = name;
    this.#energy = 90;
  }
  getEnergy() {
    return this.#energy;
  }
  eat(amount) {
    if (amount <= 0) {
      throw new Error('numbers must be positive');
    }
    if (amount + this.#energy >= 100) {
      this.#energy = 100;
    } else {
      this.#energy += amount;
    }
    return this.#energy;
  }
  speak() {
    return '';
  }
}
