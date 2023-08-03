export interface Printer {
  printContent(content: string): void;

}

export interface FancyPrinter {
  printContent(content: string): void;
}

export class SimplePrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

export class FancyPrinter implements FancyPrinter {

  printContent(content: string): void {
    console.log(`Printing: ${content}`)
  }
  // TODO: Fill in the missing code to adhere to the Interface Segregation Principle
}