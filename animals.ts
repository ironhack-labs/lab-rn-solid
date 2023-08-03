export abstract class Animal {
  // Abstract method getInfo, which will be implemented in derived classes
  public abstract getInfo(): string;
}

export class Dog extends Animal {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  // Implementation of getInfo for Dog
  public getInfo(): string {
    return `This is a dog named ${this.name}`;
  }
}

export class Fish extends Animal {
  private type: string;

  constructor(type: string) {
    super();
    this.type = type;
  }

  // Implementation of getInfo for Fish
  public getInfo(): string {
    return `This is a fish of type ${this.type}`;
  }
}

// Example Usage:
export function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}
