import User from "./user"
import { Circle, Rectangle, Triangle, AreaCalculator } from "./shapes";
import {Dog, Fish, Animal} from './animals'
import { FancyPrinterImpl, SimplePrinterImpl, SimplePrinter, FancyPrinter } from './printer'
// import {FileLogger, DatabaseLogger, type Logger} from './Logger'



console.log('------------Iteracion 1---------------');

const user = new User(1, "John Doe", "john@example.com", "secretpassword");
user.saveToDatabase();
user.sendWelcomeEmail();

// Ejemplo utilizando validatePassword():

const inputPassword2 = "password123";
if (user.validatePassword(inputPassword2)) {
  console.log(`La contraseña del usuario ${user.getName()} es correcta.`);
} else {
  console.log(`La contraseña del usuario ${user.getName()} es incorrecta.`);
}

console.log('------------Iteracion 2---------------');


// Iteration 2:

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

const circleArea = AreaCalculator.calculateArea(circle);
const rectangleArea = AreaCalculator.calculateArea(rectangle);
const triangleArea = AreaCalculator.calculateArea(triangle);

console.log(circleArea); // Output: 78.53981633974483
console.log(rectangleArea); // Output: 24
console.log(triangleArea); // Output: 12

console.log('------------Iteracion 3---------------');


// // Iteration 3: 

function printInfo(animal: Animal): void {
    console.log(`Informacion: ${animal.getInfo()}`);
}

const dog = new Dog("Buddy");
const fish = new Fish("Goldfish");

printInfo(dog); // Output: Info: Dog - Buddy
printInfo(fish); // Output: Info: Fish - Goldfish

// // Iteration 4:

// const simplePrinter: Printer = new SimplePrinter();
// const fancyPrinter: Printer = new FancyPrinter();

// // Iteration 5:

// const fileLogger: Logger = new FileLogger();
// const databaseLogger: Logger = new DatabaseLogger();

// fileLogger.log("This is a log message in a file."); // Output: Logging to file: This is a log message in a file.
// databaseLogger.log("This is a log message in the database."); // Output: Logging to database: This is a log message in the database.