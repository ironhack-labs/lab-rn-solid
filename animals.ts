export class Animal {
  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
  protected species: string;

  constructor(species: string) {
    this.species = species;
  }

  getInfo(): string {
    return `${this.species} - ${this.getName()}`;
  }

  getName(): string {
    throw new Error('This method should be implemented in subclasses');
  }
}

export class Dog extends Animal {
  private name: string;

  constructor(name: string) {
    super('Dog');
    this.name = name;
  }

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
  getName(): string {
    return this.name;
  }
}

export class Fish extends Animal {
  private type: string;

  constructor(type: string) {
    super('Fish');
    this.type = type;
  }

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
  getName(): string {
    return this.type;
  }
}

// Example Usage:
export function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}


/**
 * Examples 
 */
const dog = new Dog('Buddy');
const fish = new Fish('Goldfish');

printInfo(dog);
printInfo(fish);


/**
 * Animal class needs the "getName(). getInfo() method is implemented in the parent class, to reeturn information about the species and the name of the animal."
 * By using this design instances of Dog and Fish can be used interchangeably with instances of 'Animal' class.
 */