import { ISimplePrinter } from "../interfaces";

export default class SimplePrinter implements ISimplePrinter {
  public printContent(content: string): void {
    console.log(`Printing: ${content}`);
  }
}
