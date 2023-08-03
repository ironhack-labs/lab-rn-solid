export abstract class Shape {
  protected type: string

  constructor (type: string) {
    this.type = type
  }

  public getType (): string {
    return this.type
  }

  abstract getArea(): number
}

export class AreaCalculator {
  public static calculateArea (shape: Shape): number {
    // let area = 0

    // if (shape.getType() === 'circle') {
    //   const circle = shape as Circle
    //   area = Math.PI * circle.radius * circle.radius
    // } else if (shape.getType() === 'rectangle') {
    //   const rectangle = shape as Rectangle
    //   area = rectangle.width * rectangle.height
    // } else if (shape.getType() === 'triangle') {
    //   const triangle = shape as Triangle
    //   area = (triangle.base * triangle.height) / 2
    // }

    // return area
    return shape.getArea()
  }
}

export class Circle extends Shape {
  public radius: number

  constructor (radius: number) {
    super('circle')
    this.radius = radius
  }

  getArea (): number {
    return Math.PI * this.radius * this.radius
  }
}

export class Rectangle extends Shape {
  public width: number
  public height: number

  constructor (width: number, height: number) {
    super('rectangle')
    this.width = width
    this.height = height
  }

  getArea (): number {
    return this.width * this.height
  }
}

export class Triangle extends Shape {
  public base: number
  public height: number

  constructor (base: number, height: number) {
    super('triangle')
    this.base = base
    this.height = height
  }

  getArea (): number {
    return (this.base * this.height) / 2
  }
}

const circle = new Circle(5)
const rectangle = new Rectangle(4, 6)
const triangle = new Triangle(3, 8)

const circleArea = AreaCalculator.calculateArea(circle)
const rectangleArea = AreaCalculator.calculateArea(rectangle)
const triangleArea = AreaCalculator.calculateArea(triangle)

console.log(circleArea)
console.log(rectangleArea)
console.log(triangleArea)
