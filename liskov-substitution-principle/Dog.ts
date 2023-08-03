import { Animal } from "./Animal";

export class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  getInfo(): string {
    return `Dog - ${super.getInfo()}`;
  }
}
