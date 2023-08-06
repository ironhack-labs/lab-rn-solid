export abstract class Shape {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  // Abstract method to calculate the area for each shape
  public abstract calculateArea(): number;
}

export class AreaCalculator {
  public static calculateArea(shape: Shape): number {
    return shape.calculateArea();
  }
}

export class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super("circle");
    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    super("rectangle");
    this.width = width;
    this.height = height;
  }
  public calculateArea(): number {
    return this.width * this.height;
  }
}

export class Triangle extends Shape {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    super("triangle");
    this.base = base;
    this.height = height;
  }
  public calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}
