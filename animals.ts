//Recapitulando nuestro inicio en el Bootcamp, hacemos uso de una clase abstracta para definir despues nuestros metodos.

// Definimos una clase abstracta llamada "Animal" para despues definir los metodos
export abstract class Animal {
  // Declarando un método abstracto "getInfo" que será implementado por las subclases
  abstract getInfo(): string;
}

// Creando una subclase "Dog" que extiende de "Animal"
export class Dog extends Animal {
  private name: string;

  // Constructor para inicializar el nombre del perro
  constructor(name: string) {
    super();
    this.name = name;
  }

  // Implementando el método abstracto "getInfo" de la clase base
  getInfo(): string {
    return `Perro - ${this.name}`;
  }
}

// Creamos otra subclase "Fish" que extiende de "Animal"
export class Fish extends Animal {
  private type: string;

  // Constructor para inicializar el tipo de pez
  constructor(type: string) {
    super();
    this.type = type;
  }

  // Implementando el método abstracto "getInfo" de la clase base
  getInfo(): string {
    return `Pez - ${this.type}`;
  }
}
