export abstract class Animal {
  constructor(protected type: string) {}

  protected getType(): string {
    return this.type;
  }

  public abstract getInfo(): string;
}
