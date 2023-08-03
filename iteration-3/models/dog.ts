import { Animal } from "./animal";

export class Dog extends Animal {
  constructor(private name: string) {
    super("Dog");
  }

  public getName(): string {
    return this.name;
  }

  public getInfo(): string {
    return `${this.getType()} - ${this.getName()}`;
  }
}
