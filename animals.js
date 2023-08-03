// export class Animal {
//   // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
// }
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
// export class Dog extends Animal {
//   private name: string;
//   constructor(name: string) {
//     super();
//     this.name = name;
//   }
//   // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
// }
// export class Fish extends Animal {
//   private type: string;
//   constructor(type: string) {
//     super();
//     this.type = type;
//   }
//   // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
// }
// // Example Usage:
// export function printInfo(animal: Animal): void {
//   console.log(`Info: ${animal.getInfo()}`);
// }
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.getInfo = function () {
        return "Animal";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.getInfo = function () {
        return "Dog - ".concat(this.name);
    };
    return Dog;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(type) {
        var _this = _super.call(this) || this;
        _this.type = type;
        return _this;
    }
    Fish.prototype.getInfo = function () {
        return "Fish - ".concat(this.type);
    };
    return Fish;
}(Animal));
function printInfo(animal) {
    console.log("Info: ".concat(animal.getInfo()));
}
var dog = new Dog("Buddy");
var fish = new Fish("Goldfish");
printInfo(dog); // Output: Info: Dog - Buddy
printInfo(fish); // Output: Info: Fish - Goldfish
