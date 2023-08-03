// export interface Printer {
//   printContent(content: string): void;
//   printFancyContent(content: string): void;
// }
var SimplePrinter = /** @class */ (function () {
    function SimplePrinter() {
    }
    SimplePrinter.prototype.printContent = function (content) {
        console.log("Printing: ".concat(content));
    };
    return SimplePrinter;
}());
var FancyPrinter = /** @class */ (function () {
    function FancyPrinter() {
    }
    FancyPrinter.prototype.printContent = function (content) {
        console.log("Fancy printing: ".concat(content));
    };
    return FancyPrinter;
}());
// Pruebas
var simplePrinter = new SimplePrinter();
var fancyPrinter = new FancyPrinter();
simplePrinter.printContent("Hello, this is a simple printer."); // Output: Printing: Hello, this is a simple printer.
fancyPrinter.printContent("Hello, this is a fancy printer."); // Output: Fancy printing: Hello, this is a fancy printer.
