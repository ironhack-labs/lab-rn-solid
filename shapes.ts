// The code provides a way to calculate the area of different shapes. However if we add a new shape we are going to need to modify the AreaCalculator class.
// So this violates the principe Open/Closed because we need to modify an existing class when we extend the code.
// My suggestion is to add a static class called calculateArea to Shape class in order to be overridden in the subclasses. This ensures that you can add new shapes
// by extending the base Shape class. You can introduce new shapes without modifying the existing code.

export class Shape {
  protected type: string

  constructor(type: string) {
    this.type = type
  }

  public getType(): string {
    return this.type
  }

  public calculateArea(): void {}
}

export class Circle extends Shape {
  public radius: number

  constructor(radius: number) {
    super('circle')
    this.radius = radius
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius
  }
}

export class Rectangle extends Shape {
  public width: number
  public height: number

  constructor(width: number, height: number) {
    super('rectangle')
    this.width = width
    this.height = height
  }

  public calculateArea(): number {
    return this.width * this.height
  }
}

export class Triangle extends Shape {
  public base: number
  public height: number

  constructor(base: number, height: number) {
    super('triangle')
    this.base = base
    this.height = height
  }

  public calculateArea(): number {
    return (this.base * this.height) / 2
  }
}
