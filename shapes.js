// export  class Shape {
//   protected type: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase base para las shapes
var Shape = /** @class */ (function () {
    function Shape(type) {
        this.type = type;
    }
    Shape.prototype.getType = function () {
        return this.type;
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this, "circle") || this;
        _this.radius = radius;
        return _this;
    }
    // Calculo del area del circulo
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this, "rectangle") || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    // Calculo del area para el rectangulo
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(base, height) {
        var _this = _super.call(this, "triangle") || this;
        _this.base = base;
        _this.height = height;
        return _this;
    }
    // Calculo del area para el triangulo
    Triangle.prototype.calculateArea = function () {
        return (this.base * this.height) / 2;
    };
    return Triangle;
}(Shape));
// Pruebas
var circle = new Circle(5);
var rectangle = new Rectangle(4, 6);
var triangle = new Triangle(3, 8);
console.log(circle.calculateArea()); // Output: 78.53981633974483
console.log(rectangle.calculateArea()); // Output: 24
console.log(triangle.calculateArea()); // Output: 12
