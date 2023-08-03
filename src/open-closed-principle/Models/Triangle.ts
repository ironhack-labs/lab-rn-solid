import Shape from "./Shape";

export default class Triangle extends Shape {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    super("triangle");
    this.base = base;
    this.height = height;
  }

  public calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}
