export class Animal {
  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
  protected nameOrType: string;

  constructor(nameOrType: string) {
    this.nameOrType = nameOrType;
  }

  public getInfo(): string {
    return this.nameOrType;
  }
}

export class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
  // Dog-specific behavior, adheres to Liskov Substitution Principle
  public getInfo(): string {
    return `Dog - ${this.nameOrType}`;
  }
}

export class Fish extends Animal {
  constructor(type: string) {
    super(type);
  }

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
  // Fish-specific behavior, adheres to Liskov Substitution Principle
  public getInfo(): string {
    return `Fish - ${this.nameOrType}`;
  }
}

// Example Usage:
export function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}
