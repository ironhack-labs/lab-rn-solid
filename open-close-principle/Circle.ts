import { Shape } from "./Shape";

export class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super("circle");
    this.radius = radius;
  }
}
