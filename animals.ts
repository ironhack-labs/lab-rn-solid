/*
Requirements:

Complete the Animal class to ensure it follows the Liskov Substitution Principle. 
The Animal class should have a method named getInfo that returns information about the animal.

Complete the Dog class to ensure it follows the Liskov Substitution Principle. 
The Dog class should implement the getInfo method to return information specific to a dog.

Complete the Fish class to ensure it follows the Liskov Substitution Principle. 
The Fish class should implement the getInfo method to return information specific to a fish.
*/

export abstract class Animal {
  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle

  abstract getInfo(): string;
}

export class Dog extends Animal {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
  public getInfo(): string {
    return this.name;
  }
}

export class Fish extends Animal {
  private type: string;

  constructor(type: string) {
    super();
    this.type = type;
  }

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
  public getInfo(): string {
    return this.type;
  }
}

// Example Usage:
export function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}

const dog = new Dog("Buddy");
const fish = new Fish("Goldfish");

printInfo(dog); // Output: Info: Dog - Buddy
printInfo(fish); // Output: Info: Fish - Goldfish

/**
 * Se tuvo que reafactorizar un poco la clase base,
 * que ahora es abstracta. con ello podemos usar
 * el parametro animal de tipo Animal y ejecutar 
 * el metodo abstracto getInfo en la función printInfo,
 * que da como resultado la información distintiva 
 * del objeto animal ya que en cada subclase de
 * implementa el método abstracto getInfo.
 */