//Primero que nada nuestra interfaz la dividimos en dos interfaces que afectaran dinamicamente dependiendo la que se use.
//Tambien quitamos el tipo Printer que hacia referencia a estas dos en una sola.

export interface SimplePrinter {
  printContent(content: string): void;
}

export interface FancyPrinter {
  printFancyContent(content: string): void;
}

export class SimplePrinterImpl implements SimplePrinter {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}

export class FancyPrinterImpl implements FancyPrinter {
  public printFancyContent(content: string): void {
    console.log(`Fancy printing: ${content}`);
  }
}
