export interface Printer {
  printContent(content: string): void;
}

export interface PrinterF {
  printFancyContent(content: string): void;
}

export class SimplePrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

export class FancyPrinter implements PrinterF {
  // TODO: Fill in the missing code to adhere to the Interface Segregation Principle
  public printFancyContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

// Example Usage:
const simplePrinter: Printer = new SimplePrinter();
const fancyPrinter: PrinterF = new FancyPrinter();

simplePrinter.printContent("Hello, this is a simple printer."); // Output: Printing: Hello, this is a simple printer.
fancyPrinter.printFancyContent("Hello, this is a fancy printer."); // Output: Fancy printing: Hello, this is a fancy printer.

/**
 * en este caso se separó la interfaz Printer en dos
 * por así decirlo. la cual ahora es Printer y PrinterF,
 * cada una con un método adecuado. Así cada clase 
 * implementa una interfaz adecuada.
 */