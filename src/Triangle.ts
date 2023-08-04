import { Shape } from "./interfaces/Shape";

export class Triangle implements Shape {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    this.height = height;
    this.base = base;
  }

  area(): number {
    return (this.base * this.height) / 2;
  }
}
