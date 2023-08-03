interface SimplePrinter {
  printContent(content: string): void;
}

interface FancyPrinter {
  printFancyContent(content: string): void;
}

class SimpleTextPrinter implements SimplePrinter {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

class FancyTextPrinter implements FancyPrinter {
  public printFancyContent(content: string): void {
    console.log(`Fancy printing: ${content}`);
  }
}

// Example Usage:
const simplePrinter: SimplePrinter = new SimpleTextPrinter();
const fancyPrinter: FancyPrinter = new FancyTextPrinter();

simplePrinter.printContent("Hello, this is a simple printer."); // Output: Printing: Hello, this is a simple printer.
fancyPrinter.printFancyContent("Hello, this is a fancy printer."); // Output: Fancy printing: Hello, this is a fancy printer.
