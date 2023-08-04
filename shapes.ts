/* 
Initial Code: The initial code provided two classes, Shape and AreaCalculator. The Shape class represented different shapes, and the AreaCalculator class calculated the area of each shape based on its type. However, the code violated the Open/Closed Principle because every time a new shape was added, the AreaCalculator needed to be modified to accommodate the new shape.

Refactoring Plan: To adhere to the Open/Closed Principle, we applied the Strategy Pattern. We introduced an interface IShape, which defines methods getType() and getArea(). Then, each specific shape class (Circle, Rectangle, Triangle) implemented this interface and provided its own implementation for getArea() to calculate its area.

Refactored Code - shape.ts: The Shape class now implements the IShape interface and provides a basic implementation of getArea() that returns 0. The individual shape classes (Circle, Rectangle, and Triangle) extend the Shape class and override getArea() with their own area calculation logic.

Refactored Code - areaCalculator.ts: The AreaCalculator class now accepts an object of type IShape instead of checking for shape types explicitly. It calls the getArea() method on the passed object, which dynamically calculates the area based on the specific shape's logic.

Result: With this refactoring, the code adheres to the Open/Closed Principle. Now, when adding a new shape, we only need to create a new class that implements IShape and provides the getArea() method without modifying the existing code. The AreaCalculator class remains closed for modification and open for extension, making the code more maintainable and extensible.
*/

// shapes.ts

class Shape {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  public getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super("circle");
    this.radius = radius;
  }

  public getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    super("rectangle");
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    super("triangle");
    this.base = base;
    this.height = height;
  }

  public getArea(): number {
    return (this.base * this.height) / 2;
  }
}

class AreaCalculator {
  public static calculateArea(shape: Shape): number {
    return shape.getArea();
  }
}

export { Shape, Circle, Rectangle, Triangle, AreaCalculator };
