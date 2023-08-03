//Recapitulando nuestro inicio en el Bootcamp, hacemos uso de una clase abstracta para definir despues nuestros metodos.
export abstract class Animal {
  abstract getInfo(): string;
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
