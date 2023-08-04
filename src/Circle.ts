import { Shape } from "./interfaces/Shape";

export class Circle implements Shape {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * (this.radius * this.radius);
  }
}
