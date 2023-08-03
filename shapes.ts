//Para la refactorizacion del codigo aplicamos el principio de OPEN/CLOSE de SOLID y se implemento lo que es el el principio de Responsabilidad Unica que tambien se miro en el anterior ejercicio.

// Creamos una interfaz que representará la estrategia para calcular el área de una figura.
interface AreaCalculatorStrategy {
  calculateArea(shape: Shape): number;
}

export class Shape {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  public calculateArea(strategy: AreaCalculatorStrategy): number {
    return strategy.calculateArea(this);
  }
}

export class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super("circle");
    this.radius = radius;
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
}

export class Triangle extends Shape {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    super("triangle");
    this.base = base;
    this.height = height;
  }
}

class CircleAreaCalculator implements AreaCalculatorStrategy {
  public calculateArea(circle: Circle): number {
    return Math.PI * circle.radius * circle.radius;
  }
}

class RectangleAreaCalculator implements AreaCalculatorStrategy {
  public calculateArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }
}

class TriangleAreaCalculator implements AreaCalculatorStrategy {
  public calculateArea(triangle: Triangle): number {
    return (triangle.base * triangle.height) / 2;
  }
}
export class AreaCalculator {
  public static calculateArea(shape: Shape): number {
    let areaCalculatorStrategy: AreaCalculatorStrategy;

    if (shape instanceof Circle) {
      areaCalculatorStrategy = new CircleAreaCalculator();
    } else if (shape instanceof Rectangle) {
      areaCalculatorStrategy = new RectangleAreaCalculator();
    } else if (shape instanceof Triangle) {
      areaCalculatorStrategy = new TriangleAreaCalculator();
    } else {
      throw new Error("Tipo de figura no válido."); //Usamos el manejo de errores por cualquier casualidad.
    }

    return shape.calculateArea(areaCalculatorStrategy);
  }
}
