import { Animal } from "./animal";

export class Fish extends Animal {
  constructor(private fishType: string) {
    super("Fish");
  }

  public getInfo(): string {
    return `${this.getType()} - ${this.fishType}`;
  }
}
