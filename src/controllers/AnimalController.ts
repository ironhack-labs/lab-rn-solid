import { Dog, Fish, printInfo } from "../../animals";

const dog = new Dog('El pulgas');
const fish = new Fish('Nemo');

printInfo(dog); // Output: "Info: This is a dog named Buddy"
printInfo(fish); // Output: "Info: This is a fish of type Goldfish"