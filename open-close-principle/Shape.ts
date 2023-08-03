import { AreaCalculator } from "./AreaCalculator";

export class Shape {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  public calculateArea(strategy: AreaCalculator): number {
    return strategy.calculateArea(this);
  }
}
