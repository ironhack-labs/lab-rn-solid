import { Animal } from "./Animal";

export class Fish extends Animal {
  private type: string;
  constructor(type: string) {
    super(type);
    this.type = type;
  }

  getInfo(): string {
    return `Fish - ${this.type}`;
  }
}
