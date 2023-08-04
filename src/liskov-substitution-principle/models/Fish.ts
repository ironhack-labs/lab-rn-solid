import Animal from "./Animal";

export default class Fish extends Animal {
  constructor(type: string) {
    super(type);
  }

  getInfo(): string {
    return `Fish - ${super.getInfo()}`;
  }
}
