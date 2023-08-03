import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Triangle } from "./Triangle";
import { Rectangle } from "./Rectangle";

export interface AreaCalculator {
  calculateArea(shape: Shape): number;
}

export class CircleAreaCalculator implements AreaCalculator {
  public calculateArea(shape: Shape): number {
    const circle = shape as Circle;
    return Math.PI * circle.radius * circle.radius;
  }
}

export class RectangleAreaCalculator implements AreaCalculator {
  public calculateArea(shape: Shape): number {
    const rectangle = shape as Rectangle;
    return rectangle.width * rectangle.height;
  }
}

export class TriangleAreaCalculator implements AreaCalculator {
  public calculateArea(shape: Shape): number {
    const triangle = shape as Triangle;
    return (triangle.base * triangle.height) / 2;
  }
}

export class AreaCalculator {
  public static calculateArea(shape: Shape, strategy: AreaCalculator): number {
    return shape.calculateArea(strategy);
  }
}
