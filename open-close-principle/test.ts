import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Triangle } from "./Triangle";
import {
  AreaCalculator,
  CircleAreaCalculator,
  RectangleAreaCalculator,
  TriangleAreaCalculator,
} from "./AreaCalculator";

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

const circleArea = AreaCalculator.calculateArea(
  circle,
  new CircleAreaCalculator()
);
const rectangleArea = AreaCalculator.calculateArea(
  rectangle,
  new RectangleAreaCalculator()
);
const triangleArea = AreaCalculator.calculateArea(
  triangle,
  new TriangleAreaCalculator()
);

console.log(circleArea); // Output: 78.53981633974483
console.log(rectangleArea); // Output: 24
console.log(triangleArea); // Output: 12
