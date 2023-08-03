import { Shape } from "./shape";

export class Triangle extends Shape {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    super("triangle");
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}
