export interface Printer {
  printContent(content: string): void
}

export class SimplePrinter implements Printer {
  public printContent (content: string): void {
    console.log(`Printing: ${content}`)
  }
}

export class FancyPrinter implements Printer {
  public printContent (content: string): void {
    console.log(`Fancy printing: ${content}`)
  }
}

// Example Usage:
const simplePrinter: Printer = new SimplePrinter()
const fancyPrinter: Printer = new FancyPrinter()

simplePrinter.printContent('Hello, this is a simple printer.')
fancyPrinter.printContent('Hello, this is a fancy printer.')
