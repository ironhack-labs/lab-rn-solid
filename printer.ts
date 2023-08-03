export interface Printer {
  printContent(content: string): void;
  printFancyContent(content: string): void;
}

export class SimplePrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }

  public printFancyContent(content: string): void {
    throw new Error("Method not implemented");
  }
}

export class FancyPrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Fancy printing: ${content}`)  
  }

  public printFancyContent(content: string): void {
    throw new Error('Method not implemented');
  }
}