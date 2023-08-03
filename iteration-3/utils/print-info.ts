import { Animal } from "../models";

export function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}
