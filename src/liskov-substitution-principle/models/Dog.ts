import Animal from "./Animal";

export default class Dog extends Animal {
  private name: string;
  constructor(name: string) {
    super("Dog");
    this.name = name;
  }

  getInfo(): string {
    return `${super.getInfo()} - ${this.name}`;
  }
}
