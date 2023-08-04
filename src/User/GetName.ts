export class GetName {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  public getName(name: string): string {
    return name.toUpperCase();
  }
}
