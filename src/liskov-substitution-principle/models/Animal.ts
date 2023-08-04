export default class Animal {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  getInfo(): string {
    return this.type;
  }
}
