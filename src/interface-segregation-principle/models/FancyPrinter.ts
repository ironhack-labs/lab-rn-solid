import { IFancyPrinter } from "../interfaces";

export default class FancyPrinter implements IFancyPrinter {
  public printContent(content: string): void {
    console.log(`Fancy printing: ${content}`);
  }
}
