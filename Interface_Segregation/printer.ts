export interface IPrinter {
  printContent(content: string): void;
}

export interface IFancyPrinter {
  printFancyContent(content: string): void;
}


export class SimplePrinter implements IPrinter {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

export class FancyPrinter implements IFancyPrinter {

  public printFancyContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

