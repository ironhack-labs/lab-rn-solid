// export class Animal {
//   // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
// }

// export class Dog extends Animal {
//   private name: string;

//   constructor(name: string) {
//     super();
//     this.name = name;
//   }

//   // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
// }

// export class Fish extends Animal {
//   private type: string;

//   constructor(type: string) {
//     super();
//     this.type = type;
//   }

//   // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
// }

// // Example Usage:
// export function printInfo(animal: Animal): void {
//   console.log(`Info: ${animal.getInfo()}`);
// }

class Animal {
  public getInfo(): string {
    return "Animal";
  }
}

class Dog extends Animal {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public getInfo(): string {
    return `Dog - ${this.name}`;
  }
}

class Fish extends Animal {
  private type: string;

  constructor(type: string) {
    super();
    this.type = type;
  }

  public getInfo(): string {
    return `Fish - ${this.type}`;
  }
}

function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}

const dog = new Dog("Buddy");
const fish = new Fish("Goldfish");

printInfo(dog); // Output: Info: Dog - Buddy
printInfo(fish); // Output: Info: Fish - Goldfish

