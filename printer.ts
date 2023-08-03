export interface SimplePrinter {
  printContent(content: string): void;
}

export interface FancyPrinter {
  printFancyContent(content: string): void;
}

export class SimplePrinterImpl implements SimplePrinter {
  public printContent(content: string): void {
    console.log(`Imprimiendo: ${content}`);
  }
}

export class FancyPrinterImpl implements FancyPrinter {
  public printFancyContent(content: string): void {
    console.log(`Imprimiendo en modo elegante: ${content}`);
  }
}

