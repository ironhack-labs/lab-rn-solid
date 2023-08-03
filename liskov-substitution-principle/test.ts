import { Animal } from "./Animal";
import { Fish } from "./Fish";
import { Dog } from "./Dog";

// Example Usage:
function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}

const dog = new Dog("Buddy");
const fish = new Fish("Goldfish");

printInfo(dog); // Output: Info: Dog - Buddy
printInfo(fish); // Output: Info: Fish - Goldfish
