export class SimplePrinter {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

export class FancyPrinter {
  // TODO: Fill in the missing code to adhere to the Interface Segregation Principle
  public printContent(content: string): void {
    console.log(`Fancy Printing: ${content}`);
  }
}