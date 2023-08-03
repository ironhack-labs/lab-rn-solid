export abstract class Shape {
  abstract calculateArea(): number;
}

export class AreaCalculator {

  public static calculateArea(shape: Shape): number {
    return shape.calculateArea();
  }
}

export class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

export class Triangle extends Shape {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}