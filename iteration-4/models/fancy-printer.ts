import { Printer } from "./printer";

export class FancyPrinter implements Printer {
  public printContent(content: string): void {
    console.log(`Fancy printing: ${content}`);
  }
}
