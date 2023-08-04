import Animal from "./models/Animal";

export default function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}
