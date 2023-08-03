// export interface Printer {
//   printContent(content: string): void;
//   printFancyContent(content: string): void;
// }

// export class SimplePrinter implements Printer {
//   public printContent(content: string): void {
//     console.log(`Printing: ${content}`);
//   }
// }

// export class FancyPrinter implements Printer {
//   // TODO: Fill in the missing code to adhere to the Interface Segregation Principle
// }

interface Printer {
  printContent(content: string): void;
}

interface FancyPrinter {
  printFancyContent(content: string): void;
}

class SimplePrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

class FancyPrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Fancy printing: ${content}`);
  }
}

// Pruebas
const simplePrinter: Printer = new SimplePrinter();
const fancyPrinter: Printer = new FancyPrinter();

simplePrinter.printContent("Hello, this is a simple printer."); // Output: Printing: Hello, this is a simple printer.
fancyPrinter.printContent("Hello, this is a fancy printer."); // Output: Fancy printing: Hello, this is a fancy printer.
