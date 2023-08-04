export abstract class Shape {
  protected type: string;
  protected area : number;

  constructor(type: string, area: number) {
    this.type = type;
    this.area = area;
  }

  public getType(): string {
    return this.type;
  }

  abstract getArea : () => number
}

export class AreaCalculator {
  public static calculateArea(shape: Shape): number {

    const area = shape.getArea();

    return area;
  }
}

export class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    const area = Math.PI * radius * radius;
    super("circle", area);
    this.radius = radius;
  }

  public  getArea = () => {
    
    return this.area;
  }

  
}

export class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    const area = Math.PI * width * height;
    super("rectangle", area);
    this.width = width;
    this.height = height;
  }

  public  getArea = () => {
    return this.area;
  }
}

export class Triangle extends Shape {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    const area = (base * height) / 2;
    super("triangle", area);
    this.base = base;
    this.height = height;
  }

  public  getArea = () => {
    return this.area;
  }
}