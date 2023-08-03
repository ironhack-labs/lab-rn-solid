/* 
The Animal class now has a getInfo() method that returns information about the animal, initially set to "Animal".
The Dog class has implemented the getInfo() method to return specific information about the dog, including the dog's name.
The Fish class has implemented the getInfo() method to return specific information about the fish, including the type of fish.
Both the Dog and Fish classes are subclasses of the base class Animal, and by using the getInfo() method in the printInfo() function, we can see that they adhere to the Liskov Substitution Principle. Both classes can be substituted by an object of the base class Animal without affecting the correct functionality of the program.
*/

// animals.ts

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

export { Animal, Dog, Fish };
