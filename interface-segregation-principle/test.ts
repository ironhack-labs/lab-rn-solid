import { Printer, SimplePrinter, FancyPrinter } from "./Printer";

// Example Usage:
const simplePrinter: Printer = new SimplePrinter();
const fancyPrinter: Printer = new FancyPrinter();

simplePrinter.printContent("Hello, this is a simple printer."); // Output: Printing: Hello, this is a simple printer.
fancyPrinter.printContent("Hello, this is a fancy printer."); // Output: Fancy printing: Hello, this is a fancy printer
