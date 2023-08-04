export interface Printer {
  printContent(content: string): void;
}

export interface FancyPrinter {
  printFancyContent(content: string): void;
}

export class SimplePrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

export class FancyPrinter implements FancyPrinter {
  // TODO: Fill in the missing code to adhere to the Interface Segregation Principle
  public printFancyContent(content: string): void {
    console.log(`Fancy printing: ${content}`);
  }
}

const simplePrinter: Printer = new SimplePrinter();
const fancyPrinter: FancyPrinter = new FancyPrinter();

simplePrinter.printContent('Hello, this is a simple printer.');
fancyPrinter.printFancyContent('Hello, this is a fancy printer.');