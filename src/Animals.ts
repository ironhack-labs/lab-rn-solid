export class Animal {
  getInfo(): string {
    return "";
  }
}

export class Dog extends Animal {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  getInfo(): string {
    return `Dog - ${this.name}`;
  }
}

export class Fish extends Animal {
  private type: string;

  constructor(type: string) {
    super();
    this.type = type;
  }

  getInfo(): string {
    return `Fish - ${this.type}`;
  }
}

export function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}
