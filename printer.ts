export interface SimplePrinter {
  printContent(content: string): void;
}

export interface FancyPrinter {
  printFancyContent(content: string): void;
}

export class SimplePrinterIt2 implements SimplePrinter {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

export class FancyPrinterIt2 implements FancyPrinter {
  public printFancyContent(content: string): void {
    console.log(`Fancy printing ${content}`);
  }
}

