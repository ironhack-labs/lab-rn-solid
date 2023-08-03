//Primero, se fragmentaron las interfaces en dos partes para que su influencia sea dinámica según la selección, 
//y se eliminó el tipo "Impresora" que anteriormente hacía referencia a ambas interfaces como una sola .
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

