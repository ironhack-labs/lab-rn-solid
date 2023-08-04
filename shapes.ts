export abstract class Shape {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  abstract calculateArea(): number;
}

export class AreaCalculator {
  public static calculateArea(shape: Shape): number {
    /*
    let area = 0;

    if (shape.getType() === "circle") {
      const circle = shape as Circle;
      area = Math.PI * circle.radius * circle.radius;
    } else if (shape.getType() === "rectangle") {
      const rectangle = shape as Rectangle;
      area = rectangle.width * rectangle.height;
    } else if (shape.getType() === "triangle") {
      const triangle = shape as Triangle;
      area = (triangle.base * triangle.height) / 2;
    }

    return area;
    */
    return shape.calculateArea();
  }
}

export class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super("circle");
    this.radius = radius;
  }

  public calculateArea (): number {
    return Math.PI * this.radius * this.radius;;
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

  public calculateArea (): number {
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

  public calculateArea (): number {
    return (this.base * this.height) / 2;;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

const circleArea = AreaCalculator.calculateArea(circle);
const rectangleArea = AreaCalculator.calculateArea(rectangle);
const triangleArea = AreaCalculator.calculateArea(triangle);

console.log(circleArea); // Output: 78.53981633974483
console.log(rectangleArea); // Output: 24
console.log(triangleArea); // Output: 12


/**
 * Aquí no vi la manera de no cambiar el código del método
 * calculateArea de la clase AreaCalculator, pero recordé
 * que los pricipios SOLID no son leyes y que debemos apegarnos
 * a ellos lo más que podamos. 
 * Por esa razón lo que hice fue agregar una función abstracta
 * a la clase Shape que al mismo tiempo la convertí en clase
 * abstracta. con ello cada clase que era de Shape puede
 * implementar su propio método calculateArea. Entonces
 * aquí creo que no se cumplió al 100% el principio
 * pero sí se extendió el código.
 */