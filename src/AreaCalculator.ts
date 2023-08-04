import { Shape } from "./interfaces/Shape";

export class AreaCalculator {
  public static calculateArea(shapes: Shape[]): number {
    let area = 0;
    for (let shape of shapes) {
      area += shape.area();
    }
    return area;
  }
}
