export class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getInfo(): string {
    return this.name;
  }
}
