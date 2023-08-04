export abstract class Animal {
  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle

  abstract getInfo : () => string
}

export class Dog extends Animal {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public getInfo = () => {
    return `The name of the dog is ${this.name}`
  } 

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
}

export class Fish extends Animal {
  private type: string;

  constructor(type: string) {
    super();
    this.type = type;
  }

  public getInfo = () => {
    return `The type of the fish is ${this.type}`
  } 

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
}

// Example Usage:
export function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}
