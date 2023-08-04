export interface Printer {
  printContent(content: string): void;
  
}

export class SimplePrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

export class FancyPrinter implements Printer {
  // TODO: Fill in the missing code to adhere to the Interface Segregation Principle

  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }

  public printFancyContent = (content: string) => {
    console.log(`Printing fancy: ${content}`);
  };
}