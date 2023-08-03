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

/* Para mejorar esto podemos crear una funcion para calcular el area dentro de la clase "Shape" y sobreescribirla cada que extendamos la clase,
de esta forma la clase queda abierta a expandirse sin necesidad de modificarla cada vez que se quiera agregar una nueva forma */ 

export class Shape {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  calculateArea(): number {
    return 0;
  }
}

export class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super("circle");
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
    super("rectangle");
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
    super("triangle");
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return (this.height * this.base) / 2;
  }
}

export class AreaCalculator {
  public static calculateArea(shape: Shape): number {
    return shape.calculateArea();
  }
}
