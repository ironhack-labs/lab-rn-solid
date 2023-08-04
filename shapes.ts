// export  class Shape {
//   protected type: string;

//   constructor(type: string) {
//     this.type = type;
//   }

//   public getType(): string {
//     return this.type;
//   }
// }

// export class AreaCalculator {
//   public static calculateArea(shape: Shape): number {
//     let area = 0;

//     if (shape.getType() === "circle") {
//       const circle = shape as Circle;
//       area = Math.PI * circle.radius * circle.radius;
//     } else if (shape.getType() === "rectangle") {
//       const rectangle = shape as Rectangle;
//       area = rectangle.width * rectangle.height;
//     } else if (shape.getType() === "triangle") {
//       const triangle = shape as Triangle;
//       area = (triangle.base * triangle.height) / 2;
//     }

//     return area;
//   }
// }

// export class Circle extends Shape {
//   public radius: number;

//   constructor(radius: number) {
//     super("circle");
//     this.radius = radius;
//   }
// }

// export class Rectangle extends Shape {
//   public width: number;
//   public height: number;

//   constructor(width: number, height: number) {
//     super("rectangle");
//     this.width = width;
//     this.height = height;
//   }
// }

// export class Triangle extends Shape {
//   public base: number;
//   public height: number;

//   constructor(base: number, height: number) {
//     super("triangle");
//     this.base = base;
//     this.height = height;
//   }
// }

// Interface para el calculo del area
export interface AreaCalculator {
  calculateArea(): number;
}

// Clase base para las shapes
export abstract class Shape implements AreaCalculator {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  // Metodo abstract para calcular el area de las shapes
  abstract calculateArea(): number;
}

export class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super("circle");
    this.radius = radius;
  }

  // Calculo del area del circulo
  calculateArea(): number {
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

  // Calculo del area para el rectangulo
  calculateArea(): number {
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

  // Calculo del area para el triangulo
  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}

