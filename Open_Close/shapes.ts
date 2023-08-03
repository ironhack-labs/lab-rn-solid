export abstract class Shape {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  //Cree el metodo abstracto calculateArea en la clase padre para poder heredarla a las clases hijas y hacer la formula para cada figura
  //Asi cuando se necesite agregar otra figura y una formula distinta no habria necesidad de modificar la clase padre
  public abstract calculateArea(): number
}

//Decidi eliminar la clase AreaCalculator ya que podria ser redundante 
// export class AreaCalculator {
//   public static calculateArea(shape: Shape): number {
//     return shape.calculateArea();
//   }
// }


export class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super("circle");
    this.radius = radius;
  }

  public calculateArea(): number {
    const area = Math.PI * this.radius * this.radius;
    return area
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
    const area = this.width * this.height;
    return area
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
    const area = (this.base * this.height) / 2;
    return area
  }
}