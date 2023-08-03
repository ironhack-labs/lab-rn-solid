export class Animal {
  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
  private name: string;
  private type: string;

  constructor(name: string, type: string){
    this.name = name;
    this.type = type; 
  };

  getInfo(){
    return `${this.type}-${this.name}`
  };
}

export class Dog extends Animal {
  constructor(name: string) {
    super(name, "Dog");
  }

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
}

export class Fish extends Animal {
  constructor(name: string) {
    super(name, "Fish");
  }

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
}

// Example Usage:
export function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}
