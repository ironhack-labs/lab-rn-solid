/* 
we have ensured adherence to the Interface Segregation Principle by segregating the interfaces. We created two separate interfaces - Printer and FancyPrinter. The Printer interface contains the common method printContent(), while the FancyPrinter interface extends the Printer interface and adds the printFancyContent() method.

The SimplePrinter class implements the Printer interface and provides a basic implementation for printContent().
The FancyPrinter class implements the FancyPrinter interface, which extends the Printer interface. It provides implementations for both printContent() and printFancyContent() methods.
By segregating the interfaces, the FancyPrinter class is not forced to implement any unnecessary methods. Each class adheres to the Interface Segregation Principle, providing only the methods it requires.
*/

interface Printer {
  printContent(content: string): void;
}

interface FancyPrinter extends Printer {
  printFancyContent(content: string): void;
}

class SimplePrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

class FancyPrinter implements FancyPrinter {
  public printContent(content: string): void {
    console.log(`Fancy printing: ${content}`);
  }

  public printFancyContent(content: string): void {
    console.log(`Fancy printing: ${content}`);
  }
}

export { Printer, SimplePrinter, FancyPrinter };
